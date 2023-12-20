-- Commentable Entities
create type commentable_entity_type as enum('METRIC', 'METRIC_DATA_POINT');

create table
  public.commentable_entities (
    id uuid primary key default gen_random_uuid (),
    team_id uuid not null references public.teams (id) on update cascade on delete cascade,
    type commentable_entity_type not null
  );

create index on public.commentable_entities (team_id);

alter table public.metrics
add column commentable_entity_id uuid references public.commentable_entities (id) on update cascade on delete cascade;

alter table public.metrics_data_points
add column commentable_entity_id uuid references public.commentable_entities (id) on update cascade on delete cascade;

create function private.insert_commentable_entity_for_metrics () returns trigger as $$
declare
  commentable_entity_id uuid;
begin
  insert into public.commentable_entities (team_id, type) values (new.team_id, 'METRIC') returning id into commentable_entity_id;
  
  update public.metrics set commentable_entity_id = commentable_entity_id where id = new.id;
end;
$$ language plpgsql security definer;

create function private.insert_commentable_entity_for_metrics_data_points () returns trigger as $$
declare
  commentable_entity_id uuid;
begin
  insert into public.commentable_entities (team_id, type) values (new.team_id, 'METRIC_DATA_POINT') returning id into commentable_entity_id;
  
  update public.metrics_data_points set commentable_entity_id = commentable_entity_id where id = new.id;
end;
$$ language plpgsql security definer;

create function private.delete_commentable_entity () returns trigger as $$
begin
  delete from public.commentable_entities where id = old.commentable_entity_id;
end;
$$ language plpgsql security definer;

create trigger metrics_insert_commentable_entity
after insert on public.metrics for each row
execute procedure private.insert_commentable_entity_for_metrics ();

create trigger metrics_delete_commentable_entity
after delete on public.metrics for each row
execute procedure private.delete_commentable_entity ();

create trigger metrics_data_points_insert_commentable_entity
after insert on public.metrics_data_points for each row
execute procedure private.insert_commentable_entity_for_metrics_data_points ();

create trigger metrics_data_points_delete_commentable_entity
after delete on public.metrics_data_points for each row
execute procedure private.delete_commentable_entity ();

revoke
select
,
  insert,
update,
delete on public.commentable_entities
from
  anon,
  authenticated;

grant
select
  on public.commentable_entities to authenticated;

alter table public.commentable_entities enable row level security;

create policy "can select commentable entities from accessible teams" on public.commentable_entities as restrictive for
select
  using (private.is_current_user_in_team (team_id));

-- Threads
create table
  public.threads (
    id uuid primary key default gen_random_uuid (),
    created_at timestamptz default now(),
    updated_at timestamptz default now(),
    team_id uuid not null references public.teams (id) on update cascade on delete cascade,
    commentable_entity_id uuid not null references public.commentable_entities (id) on update cascade on delete cascade,
    profile_id uuid default auth.uid () references public.profiles (id) on update cascade on delete cascade not null,
    title text not null
  );

create index on public.threads (team_id);

create index on public.threads (commentable_entity_id);

create index on public.threads (profile_id);

create trigger threads_updated_at before
update on public.threads for each row
execute procedure moddatetime (updated_at);

revoke
select
,
  insert,
update,
delete on public.threads
from
  anon,
  authenticated;

grant
select
,
  insert (team_id, title),
update (title),
delete on public.threads to authenticated;

alter table public.threads enable row level security;

create policy "can manage threads from accessible teams" on public.threads as restrictive for all using (private.is_current_user_in_team (team_id))
with
  check (private.is_current_user_in_team (team_id));

create policy "can create own threads" on public.threads for insert
with
  check (profile_id = auth.uid ());

create policy "can update own threads" on public.threads for
update using (profile_id = auth.uid ())
with
  check (profile_id = auth.uid ());

create policy "can delete own threads" on public.threads for delete using (profile_id = auth.uid ());

-- Comments
create table
  public.comments (
    id uuid primary key default gen_random_uuid (),
    created_at timestamptz default now(),
    updated_at timestamptz default now(),
    team_id uuid not null references public.teams (id) on update cascade on delete cascade,
    profile_id uuid default auth.uid () references public.profiles (id) on update cascade on delete cascade not null,
    thread_id uuid references threads (id) on update cascade on delete cascade not null,
    reply_to_comment_id uuid references comments (id) on update cascade on delete cascade,
    body text not null
  );

create index on public.comments (team_id);

create index on public.comments (profile_id);

create index on public.comments (thread_id);

create index on public.comments (reply_to_comment_id);

create trigger comments_updated_at before
update on public.comments for each row
execute procedure moddatetime (updated_at);

revoke
select
,
  insert,
update,
delete on public.comments
from
  anon,
  authenticated;

grant
select
,
  insert (team_id, thread_id, reply_to_comment_id, body),
update (body),
delete on public.comments to authenticated;

alter table public.comments enable row level security;

create policy "can manage comments from accessible teams" on public.comments as restrictive for all using (private.is_current_user_in_team (team_id))
with
  check (private.is_current_user_in_team (team_id));

create policy "can create own comments" on public.comments for insert
with
  check (profile_id = auth.uid ());

create policy "can update own comments" on public.comments for
update using (profile_id = auth.uid ())
with
  check (profile_id = auth.uid ());

create policy "can delete own comments" on public.comments for delete using (profile_id = auth.uid ());
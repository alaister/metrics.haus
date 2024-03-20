-- Threads
create table
  public.threads (
    id uuid primary key default gen_random_uuid (),
    created_at timestamptz default now(),
    updated_at timestamptz default now(),
    team_id uuid not null references public.teams (id) on update cascade on delete cascade,
    metric_id uuid not null references public.metrics (id) on update cascade on delete cascade,
    from_timestamp timestamptz,
    to_timestamp timestamptz,
    created_by uuid default auth.uid () references public.profiles (id) on update cascade on delete cascade not null,
    title text not null
  );

create index on public.threads (team_id);

create unique index on public.threads (metric_id, from_timestamp, to_timestamp);

create index on public.threads (created_by);

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
  insert (
    team_id,
    metric_id,
    from_timestamp,
    to_timestamp,
    title
  ),
update (title),
delete on public.threads to authenticated;

alter table public.threads enable row level security;

create policy "can select threads from accessible teams" on public.threads for
select
  to authenticated using (private.is_current_user_in_team (team_id));

create policy "can create threads in accessible teams" on public.threads as restrictive for insert to authenticated
with
  check (private.is_current_user_in_team (team_id));

create policy "can create own threads" on public.threads for insert to authenticated
with
  check (created_by = auth.uid ());

create policy "can update own threads" on public.threads for
update to authenticated using (created_by = auth.uid ())
with
  check (created_by = auth.uid ());

create policy "can delete own threads" on public.threads for delete to authenticated using (created_by = auth.uid ());

-- Comments
create table
  public.comments (
    id uuid primary key default gen_random_uuid (),
    created_at timestamptz default now(),
    updated_at timestamptz default now(),
    profile_id uuid not null default auth.uid () references public.profiles (id) on update cascade on delete cascade,
    thread_id uuid not null references threads (id) on update cascade on delete cascade,
    reply_to_comment_id uuid references comments (id) on update cascade on delete cascade,
    body text not null
  );

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
  insert (thread_id, reply_to_comment_id, body),
update (body),
delete on public.comments to authenticated;

alter table public.comments enable row level security;

create policy "can select comments from accessible threads" on public.comments for
select
  to authenticated using (
    exists (
      select
        1
      from
        public.threads as t
      where
        t.id = thread_id
    )
  );

create policy "can create comments in accessible threads" on public.comments as restrictive for insert to authenticated
with
  check (
    exists (
      select
        1
      from
        public.threads as t
      where
        t.id = thread_id
    )
  );

create policy "can create own comments" on public.comments for insert to authenticated
with
  check (profile_id = auth.uid ());

create policy "can update own comments" on public.comments for
update to authenticated using (profile_id = auth.uid ())
with
  check (profile_id = auth.uid ());

create policy "can delete own comments" on public.comments for delete to authenticated using (profile_id = auth.uid ());
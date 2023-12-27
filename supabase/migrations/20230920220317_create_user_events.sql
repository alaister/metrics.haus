create type user_event as enum(
  'view_page',
  'add_metric',
  'add_data_point',
  'update_avatar'
);

create table
  public.user_events (
    id uuid primary key default gen_random_uuid (),
    user_id uuid not null default auth.uid (),
    ts timestamp with time zone not null default now(),
    event user_event not null,
    value text null,
    meta jsonb,
    constraint profile_events_profile_id_fkey foreign key (user_id) references profiles (id) on update cascade on delete cascade
  ) tablespace pg_default;

create index if not exists ix_profile_events_user_id on public.user_events using btree (user_id) tablespace pg_default;

alter table public.user_events enable row level security;

create policy "allow users to insert user_events for themselves" on public.user_events for insert to authenticated
with
  check (auth.uid () = user_id);

create policy "allow users to select of their own user_events" on public.user_events for
select
  to authenticated using (auth.uid () = user_id);

revoke
select
,
update,
insert,
delete on public.user_events
from
  anon,
  authenticated;

grant insert (event, value, meta) on public.user_events to authenticated;

grant
select
  on public.user_events to authenticated;
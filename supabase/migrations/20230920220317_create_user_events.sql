create type profile_event as enum('view_page', 'add_data_point');

create table
  public.user_events (
    user_id uuid not null default auth.uid(),
    ts timestamp with time zone not null default now(),
    event text not null,
    value text null,
    meta jsonb,
    constraint profile_events_profile_id_fkey foreign key (user_id) references profiles (id) on update cascade on delete cascade
  ) tablespace pg_default;

create index if not exists ix_profile_events_user_id on public.user_events using btree (user_id) tablespace pg_default;

alter table public.user_events enable row level security;

create policy "allow users to insert user_events for themselves"
on public.user_events
for insert 
with check (
  auth.uid() = user_id
);

revoke select, update, insert, delete on public.user_events from
  public,
  anon,
  authenticated;

grant
insert (event, value, meta) on public.user_events to public,
authenticated;
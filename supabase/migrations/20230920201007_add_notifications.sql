create table
    public.notifications (
        id uuid not null primary key default gen_random_uuid (),
        created_at timestamp with time zone default now(),
        team_id uuid not null references public.teams (id) on delete cascade on update cascade,
        profile_id uuid not null references public.profiles (id) on delete set null on update cascade,
        seen_at timestamp with time zone,
        body text default '',
        metadata jsonb
    );

create index on public.notifications (profile_id);

revoke
select
,
    insert,
update,
delete on public.notifications
from
    anon,
    authenticated;

grant
select
,
update (seen_at) on public.notifications to authenticated;

alter table public.notifications enable row level security;

create policy "can manage notifications from accessible teams" on public.notifications as restrictive for all to authenticated using (private.is_current_user_in_team (team_id))
with
    check (private.is_current_user_in_team (team_id));

create policy "user can see their own notifications" on public.notifications for
select
    to authenticated using (profile_id = auth.uid ());

create policy "user can delete update own notifications" on public.notifications for
update to authenticated using (profile_id = auth.uid ())
with
    check (profile_id = auth.uid ());
create extension if not exists moddatetime schema extensions;

alter default privileges
revoke
execute on functions
from
    public;

alter default privileges in schema public
revoke
execute on functions
from
    anon,
    authenticated;

create schema private;

grant usage on schema private to authenticated,
service_role;

comment on schema public is e'@graphql({
  "inflect_names": true,
  "max_rows": 1000
})';

-- Profiles
create table
    public.profiles (
        "id" uuid not null primary key references auth.users ("id") on delete cascade on update cascade,
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        "name" text not null,
        "avatar_path" text
    );

revoke
select
,
    insert,
update,
delete on public.profiles
from
    anon,
    authenticated;

grant
select
,
update (name) on public.profiles to authenticated;

alter table public.profiles enable row level security;

create policy "user can update their own profile" on public.profiles for
update using (id = auth.uid ());

-- Teams
create table
    public.teams (
        "id" uuid primary key not null default gen_random_uuid (),
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        name text not null,
        sso_provider_id text
    );

create trigger teams_updated_at before
update on public.teams for each row
execute procedure moddatetime (updated_at);

revoke
select
,
    insert,
update,
delete on public.teams
from
    anon,
    authenticated;

grant
select
,
update (name) on public.teams to authenticated;

alter table public.teams enable row level security;

-- Team members
create table
    public.team_members (
        team_id uuid not null references public.teams ("id") on delete cascade on update cascade,
        profile_id uuid not null references public.profiles ("id") on delete cascade on update cascade,
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        primary key (team_id, profile_id)
    );

create unique index team_members_team_id_profile_id_unique on public.team_members (team_id, profile_id);

create trigger team_members before
update on public.teams for each row
execute procedure moddatetime (updated_at);

revoke
select
,
    insert,
update,
delete on public.team_members
from
    anon,
    authenticated;

grant
select
    on public.team_members to authenticated;

alter table public.team_members enable row level security;

create function private.is_current_user_in_team (team_id uuid) returns boolean as $$
select
    exists (
        select
            1
        from
            public.team_members
        where
            profile_id = auth.uid()
            and team_id = $1
    );

$$ language sql security definer stable;

grant
execute on function private.is_current_user_in_team (uuid) to authenticated;

create policy "user can view their own teams" on public.teams as restrictive for
select
    using (private.is_current_user_in_team (id));

create policy "user can update their own teams" on public.teams as restrictive for
update using (private.is_current_user_in_team (id));

create policy "user can view fellow team members" on public.team_members as restrictive for
select
    using (private.is_current_user_in_team (team_id));

create policy "user can view profiles of team members" on public.profiles for
select
    using (
        exists (
            select
                1
            from
                public.team_members
            where
                profile_id = profiles.id
        )
    );
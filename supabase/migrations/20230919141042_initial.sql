create extension if not exists moddatetime schema extensions;

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

-- Teams
create table
    public.teams (
        "id" uuid primary key not null default gen_random_uuid (),
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        name text not null,
        sso_provider_id text
    );

-- Team members
create table
    public.team_members (
        team_id uuid not null references public.teams ("id") on delete cascade on update cascade,
        profile_id uuid not null references public.profiles ("id") on delete cascade on update cascade,
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        primary key (team_id, profile_id)
    );

revoke insert,
update,
delete on public.profiles
from
    public,
    anon,
    authenticated;

grant
update (name) on public.profiles to public,
authenticated;

alter table public.profiles enable row level security;

create policy "user can update their own profile" on public.profiles for
update using (id = auth.uid ());

alter table public.teams enable row level security;

create function is_current_user_in_team (team_id uuid) returns boolean as $$
select
    exists (
        select
            1
        from
            team_members
        where
            profile_id = auth.uid()
            and team_id = $1
    );

$$ language sql security definer stable;

create policy "user can view their own teams" on public.teams for
select
    using (is_current_user_in_team (id));

create policy "user can update their own teams" on public.teams for
update using (is_current_user_in_team (id));

revoke
update on public.teams
from
    public,
    anon,
    authenticated;

grant
update (name) on public.teams to public,
authenticated;

create trigger teams_updated_at before
update on public.teams for each row
execute procedure moddatetime (updated_at);

alter table public.team_members enable row level security;

create policy "user can view fellow team members" on public.team_members for
select
    using (is_current_user_in_team (team_id));

create unique index team_members_team_id_profile_id_unique on public.team_members (team_id, profile_id);

create trigger team_members before
update on public.teams for each row
execute procedure moddatetime (updated_at);

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

revoke insert,
update on public.team_members
from
    public,
    anon,
    authenticated;
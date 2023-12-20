-- Enable the "timescaledb" extension
create extension timescaledb
with
    schema extensions;

create type metric_interval as enum('minute', 'hour', 'day', 'week', 'month');

create table
    public.metrics (
        "id" uuid primary key not null default gen_random_uuid (),
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        interval metric_interval not null,
        name text not null,
        description text,
        unit_short varchar(3),
        icon text,
        archived boolean default false,
        team_id uuid not null references public.teams ("id") on delete cascade on update cascade
    );

alter table public.metrics enable row level security;

create policy "can manage metrics from accessible teams" on public.metrics as restrictive for all using (private.is_current_user_in_team (team_id));

revoke
select
,
    insert,
update,
delete on public.metrics
from
    anon,
    authenticated;

grant
select
,
    insert (
        name,
        interval,
        team_id,
        unit_short,
        description,
        icon
    ),
update (
    name,
    interval,
    unit_short,
    description,
    icon,
    archived
),
delete on public.metrics to authenticated;

create table
    public.metrics_data_points (
        time TIMESTAMPTZ not null,
        metric_id uuid not null references public.metrics ("id") on delete cascade on update cascade,
        value double precision not null,
        reported_by uuid not null default auth.uid () references public.profiles ("id") on delete set null on update cascade,
        primary key (metric_id, time)
    );

comment on table public.metrics_data_points is e'@graphql({"totalCount": {"enabled": true}})';

select
    create_hypertable ('metrics_data_points', 'time');

revoke
select
,
update,
insert on public.metrics_data_points
from
    anon,
    authenticated;

grant
select
,
    insert (time, metric_id, value),
    delete on public.metrics_data_points to authenticated;

alter table public.metrics_data_points enable row level security;

create policy "user can manage data points from accessible metrics" on public.metrics_data_points for all using (
    exists (
        select
            1
        from
            public.metrics as m
        where
            metric_id = m.id
    )
);

create index ix_metric_data_point_metric on public.metrics_data_points (metric_id, time desc);

create index ix_metric_team on public.metrics (team_id);

create table
    public.metrics_owners (
        metric_id uuid not null references public.metrics ("id") on delete cascade on update cascade,
        profile_id uuid not null references public.profiles ("id") on delete cascade on update cascade,
        created_at timestamp with time zone not null default now(),
        primary key (metric_id, profile_id)
    );

revoke
select
,
    insert,
update,
delete on public.metrics_owners
from
    anon,
    authenticated;

grant
select
,
    insert (metric_id, profile_id),
    delete on public.metrics_owners to authenticated;

alter table public.metrics_owners enable row level security;

create policy "user can manage metric owners from accessible metrics" on public.metrics_owners for all using (
    exists (
        select
            1
        from
            public.metrics as m
        where
            metric_id = m.id
    )
);

create index ix_metrics_owners_metric_id on public.metrics_owners (metric_id);

create index ix_metrics_owners_profile_id on public.metrics_owners (profile_id);
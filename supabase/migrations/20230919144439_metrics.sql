-- Enable the "timescaledb" extension
create extension timescaledb;

create type metric_interval as enum('minute', 'hour', 'day', 'week', 'month');

create table
    public.metrics (
        "id" uuid primary key not null default gen_random_uuid (),
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        interval metric_interval not null,
        name text not null,
        team_id uuid not null references public.teams ("id") on delete cascade on update cascade
    );

alter table public.metrics enable row level security;

create policy "user can see metrics for teams they are in" on public.metrics for
update using (
    exists (
        select
            1
        from
            public.team_members
        where
            team_id = public.metrics.team_id
    )
);

create table
    public.metrics_data_points (
        time TIMESTAMPTZ not null,
        metric_id uuid not null,
        value double precision not null,
        reported_by uuid not null references public.profiles ("id") on delete set null on update cascade
    );

select
    create_hypertable ('metrics_data_points', 'time');

alter table public.metrics_data_points enable row level security;

create policy "user can see data points from accessible metrics" on public.metrics_data_points for
select
    using (
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
        user_id uuid not null references public.profiles ("id") on delete cascade on update cascade,
        "created_at" timestamp with time zone not null default now(),
        primary key (metric_id, user_id)
    );

alter table public.metrics_owners enable row level security;

create policy "user can manage metric owners from accessible metrics" on public.metrics_owners using (
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

create index ix_metrics_owners_user_id on public.metrics_owners (user_id);
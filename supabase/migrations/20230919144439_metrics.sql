-- Enable the "timescaledb" extension
create extension timescaledb;

create table
    public.metrics (
        "id" uuid primary key not null default gen_random_uuid (),
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        name text not null,
        team_id uuid references public.teams ("id") on delete cascade on update cascade
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
        value double precision not null
    );

select
    create_hypertable ('metrics_data_points', 'time');

alter table public.metrics_data_points enable row level security;

create policy "user can see data points from accessible metrics" on public.metrics_data_points for
select using (
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
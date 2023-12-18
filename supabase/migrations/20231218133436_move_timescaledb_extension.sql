drop extension timescaledb cascade;

create extension timescaledb
with
  schema extensions;

select
  extensions.create_hypertable ('metrics_data_points', 'time');
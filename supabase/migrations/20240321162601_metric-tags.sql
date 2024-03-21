alter table metrics
add column tags text[];

grant insert (
    name,
    interval,
    team_id,
    unit_short,
    description,
    icon,
    tags
),
update (
    name,
    interval,
    unit_short,
    description,
    icon,
    archived,
    tags
) on public.metrics to authenticated;

create
or replace function distinct_tags (team_id uuid) returns text[] as $$
  SELECT ARRAY(SELECT DISTINCT(unnest(metrics.tags)) FROM metrics
   WHERE team_id = $1);
$$ language sql security invoker;
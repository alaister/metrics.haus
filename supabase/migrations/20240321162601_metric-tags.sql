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
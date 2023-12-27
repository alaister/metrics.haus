create view
  public.user_stats
with
  (security_invoker = true) as
select
  'num_' || event as event,
  count(event)
from
  public.user_events
where
  user_id = auth.uid ()
group by
  event;
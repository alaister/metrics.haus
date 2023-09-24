drop function if exists get_user_stats;
create view user_stats as 
  select 'num_'||event as event, count (event) from user_events 
  where user_id = auth.uid()
  group by event;
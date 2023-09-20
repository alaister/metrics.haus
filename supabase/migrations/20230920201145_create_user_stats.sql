create function get_user_stats()
 returns table(num_data_points_created bigint)
 language plpgsql
as $function$
begin
  return query
  select count(reported_by) as num_data_points_created
  from metrics_data_points where reported_by = auth.uid();
  end;
$function$
;

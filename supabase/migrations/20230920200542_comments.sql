create table
    public.comments (
        "id" uuid not null primary key default gen_random_uuid(),
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        "message" text not null,
        "metric_id" uuid not null references public.metrics ("id") on delete cascade,
        "reply_to" uuid foreign key references public.comments ("id") on delete cascade,
        "profile_id" uuid foreign key references public.profiles ("id")
    );

revoke
update,
insert on public.comments
from
    public,
    anon,
    authenticated;

grant insert (message, reply_to, metric_id),
delete on public.comments to public,
authenticated;

alter table public.comments enable row level security;

create policy "team members can add messages" on public.comments for insert using (
    with matching_metrics  as (
      select team_id 
      from public.metrics
      where id = metric_id
    ) 
    exists (
        select
            1
        from
            matching_metrics m
        where
          is_current_user_in_team(m.team_id)
    );
);

create policy "team members can read messages" on public.comments for select using (
    with matching_metrics  as (
      select team_id 
      from public.metrics
      where id = metric_id
    ) 
    select exists (
        select
            1
        from
            matching_metrics m
        where
          is_current_user_in_team(m.team_id)
    );
);


create policy "user can edit his own messages" on public.comments for update with check (
  profile_id = auth.uid()
);
create policy "user can delete his own messages" on public.comments for delete with check (
  profile_id = auth.uid()
);


create table
    public.comments (
        "id" uuid not null primary key default gen_random_uuid(),
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        "message" text not null,
        "metric_id" uuid not null references public.metrics ("id") on delete cascade,
        "reply_to" uuid references public.comments ("id") on delete cascade,
        "team_id" uuid not null references public.teams ("id") on delete cascade,
        "profile_id" uuid not null references public.profiles ("id")
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

create policy "team members can insert messages" on public.comments for insert with check (
  exists (
    select 
        1
    from 
        public.metrics
    where 
      is_metric_in_accessible_team(team_id)
    )
);

create policy "team members can read messages" on public.comments for select using (
  exists (
    select 
        1
    from 
        public.metrics
    where 
      is_metric_in_accessible_team(team_id)
    )
);



create policy "user can edit his own messages" on public.comments for update with check (
  profile_id = auth.uid()
);
create policy "user can delete his own messages" on public.comments for delete using (
  exists (
    select 
      1
    from 
      public.comments
    where 
      profile_id = auth.uid()
  )
);


create index ix_comments_metric_id on public.comments (metric_id);
create index ix_comments_reply_to on public.comments (reply_to);
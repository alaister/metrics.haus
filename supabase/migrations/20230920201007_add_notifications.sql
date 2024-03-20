    create table
    "public"."notifications" (
        "id" uuid not null primary key default gen_random_uuid (),
        "created_at" timestamp with time zone default now(),
        "text" text default ''::text,
        "profile_id" uuid not null references public.profiles ("id") on delete set null on update cascade,
        "metadata" JSONB
    );

alter table "public"."notifications" enable row level security;

create policy "user can see their own notifications" on "public"."notifications" as permissive for
select
    to authenticated using ((auth.uid () = profile_id));

create policy "user can delete their own notifications" on "public"."notifications" as permissive for delete to authenticated using ((auth.uid () = profile_id));

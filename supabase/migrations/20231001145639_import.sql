create type import_status as enum(
    'file_uploaded', -- File was initially parsed to ensure it is in a valid format and to let the user map columns
    'ready_for_import', -- User has reviewed the file and mapping, it is ready for data import
    'data_importing', -- Data is being imported into the database
    'finished', -- Data was imported into the database
    'canceled', -- Data import was canceled
    'failed' -- Data import failed
);

create table
    public.imports (
        "id" uuid primary key not null default gen_random_uuid (),
        "created_at" timestamp with time zone not null default now(),
        "updated_at" timestamp with time zone not null default now(),
        status import_status not null default 'file_uploaded',
        file_path text not null,
        file_name text not null,
        file_type text not null,
        metadata jsonb,
        mapping jsonb,
        errors jsonb,
        team_id uuid not null references public.teams ("id") on delete cascade on update cascade,
        uploaded_by uuid default auth.uid() references public.profiles ("id") on delete set null on update cascade
    );

alter table public.imports enable row level security;

create policy "user can see imports for teams they are in" on public.imports for all using (
    exists (
        select
            1
        from
            public.team_members
        where
            team_id = public.imports.team_id
    )
);

revoke
update,
insert on public.imports
from
    public,
    anon,
    authenticated;

grant insert (file_path, file_type, file_name, team_id, mapping),
update (mapping) on public.imports to public,
authenticated;

-- Bucket for importing data
insert into
    "storage"."buckets" (
        "id",
        "name",
        "owner",
        "public",
        "avif_autodetection",
        "file_size_limit",
        "allowed_mime_types"
    )
values
    (
        'imports',
        'imports',
        null,
        false,
        false,
        1000000000, -- 1GB
        '{text/*}'
    );

create policy storage_imports_select_policy on storage.objects as permissive for all using (
    bucket_id = 'imports'
    and exists (
        select
            1
        from
            public.team_members
        where
            team_id = (string_to_array(name, '/'::text)) [1]::uuid
    )
);
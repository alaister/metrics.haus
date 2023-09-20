create
or replace function public.insert_team_member_if_not_exists () returns trigger language plpgsql security definer
set
    search_path = public as $$
    declare
        v_profile_id uuid;
        v_sso_provider_id text;
        v_team_id uuid;
    begin
        v_profile_id := new.user_id;

        -- fallback provider id to ease local development
        v_sso_provider_id := case
            when new.provider like 'sso:%' then replace(new.provider, 'sso:', '')
            else 'default-sso-provider-id'
        end;

        select id into v_team_id from public.teams where sso_provider_id = v_sso_provider_id;

        insert into public.team_members (profile_id, team_id) values (v_profile_id, v_team_id) on conflict do nothing;
       
        return new;
    end;
$$;

create trigger on_auth_identity_inserted
after insert on auth.identities for each row
execute function public.insert_team_member_if_not_exists ();

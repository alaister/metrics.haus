-- inserts a row into public.profiles
create
or replace function private.handle_new_user () returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, name)

  values (
    new.id,
    case
        when (new.raw_user_meta_data->'custom_claims'->>'first_name') is not null then
          concat(new.raw_user_meta_data->'custom_claims'->>'first_name', ' ', new.raw_user_meta_data->'custom_claims'->>'last_name')
        else 'Anonymous'
    end
  );

  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
after insert on auth.users for each row
execute procedure private.handle_new_user ();
-- inserts a row into public.profiles
create function public.handle_new_user () returns trigger language plpgsql security definer
set
    search_path = public as $$
begin
  insert into public.profiles (id, name)

  values (
    new.id,
    CASE
        WHEN (new.raw_user_meta_data->'custom_claims'->>'first_name') IS NOT NULL THEN CONCAT(new.raw_user_meta_data->'custom_claims'->>'first_name', ' ', new.raw_user_meta_data->'custom_claims'->>'last_name')
        ELSE 'Anonymous'
    END
  );

  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
after insert on auth.users for each row
execute procedure public.handle_new_user ();
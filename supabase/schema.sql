-- Run this in your Supabase SQL Editor
create table if not exists assignments (
  id uuid default gen_random_uuid() primary key,
  user_id text not null,
  activity_id text,
  manual_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on RLS and allow all for this prototype
alter table assignments enable row level security;
create policy "Allow all operations" on assignments for all using (true) with check (true);

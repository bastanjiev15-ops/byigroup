alter table public.users add column if not exists telegram_id text;
create unique index if not exists users_telegram_id_uidx on public.users(telegram_id) where telegram_id is not null;

/* BYIGROUP Telegram Mini App bridge. Authentication must be server-validated. */
(function(){
  if(!window.Telegram || !window.Telegram.WebApp) return;
  const tg=window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  const SUPABASE_URL='https://tgfyalpkmiktwoiuqlap.supabase.co';
  window.BYI_TELEGRAM={initData:tg.initData||'',user:tg.initDataUnsafe?.user||null};
  window.BYI_TELEGRAM.applyTheme=function(){
    document.documentElement.style.setProperty('--tg-bg',tg.themeParams?.bg_color||'#0b1220');
    document.documentElement.style.setProperty('--tg-text',tg.themeParams?.text_color||'#0f172a');
  };
  window.BYI_TELEGRAM.applyTheme();
})();

document.getElementById('lang-toggle').addEventListener('click', () => {
  const current = document.documentElement.lang;
  window.location.href = current === 'es' ? '/en/' : '/es/';
});

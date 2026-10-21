document.addEventListener("DOMContentLoaded", () => {
  const inputSearch = document.querySelector(`[action="/search"] [type="search"]`);
  if (!inputSearch) return;

  let debounceTimer;
  inputSearch.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 300);
  });
});
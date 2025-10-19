document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  async function loadView(view) {
    const res = await fetch(`views/${view}.html`);
    const html = await res.text();
    app.innerHTML = html;
  }

  window.navigate = (view) => loadView(view);

  loadView("login");
});

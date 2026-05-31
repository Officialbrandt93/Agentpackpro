// Agents Pro Pack — access guard
// Add this file to the project root and include it at the TOP of your dashboard index.html:
// <script src="/auth-guard.js"></script>

(function () {
  const LOGIN_URL = "/login.html";
  const SESSION_KEY = "agp_sessao";

  function redirectToLogin() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (e) {}

    window.location.replace(LOGIN_URL);
  }

  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");

    if (!session || !session.email || !session.expira || Number(session.expira) <= Date.now()) {
      redirectToLogin();
      return;
    }

    // Session is valid. Show the page.
    document.documentElement.classList.add("agp-auth-ok");
  } catch (e) {
    redirectToLogin();
  }
})();

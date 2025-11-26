import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.mjs";
import eventManager from "/eventManager.js";

function autofillUsername() {
  const params = new URLSearchParams(document.location.search);
  const username = params.get("username");
  if (username) {
    document.getElementById("username-input").value = username;
  }
}

console.log("login")
autofillUsername();
eventManager['/login'].addLoginEvent();

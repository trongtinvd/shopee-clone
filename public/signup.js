import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.mjs";

console.log("sign up");

async function signupEvent() {
  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch("./api/signup", {
        method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
          displayname: formData.get("displayname")
        })
      });
      const jsonResponse = await response.json();
      if (jsonResponse.status !== 201) throw jsonResponse;
      window.location.href = `/login?username=${jsonResponse.data.username}`
    }
    catch (error) {
      console.log(`Sign up error: ${error}`);
    }
  })
}

signupEvent();
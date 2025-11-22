
function autofillUsername() {
  const params = new URLSearchParams(document.location.search);
  const username = params.get("username");
  if (username) {
    document.getElementById("username-input").value = username;
  }
}

function setLoginEvent() {
  const loginFrom = document.getElementById("login-form");
  loginFrom.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch('/api/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
        rememberMe: formData.get("rememberMe")
      })
    })
      .then(response => response.json())
      .then(response => {
        const { status, title, message, data, error } = response;
        console.log(response);
        if (status === 200) {
          Cookies.set(`sessionCode`, data.cookies.sessionCode);
          console.log(`sessionCode: ${Cookies.get("sessionCode")}`);
          window.location.href = '/';
        }
        else if (status === 403) {
          alert(message);
          document.getElementById("password-input").value = '';
        }
        else if (status === 404) {
          alert(message);
          document.getElementById("password-input").value = '';
          document.getElementById("username-input").value = '';
        }
        else {
          alert(JSON.stringify(response));
          console.log(response);
        }
      })
      .catch(error => console.log(error));
  })
}

console.log("login")
autofillUsername();
setLoginEvent();

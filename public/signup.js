console.log("sign up");

const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch("./api/signup", {
    method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
      displayname: formData.get("displayname")
    })
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const { status, title, message, data, error } = response;
      if (status === 201) {
        window.location.href = `/login?username=${data.username}`
      }
      else {
        console.log(response);
        alert(response);
      }
    })
    .catch(error => {
      console.log(error);
      alert(error);
    });
})
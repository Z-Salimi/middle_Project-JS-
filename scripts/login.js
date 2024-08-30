import { login } from "../apis/services/auth.service";
import { errorHandler } from "../libs/error-handler";
import { setSessionToken } from "../libs/session-manager";
import { toast } from "../libs/toast";

const loginForm = document.getElementById("login-form");
const usernameInput = loginForm.querySelector("input[name='username']");
const passwordInput = loginForm.querySelector("input[name='password']");
const logInButton = loginForm.querySelector("button[type='submit']");

const checkInputs = () => {
  if (usernameInput.value && passwordInput.value) {
    logInButton.classList.add("bg-opacity-100");
    logInButton.classList.remove("bg-opacity-15");
  } else {
    logInButton.classList.add("bg-opacity-15");
    logInButton.classList.remove("bg-opacity-100");
  }
};

usernameInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const response = await login({
      username: usernameInput.value,
      password: passwordInput.value,
    });
    setSessionToken(response.token);
    toast("Succcessfully ligned in","success");
    setTimeout(()=>{
      window.location.href = "/dashboard";
  }, 3000)
  } catch (error) {
    errorHandler(error);
  }
});
document.getElementById("goBackButton").addEventListener("click", function () {
  history.back();
});

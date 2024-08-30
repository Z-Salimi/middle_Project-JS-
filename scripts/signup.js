import { signup } from "../apis/services/auth.service";
import { errorHandler } from "../libs/error-handler";
import { setSessionToken } from "../libs/session-manager";
import { toast } from "../libs/toast";

const signupForm = document.getElementById("signup-form");
const usernameInput = signupForm.querySelector("input[name='username']");
const passwordInput = signupForm.querySelector("input[name='password']");
const signupButton = signupForm.querySelector("button[type='submit']");

const checkInputs = () => {
  if (usernameInput.value && passwordInput.value) {
    signupButton.classList.add("bg-opacity-100");
    signupButton.classList.remove("bg-opacity-15");
  } else {
    signupButton.classList.add("bg-opacity-15");
    signupButton.classList.remove("bg-opacity-100");
  }
};

usernameInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const response = await signup({
      username: usernameInput.value,
      password: passwordInput.value,
    });
    setSessionToken(response.token);
    toast("Succcessfully signed up","success");
    setTimeout(()=>{
      window.location.href = "/dashboard";
  }, 3000)
    
  } catch (error) {
    errorHandler(error);
  }
});

// document.getElementById("goBackButton2").addEventListener("click", function () {
//   history.back();
// });

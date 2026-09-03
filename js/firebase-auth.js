// Google sign-in for the Coloring Book App, using the Firebase modular SDK.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInBtn = document.getElementById("signInBtn");
const gateSignInBtn = document.getElementById("gateSignInBtn");
const signOutBtn = document.getElementById("signOutBtn");
const userInfo = document.getElementById("userInfo");
const userAvatar = document.getElementById("userAvatar");
const userName = document.getElementById("userName");
const signInGate = document.getElementById("signInGate");
const appContent = document.getElementById("appContent");

function doSignIn() {
  // Popup-based sign-in gets silently blocked in a lot of real-world
  // browsers/in-app browsers with no catchable error. Redirect-based
  // sign-in (full navigation to Google and back) avoids that entirely.
  signInWithRedirect(auth, googleProvider).catch((error) => {
    console.error("Google sign-in failed:", error);
    alert("Sign-in failed: " + error.message);
  });
}

// Completes the sign-in after Google redirects back to this page.
getRedirectResult(auth).catch((error) => {
  console.error("Google sign-in redirect failed:", error);
  alert("Sign-in failed: " + error.message);
});

signInBtn.addEventListener("click", doSignIn);
gateSignInBtn.addEventListener("click", doSignIn);

signOutBtn.addEventListener("click", () => {
  signOut(auth).catch((error) => {
    console.error("Sign-out failed:", error);
  });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    signInBtn.classList.add("hidden");
    userInfo.classList.remove("hidden");
    userAvatar.src = user.photoURL || "";
    userAvatar.alt = user.displayName || "User avatar";
    userName.textContent = user.displayName || user.email || "Signed in";

    // Unlock the app
    signInGate.classList.add("hidden");
    appContent.classList.remove("hidden");
  } else {
    signInBtn.classList.remove("hidden");
    userInfo.classList.add("hidden");
    userAvatar.src = "";
    userName.textContent = "";

    // Lock the app back down (e.g. on sign-out) and return to the gallery
    // view so nobody's left staring at a canvas they can no longer reach.
    signInGate.classList.remove("hidden");
    appContent.classList.add("hidden");
    if (typeof window.backToGallery === "function") {
      window.backToGallery();
    }
  }
});

// Google sign-in for the Coloring Book App, using the Firebase modular SDK.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");
const userInfo = document.getElementById("userInfo");
const userAvatar = document.getElementById("userAvatar");
const userName = document.getElementById("userName");

signInBtn.addEventListener("click", () => {
  signInWithPopup(auth, googleProvider).catch((error) => {
    console.error("Google sign-in failed:", error);
    alert("Sign-in failed: " + error.message);
  });
});

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
  } else {
    signInBtn.classList.remove("hidden");
    userInfo.classList.add("hidden");
    userAvatar.src = "";
    userName.textContent = "";
  }
});

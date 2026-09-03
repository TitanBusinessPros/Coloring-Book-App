# Coloring-Book-App

A browser-based coloring book (`index.html`, no build step) with draw/fill/erase/stamp tools and a Google sign-in.

## Local files

- `index.html` — the app itself (UI, canvas drawing logic).
- `js/firebase-config.js` — Firebase project config (public client identifier, safe to commit).
- `js/firebase-auth.js` — Google sign-in via Firebase Authentication.
- `firebase.json`, `.firebaserc` — Firebase Hosting deploy config.
- `firestore.rules`, `storage.rules` — default-deny security rules (not used yet, just locked down).

## One-time setup (after the Firebase project is created)

1. In the [Firebase Console](https://console.firebase.google.com/) for the new project:
   - **Build → Authentication → Sign-in method → Google** — enable it, set a support email.
   - **Project settings → General → Your apps** — add a **Web app**, copy the config object.
2. Paste that config into `js/firebase-config.js` (replace the `REPLACE_WITH_*` placeholders).
3. In `.firebaserc`, replace `REPLACE_WITH_FIREBASE_PROJECT_ID` with the actual project ID.
4. If testing locally on something other than `localhost`, add that domain under **Authentication → Settings → Authorized domains**.

## Deploy (Firebase Hosting)

```
firebase deploy --only hosting
```

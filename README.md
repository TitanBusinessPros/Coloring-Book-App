# Coloring-Book-App

A browser-based coloring book (`index.html`, no build step) with draw/fill/erase/stamp tools and a Google sign-in.

## Local files

- `index.html` — the app itself (UI, canvas drawing logic).
- `js/firebase-config.js` — Firebase project config (public client identifier, safe to commit).
- `js/firebase-auth.js` — Google sign-in via Firebase Authentication.
- `firebase.json`, `.firebaserc` — Firebase Hosting deploy config (Hosting is currently **disabled**; GitHub Pages is the sole live host — see below).
- `firestore.rules`, `storage.rules` — default-deny security rules (not used yet, just locked down).

## Coloring page sections

`imageLibrary` in `index.html` holds one array per section button:

1. Animals — `TitanBusinessPros/KCF-Animals`
2. Action — `TitanBusinessPros/KCF-Cars-Trucks`
3. Fantasy — `TitanBusinessPros/KCF-Fantasy`
4. Holidays & Events — `TitanBusinessPros/KCF-Holidays`
5. Foods — `TitanBusinessPros/CBA-CBP`, `Food/` folder
6. Professions — `TitanBusinessPros/CBA-CBP`, `Professions/` folder

Each image is referenced by a public `raw.githubusercontent.com` URL (via the
`github.com/.../raw/main/...` redirect form) — no images are committed into
this repo itself. Adding a new section means adding images to the source repo
(public, so the raw links resolve), then adding a `section-btn` + a new
numbered array in `imageLibrary`.

## One-time setup (after the Firebase project is created)

1. In the [Firebase Console](https://console.firebase.google.com/) for the new project:
   - **Build → Authentication → Sign-in method → Google** — enable it, set a support email.
   - **Project settings → General → Your apps** — add a **Web app**, copy the config object.
2. Paste that config into `js/firebase-config.js` (replace the `REPLACE_WITH_*` placeholders).
3. In `.firebaserc`, replace `REPLACE_WITH_FIREBASE_PROJECT_ID` with the actual project ID.
4. If testing locally on something other than `localhost`, add that domain under **Authentication → Settings → Authorized domains**.

## Hosting

**GitHub Pages is the sole live host:** https://titanbusinesspros.github.io/Coloring-Book-App/
— it rebuilds automatically on every push to `main`.

Firebase Hosting for this project was previously kept as a synced secondary
copy, but has been disabled (`firebase hosting:disable`) so there's only one
live copy to keep in sync. Google Sign-In (Firebase Authentication) is
unaffected by this — it's a separate Firebase product from Hosting. To bring
the Firebase Hosting copy back: `firebase deploy --only hosting`.

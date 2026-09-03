// Firebase project config for the Coloring Book App.
//
// This object is safe to commit/publish — it's a public client identifier,
// not a secret (access is controlled by Firebase Auth + security rules,
// and by restricting the API key to this app's domains in Google Cloud).
//
// TODO: Once the Firebase project is created, replace these placeholders
// with the values from: Firebase Console -> Project settings -> General ->
// "Your apps" -> Web app -> SDK setup and configuration -> Config.
export const firebaseConfig = {
  apiKey: "REPLACE_WITH_API_KEY",
  authDomain: "REPLACE_WITH_PROJECT_ID.firebaseapp.com",
  projectId: "REPLACE_WITH_PROJECT_ID",
  storageBucket: "REPLACE_WITH_PROJECT_ID.appspot.com",
  messagingSenderId: "REPLACE_WITH_SENDER_ID",
  appId: "REPLACE_WITH_APP_ID"
};

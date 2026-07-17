# Visitor counter setup (optional)

By default this template shows a **static** visitor number from `constants.ts`.
You do **not** need Firebase (or anyone else's keys) for that.

```ts
export const VISITOR_STATS = {
  staticCount: 10800,   // change this any time
  enableLiveCount: false, // keep false for static
};
```

---

## Want a live all-time count?

Use **your own** Firebase project. Never commit real keys.

### 1. Enable live mode

In `constants.ts`:

```ts
export const VISITOR_STATS = {
  staticCount: 10800, // fallback if Firebase fails
  enableLiveCount: true,
};
```

### 2. Create a Firebase project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a project (or use one you own)
3. Add a **Web** app and copy the config values

### 3. Add environment variables

```bash
cp .env.example .env
```

Fill in **your** values:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

`.env` is gitignored — do not commit it.

### 4. Create Firestore

1. Firebase Console → **Firestore Database** → Create database  
2. Pick a location close to you  
3. Open **Rules** and publish something like:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /stats/{document=**} {
      allow read, write: if true;
    }
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

(For production you may want tighter rules later.)

### 5. Restart the app

```bash
npm run dev
```

Each page load increments `stats/website.visitors` in **your** Firestore.

---

## Behavior summary

| Setup | What users see |
|--------|----------------|
| Default (`enableLiveCount: false`) | Static number from `staticCount` |
| Live on + valid `.env` | Real Firestore counter |
| Live on but Firebase missing/broken | Falls back to `staticCount` |

Edit `staticCount` in `constants.ts` whenever you want a different demo number.

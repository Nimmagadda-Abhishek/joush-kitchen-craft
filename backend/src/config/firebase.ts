import admin from 'firebase-admin';

let initialized = false;

export function initFirebase() {
  if (initialized) return admin;
  if (!admin.apps.length) {
    const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (svc) {
      try {
        const parsed = JSON.parse(svc);
        admin.initializeApp({
          credential: admin.credential.cert(parsed),
          databaseURL: process.env.FIREBASE_DB_URL,
        });
      } catch (e) {
        console.warn('[firebase] Failed to parse FIREBASE_SERVICE_ACCOUNT, using default credentials');
        admin.initializeApp();
      }
    } else {
      admin.initializeApp();
    }
  }
  initialized = true;
  return admin;
}

export function getDb() {
  initFirebase();
  return admin.firestore();
}

export type DecodedUser = admin.auth.DecodedIdToken;
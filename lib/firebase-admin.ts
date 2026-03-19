import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    // 这行会读取你在 Vercel 设置的那个长长的 JSON 钥匙
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error);
  }
}

export const db = admin.firestore();

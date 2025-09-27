/**
 * Full working Firebase functions example
 * Mixing Gen 1 and Gen 2 triggers
 */

//////////////////////
// Imports
//////////////////////

// Gen 2 triggers
const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { beforeUserCreated } = require("firebase-functions/v2/identity");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

//////////////////////
// Gen 2 HTTPS function
//////////////////////
exports.helloWorldr = onRequest((req, res) => {
  console.log("Hello logs!");
  res.send("Hello from Firebase Gen 2!");
});

//////////////////////
// Gen 2 Firestore trigger
//////////////////////
exports.logMessager = onDocumentCreated("user/{userId}", (event) => {
  const snap = event.data;
  const messageData = snap?.data();
  console.log("New message created:", messageData);

  return null;
});

exports.createUserProfile = beforeUserCreated(async (event) => {
  const userRecord = event.data; // Gen 2 passes the user object in event.data

  try {
    const profile = {
      uid: userRecord.uid,
      email: userRecord.email || null,
      displayName: userRecord.displayName || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      role: "user",
      settings: { notifications: true, theme: "light" },
    };

    await db.collection("profiles").doc(userRecord.uid).set(profile);
    console.log(`Profile created for ${userRecord.uid}`);
  } catch (err) {
    console.error("Error creating user profile:", err);
  }
});

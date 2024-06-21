const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
setGlobalOptions({ region: "asia-east1" });

const admin = initializeApp();

function getUsersRecord() {
  return getAuth(admin)
    .listUsers()
    .then((result) => {
      return result.users.map((userRecord) => {
        const { uid, displayName, email, phoneNumber, customClaims } = userRecord;
        return {
          id: uid,
          name: displayName || "N/A", // Handle missing displayName
          email: email || "N/A", // Handle missing email
          phone: phoneNumber || "N/A", // Handle missing phoneNumber
          access: customClaims && customClaims.admin ? "admin" : "user", // Check if customClaims exists
        };
      });
    });
}

function getUserRecord(uid) {
  return getAuth(admin)
    .getUser(uid)
    .then((userRecord) => {
      const { uid, displayName, email, phoneNumber, customClaims } = userRecord;
      return {
        id: uid,
        name: displayName || "N/A",
        email: email || "N/A",
        phone: phoneNumber || "N/A",
        access: customClaims ? customClaims.admin : undefined, // Check if customClaims exists then check if admin exists
      };
    });
}

function getUserRecord_ALL() {
  return getAuth(admin)
    .listUsers()
    .then((result) => {
      return result.users;
    });
}

function createUserRecord(userData) {
  return getAuth(admin)
    .createUser(userData)
    .then((userRecord) => {
      return userRecord;
    });
}

function deleteUserRecord(uid) {
  return getAuth(admin)
    .deleteUser(uid)
    .then(() => {
      return "User deleted";
    });
}

function updateUserRecord(uid, userData) {
  return getAuth(admin)
    .updateUser(uid, userData)
    .then((userRecord) => {
      return userRecord;
    });
}

function setUserCustomClaim(uid, claims) {
  return getAuth(admin)
    .setCustomUserClaims(uid, claims)
    .then(() => {
      return "Custom claims set";
    });
}

app.get("/users", async (req, res) => {
  try {
    const users = await getUsersRecord();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

exports.app = onRequest(app);

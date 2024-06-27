import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import express from "express";
const adminRouter = express.Router();
import path from "path";
const serviceAccount = path.resolve("serect.json");
const app = initializeApp({
  credential: cert(serviceAccount),
});
function getUsersRecord() {
  return getAuth(app)
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
  return getAuth(app)
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
  return getAuth(app)
    .listUsers()
    .then((result) => {
      return result.users;
    });
}
function createUserRecord(userData) {
  return getAuth(app)
    .createUser({
      email: userData.email,
      emailVerified: false,
      phoneNumber: userData.contact,
      password: "defaultPassword",
      displayName: `${userData.firstName} ${userData.lastName}`,
      disabled: false,
    })
    .then((userRecord) => {
      return userRecord;
    });
}

function deleteUserRecord(uid) {
  return getAuth(app)
    .deleteUser(uid)
    .then(() => {
      return "User deleted";
    });
}
function updateUserRecord(uid, userData) {
  return getAuth(app)
    .updateUser(uid, userData)
    .then((userRecord) => {
      return userRecord;
    });
}
function setUserCustomClaim(uid, claims) {
  return getAuth(app)
    .setCustomUserClaims(uid, claims)
    .then(() => {
      return "Custom claims set";
    });
}

adminRouter.get("/users1", async (req, res) => {
  try {
    const users = await getUserRecord_ALL();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
});

adminRouter.get("/users", async (req, res) => {
  try {
    const users = await getUsersRecord();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
});

adminRouter.get("/users/:uid", async (req, res) => {
  const uid = req.params.uid;
  try {
    const user = await getUserRecord(uid);
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Internal Server Error");
  }
});

adminRouter.post("/users", async (req, res) => {
  const userData = req.body;
  try {
    const user = await createUserRecord(userData);
    res.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).send(error);
  }
});

adminRouter.post("/users/:uid/custom-claims", async (req, res) => {
  const uid = req.params.uid;
  const claims = req.body;
  try {
    const result = await setUserCustomClaim(uid, claims);
    res.json(result);
  } catch (error) {
    console.error("Error setting custom claims:", error);
    res.status(500).send("Internal Server Error");
  }
});

adminRouter.delete("/users/:uid", async (req, res) => {
  const uid = req.params.uid;
  try {
    const result = await deleteUserRecord(uid);
    res.json(result);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error");
  }
});

adminRouter.put("/users/:uid", async (req, res) => {
  const uid = req.params.uid;
  const userData = req.body;
  console.log(userData);
  // Validate userData
  if (!userData || typeof userData !== "object") {
    return res.status(400).send("Invalid user data");
  }

  try {
    const user = await updateUserRecord(uid, userData);
    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Internal Server Error");
  }
});
export default adminRouter

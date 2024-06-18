/* eslint-disable no-undef */
import { auth } from "../firebaseSetup";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";
import fs from "fs";
import path from "path";

const User_SignIN = JSON.parse(fs.readFileSync(path.resolve(__dirname, "TestData/User.json")));
const User_SignUP = JSON.parse(fs.readFileSync(path.resolve(__dirname, "TestData/newUser.json")));
const invalid_SignIN_email = JSON.parse(fs.readFileSync(path.resolve(__dirname, "TestData/invalidSignIn_email.json")));
const invalid_SignUP_SAME_EMAIL = JSON.parse(fs.readFileSync(path.resolve(__dirname, "TestData/sameUser.json")));
const invalid_SignIN_password = JSON.parse(fs.readFileSync(path.resolve(__dirname, "TestData/invalidSignIn_password.json")));

describe("Firebase Auth Emulator Tests", () => {
  beforeEach(async () => {
    // Clean up any existing users with the test emails
    for (const user of User_SignIN) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
        await deleteUser(userCredential.user);
      } catch (error) {
        // User does not exist, no need to delete
      }
    }
  });

  it("should create new users", async () => {
    for (const user of User_SignUP) {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      expect(userCredential.user.email).toBe(user.email);
    }
  });

  it("should sign in existing users", async () => {
    for (const user of User_SignIN) {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);

      expect(userCredential.user.email).toBe(user.email);
    }
  });

  it("should sign out users", async () => {
    for (const user of User_SignIN) {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      await signOut(auth);
      expect(auth.currentUser).toBeNull();
    }
  });
  it("should not sign in with invalid password", async () => {
    for (const user of User_SignIN) {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
    
    }
    for (const Invaliduser of invalid_SignIN_password) {
      try {
        await signInWithEmailAndPassword(auth, Invaliduser.email, Invaliduser.password);
      } catch (error) {
        expect(error.code).toBe("auth/wrong-password");
      }
    }
  });
  it("should not sign in with invalid email", async () => {
    // this bloody TEST
    for (const user of invalid_SignIN_email) {
      try {
        await signInWithEmailAndPassword(auth, user.email, user.password);
      } catch (error) {
        expect(error.code).toBe("auth/invalid-email");
      }
    }
  });

  it("should not sign in without already created user", async () => {
    for (const user of User_SignIN) {
      try {
        await signInWithEmailAndPassword(auth, user.email, user.password);
      } catch (error) {
        expect(error.code).toBe("auth/user-not-found");
      }
    }
  });
  it("should not sign out without already signed in user", async () => {
   
      try {
        await signOut(auth);
      } catch (error) {
        expect(error.code).toBe("auth/no-current-user");
      }
    
  });

  it("should not create duplicate users", async () => {
    for (const user of invalid_SignUP_SAME_EMAIL) {
      try {
        await createUserWithEmailAndPassword(auth, user.email, user.password);
      } catch (error) {
        expect(error.code).toBe("auth/email-already-in-use");
      }
    }
  });
});

/* eslint-disable no-undef */
import { auth } from "../firebaseSetup";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";
import fs from "fs";
import path from "path";

const preExistingUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'TestData/User.json')));
const newUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'TestData/newUser.json')));

describe('Firebase Auth Emulator Tests', () => {
  beforeEach(async () => {
    // Clean up any existing users with the test emails
    for (const user of preExistingUsers) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
        await deleteUser(userCredential.user);
      } catch (error) {
        // User does not exist, no need to delete
      }
    }
  });

  it('should create new users', async () => {
    for (const user of newUsers) {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      expect(userCredential.user.email).toBe(user.email);
    }
  });

  it('should sign in existing users', async () => {
    for (const user of preExistingUsers) {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      expect(userCredential.user.email).toBe(user.email);
    }
  });

  it('should sign out users', async () => {
    for (const user of preExistingUsers) {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      await signOut(auth);
      expect(auth.currentUser).toBeNull();
    }
  });
});

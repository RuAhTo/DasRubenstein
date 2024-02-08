import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuJ0gh8_4CcM800vXdtTL8Vv6JsT5QVq8",
  authDomain: "rubenstein-6d33f.firebaseapp.com",
  projectId: "rubenstein-6d33f",
  storageBucket: "rubenstein-6d33f.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:871196419346:web:62e7de71f71f243d92bfcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Function to sign in with Email and Password
const signInWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Error signing in with email and password", error);
    throw error;
  }
};

// Function to initiate sign in with Google
const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

// Handle the redirect result after signing in with Google
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      const user = result.user;
      console.log('User logged in after redirect:', user);
      // Update UI or state as needed
    }
  })
  .catch((error) => {
    console.error('Error retrieving redirect result', error);
    // Handle or display error
  });

// Monitor auth state change
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
    // Update UI or state to reflect logged-in user
  } else {
    console.log('User is not logged in');
    // Update UI or state to reflect no user is logged in
  }
});

export { auth, signInWithEmailPassword, signInWithGoogle, googleProvider };

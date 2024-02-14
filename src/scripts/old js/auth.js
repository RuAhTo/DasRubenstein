import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged } from '/node_modules/firebase/auth';

export const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

// Handle the redirect result after signing in with Google
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      // The signed-in user info
      const user = result.user;
      console.log('User logged in after redirect:', user);
      document.getElementById('loginStatus').innerText = 'Successfully logged in!';
    }
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error retrieving redirect result', error);
    document.getElementById('loginStatus').innerText = 'Login failed. Please try again.';
  });

// Monitor auth state change
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
    document.getElementById('loginStatus').innerText = 'Successfully logged in!';
  } else {
    console.log('User is not logged in');
    document.getElementById('loginStatus').innerText = 'Login failed. Please try again.';
  }
});

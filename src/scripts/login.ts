
import { loginWithGoogle } from './auth';

const loginWithGoogleButton = document.getElementById('loginWithGoogle');
if (loginWithGoogleButton) {
    loginWithGoogleButton.addEventListener('click', () => {
        loginWithGoogle();
    });
}

const subscribeButton = document.getElementById('subscribe');
if (subscribeButton) {
    subscribeButton.addEventListener('click', () => {
        loginWithGoogle();
    });
}



import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
    // Here you can redirect the user or show some content only for logged-in users
  } else {
    console.log('User is not logged in');
    // Show login button or public content
  }
})

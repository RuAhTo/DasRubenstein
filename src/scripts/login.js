/* import { Client } from 'appwrite';

const client = new Client();    

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Use Vite environment variables
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export default client;

// auth.js
import client from './appwriteConfig';

export const loginUser = (email, password) => {
  return client.account.createSession(email, password);
};

export const loginWithGoogle = () => {
  const provider = 'google';
  const success = window.location.origin + '/success'; // Adjust as needed
  const failure = window.location.origin + '/failure'; // Adjust as needed
  window.location.href = client.account.createOAuth2Session(provider, success, failure);
};


client.account.get()
  .then(response => {
    console.log('User is logged in', response);
    document.getElementById('loginStatus').innerText = 'Successfully logged in!';
  })
  .catch(error => {
    console.error('User is not logged in', error);
    document.getElementById('loginStatus').innerText = 'Login failed. Please try again.';
  });


  async function checkSessionStatus() {
    try {
      const response = await client.account.get();
      console.log('User is logged in', response);
      document.getElementById('loginStatus').innerText = 'Successfully logged in!';
      // Further actions like redirecting the user or showing user info
    } catch (error) {
      console.error('User is not logged in', error);
      // Handle logged out state, show login form, etc.
    }
  }
  
  // Call this function on app load or in a specific route/component
  checkSessionStatus();
   */
const firebaseConfig = {
  apiKey: "AIzaSyAVwtBwCpHGPJSymqv3MbEb9mwO2shRIcY",
  authDomain: "pet-hotel-prod-29b28.firebaseapp.com",
  databaseURL: "https://pet-hotel-prod-29b28.firebaseio.com",
  projectId: "pet-hotel-prod-29b28",
  storageBucket: "pet-hotel-prod-29b28.appspot.com",
  messagingSenderId: "421010757440",
  appId: "1:421010757440:web:30c15a7fae2f9ad8dd4ca5",
  measurementId: "G-Q7KCFN1JNL"
};

// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/graphql`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};

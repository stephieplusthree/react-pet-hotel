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
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/graphql`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export default {
  firebaseConfig,
  backendUrl,
};

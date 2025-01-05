import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGNIIH6r3HT6h9CFdvPU3poABENIW8CVA",
  authDomain: "hotel-management-1a316.firebaseapp.com",
  projectId: "hotel-management-1a316",
  storageBucket: "hotel-management-1a316.firebasestorage.app",
  messagingSenderId: "209504594163",
  appId: "1:209504594163:web:7c91de63411ca7e67eef86",
  measurementId: "G-7QBYX4K6BL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
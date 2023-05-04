import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCd6yevS0yh453IpoC7gPrQ2rm2PgfUFGg",
  authDomain: "news-aggregator-813a3.firebaseapp.com",
  projectId: "news-aggregator-813a3",
  storageBucket: "news-aggregator-813a3.appspot.com",
  messagingSenderId: "601252668457",
  appId: "1:601252668457:web:969d2aa36caf1df5a86838",
  measurementId: "G-V3HL9D5K9N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };

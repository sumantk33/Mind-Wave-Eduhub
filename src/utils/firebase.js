import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCdJ2Yi3HQbif4Uo0U1cOaqcAfZ0_lqI4k",
  authDomain: "mindwave-b821d.firebaseapp.com",
  projectId: "mindwave-b821d",
  storageBucket: "mindwave-b821d.firebasestorage.app",
  messagingSenderId: "474961425230",
  appId: "1:474961425230:web:2407746b4f9e7e4820a41f",
  measurementId: "G-6C69Z4GWPP",
};

export const app = initializeApp(firebaseConfig);

isSupported().then((ok) => {
  if (ok) getAnalytics(app);
});

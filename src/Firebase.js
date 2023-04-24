import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYSAHt8YRNZ3oLm9Npnfuskttg_HgG8yc",
  authDomain: "adminpanel-a9f5d.firebaseapp.com",
  projectId: "adminpanel-a9f5d",
  storageBucket: "adminpanel-a9f5d.appspot.com",
  messagingSenderId: "587190786198",
  appId: "1:587190786198:web:bafeeb585339e696628ab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
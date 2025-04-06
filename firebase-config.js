// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAflTMf7l_smxjn9Qv4j9akPiJVDR-eNQw",
  authDomain: "espetinhodeliveryzd.firebaseapp.com",
  projectId: "espetinhodeliveryzd",
  storageBucket: "espetinhodeliveryzd.firebasestorage.app",
  messagingSenderId: "898204860710",
  appId: "1:898204860710:web:2a6027717b92200772c1e7",
  measurementId: "G-58KXNPPM16"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

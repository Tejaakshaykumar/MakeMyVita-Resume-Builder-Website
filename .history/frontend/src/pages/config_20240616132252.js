import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8lyTqAVKb2NdFvCnU0NEb9aJg2Z6yROc",
  authDomain: "makemyvita.firebaseapp.com",
  projectId: "makemyvita",
  storageBucket: "makemyvita.appspot.com",
  messagingSenderId: "1061941584794",
  appId: "1:1061941584794:web:749068f260e8e7c4c81023",
  measurementId: "G-Q7RPPCTXDR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider1 = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();
const provider3

export { auth, provider };

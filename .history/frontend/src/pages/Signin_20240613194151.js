// import React from 'react';
// import './pagestyles.css';

// function SignIn() {
//   return (
//     <div className='signin'>
//     <div className="signin-container">
//       <div className="signin-box">
//         <div className="signin-header">
//           <h2>Make My Vita</h2>
//         </div>
//         <form>
//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <input type="email" className="form-control" id="email" placeholder="johnnysins@example.com" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <div className="input-group">
//               <input type="password" className="form-control" id="password" placeholder="***********" />
//             </div>
//           </div>
//           <div className="form-check">
//             <input type="checkbox" className="form-check-input" id="rememberMe" />
//             <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
//             <a href="#" className="forgot-password">Forgot Password?</a>
//           </div>
//           <button type="submit" className="btn btn-primary btn-block">SignIn</button>
//         </form>
//         <div className="or-use">
//           <span >OR USE</span>
//         </div>
//         <div className="social-login">
//           <button className="btn btn-outline-secondary"><i className="fa fa-google"></i></button>
//           <button className="btn btn-outline-secondary"><i className="fa fa-facebook"></i></button>
//           <button className="btn btn-outline-secondary"><i className="fa fa-github"></i></button>
//           <button className="btn btn-outline-secondary"><i className="fa fa-linkedin"></i></button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default SignIn;


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8lyTqAVKb2NdFvCnU0NEb9aJg2Z6yROc",
  authDomain: "makemyvita.firebaseapp.com",
  projectId: "makemyvita",
  storageBucket: "makemyvita.appspot.com",
  messagingSenderId: "1061941584794",
  appId: "1:1061941584794:web:749068f260e8e7c4c81023",
  measurementId: "G-Q7RPPCTXDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
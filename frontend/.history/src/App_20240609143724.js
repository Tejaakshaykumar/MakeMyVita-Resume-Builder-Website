import "./App.css";
import Navbar from "./containers/Navbar";
import About from "./containers/About";
import Features from "./containers/Features";
import Review from "./containers/Review";
import Trybox from "./containers/Trybox";
import Motionbox from "./containers/Motionbox";
import Foot from "./containers/Foot";

import FAQ from "./pages/FAQ";
import SignIn from "./pages/Signin";
import TandC from "./pages/TandC";

function App() {
  return (
    <div>
      <Router>
        <div id="root">
          <div className="content">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/T&C" element={<TandC />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route
                path="/*"
                element={
                  <>
                    <Navbar />

                    {/* <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes> */}
                  </>
                }
              />
            </Routes>
          </div>
          <Foot />
        </div>
      </Router>
    </div>
  );
}

export default App;

// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import NewPage from './components/NewPage';
// import Navbar from './components/Navbar';
// import Foot from './components/Foot';
// import './cont.css'; // Import the CSS file here as well

// function App() {
//   return (
//     <Router>
//       <div id="root">
//         <div className="content">
//           <Routes>
//             {/* Routes without Navbar */}
//             <Route path="/newpage" element={<NewPage />} />
//             {/* Routes with Navbar */}
//             <Route path="/*" element={
//               <>
//                 <Navbar />
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/contact" element={<Contact />} />
//                 </Routes>
//               </>
//             } />
//           </Routes>
//         </div>
//         <Foot />
//       </div>
//     </Router>
//   );
// }

// export default App;

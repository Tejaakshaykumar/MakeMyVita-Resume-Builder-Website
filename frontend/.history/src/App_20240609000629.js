// import logo from './logo.svg';
import './App.css';
import About from './containers/About';
import Features from './containers/Features';

import Foot from './containers/Foot';
import Motionbox from './containers/Motionbox';
import Navbar from './containers/Navbar';
import Review from './containers/Review';
import Trybox from './containers/Trybox';
import FAQ from './pages/FAQ';
import SignIn from './pages/Signin';
import TandC from './pages/TandC';
function App() {
  return (
    <div className="App">
      <About/>
     <Navbar/>
     <About/>
      <Features/>
     <Review/>
     {/* <Trybox/> */}
     {/* <Motionbox/> */}
     {/* <Foot/> */}
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


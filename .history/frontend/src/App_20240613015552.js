// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from "./containers/Navbar";
// import About from "./containers/About";
// import Buildresume from "./containers/Buildresume";
// import Features from "./containers/Features";
// import Review from "./containers/Review";
// import Trybox from "./containers/Trybox";
// import Motionbox from "./containers/Motionbox";
// import Foot from "./containers/Foot";

// import FAQ from "./pages/FAQ";
// import SignIn from "./pages/Signin";
// import TandC from "./pages/TandC";
// import Privacy from './pages/Privacy';
// import Aboutus from './pages/Aboutus';
// import Contactus from "./pages/Contactus";

// function App() {
//   return (
//     <div>
//       <Router>
//         <div id="root">
//         <Navbar />
//           <div className="content">
//             <Routes>
//               <Route path="/signin" element={<SignIn />} />
//               <Route path="/FAQ" element={<FAQ />} />
//               <Route path="/T&C" element={<TandC />} />
//               <Route path="/privacy" element={<Privacy />} />
//               <Route path="/aboutus" element={<Aboutus />} />
//               <Route path="/contactus" element={<Contactus />} />
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <About/>
//                     <Features/>
//                     <Buildresume/>
//                     <Review/>
//                     <Trybox/>
//                     <Motionbox/>
//                     <Routes>
//                       <Route path="/" element={<Home />} />
//                       <Route path="/about" element={<About />} />
//                       <Route path="/contact" element={<Contact />} />
//                     </Routes>
//                   </>
//                 }
//               />
//             </Routes>
//           </div>
//           <Foot />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import ResumeEditor from './components/ResumeEditor';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <ResumeEditor />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './components/ItemForm';
import ItemList from './testing/ItemList';

const App = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/items');
            setItems(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <ItemForm fetchItems={fetchItems} />
            <ItemList items={items} fetchItems={fetchItems} />
        </div>
    );
};

export default App;

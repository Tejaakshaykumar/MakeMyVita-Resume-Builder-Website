import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./containers/Navbar";
import About from "./containers/About";
import Buildresume from "./containers/Buildresume";
import Features from "./containers/Features";
import Review from "./containers/Review";
import Trybox from "./containers/Trybox";
import Motionbox from "./containers/Motionbox";
import Foot from "./containers/Foot";

import FAQ from "./pages/FAQ";
import SignIn from "./pages/Signin";
import TandC from "./pages/TandC";
import Privacy from './pages/Privacy';
import Aboutus from './pages/Aboutus';
import Contactus from "./pages/Contactus";
import ResumeEditor from "./components/ResumeEditor";
import SignUp from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <div id="root">
        <Navbar />
          <div className="content">
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/T&C" element={<TandC />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contactus" element={<Contactus />} />
               <Route path="/resume" element={<ResumeEditor />} />
              <Route
                path="/"
                element={
                  <>
                    <About/>
                    <Features/>
                    <Buildresume/>
                    <Review/>
                    <Trybox/>
                    <Motionbox/>
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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ItemForm from './testing/ItemForm';
// import ItemList from './testing/ItemList';

// const App = () => {
//     const [items, setItems] = useState([]);

//     const fetchItems = async () => {
//         try {
//             const res = await axios.get('http://localhost:5000/api/items');
//             setItems(res.data);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     useEffect(() => {
//         fetchItems();
//     }, []);

//     return (
//         <div>
//             <ItemForm fetchItems={fetchItems} />
//             <ItemList items={items} fetchItems={fetchItems} />
//         </div>
//     );
// };

// export default App;

// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import './App.css';
// import Temp1 from './templates/Temp1';

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     education: '',
//     experience: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleDownload = () => {
//     const input = document.getElementById('resume');
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 0, 0);
//       pdf.save('resume.pdf');
//     });
//   };

//   return (
//     <div className="App">
//       <div className="form-panel">
//         <h2>Enter Your Details</h2>
//         <form>
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//           <label>Phone:</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
//           <label>Address:</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} />
//           <label>Education:</label>
//           <textarea name="education" value={formData.education} onChange={handleChange} />
//           <label>Experience:</label>
//           <textarea name="experience" value={formData.experience} onChange={handleChange} />
//         </form>
//       </div>
//       <div className="resume-panel" id="resume">
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> {formData.name}</p>
//         <p><strong>Email:</strong> {formData.email}</p>
//         <p><strong>Phone:</strong> {formData.phone}</p>
//         <p><strong>Address:</strong> {formData.address}</p>
//         <p><strong>Education:</strong> {formData.education}</p>
//         <p><strong>Experience:</strong> {formData.experience}</p>
//       </div>
//       <button onClick={handleDownload}>Download as PDF</button>
//       <Temp1 />
//     </div>
//   );
// };

// export default App;

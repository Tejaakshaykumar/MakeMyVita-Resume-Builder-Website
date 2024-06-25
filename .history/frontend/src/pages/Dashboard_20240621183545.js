// import React, { useEffect, useState } from "react";
// import "./pagestyles.css";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";

// function Dashboard() {
//   const [username, setUsername] = useState('');
//   const [resumes, setResumes] = useState([]);

//   const navigate = useNavigate();
//   const { LogoutUser, user } = useAuth();

//   useEffect(() => {
//     if (user) {
//       setUsername(user.username);
//     }
//   }, [user]);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:5000/api/resumes', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setResumes(data);
//         } else {
//           console.error('Failed to fetch resumes');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchResumes();
//   }, []);

//   const handleLogout = () => {
//     LogoutUser();
//     alert('Successfully logged out');
//     navigate('/signin');
//   };

//   const handleView = (resumeId) => {
//     navigate(`/resume/${resumeId}`);
//   };

//   return (
//     <div className="Dashboard">
//       <div className="container-fluid1">
//         <div className="row">
//           <nav className="sidebar">
//             <div className="sidebar-sticky">
//               <h2 className="sidebar-title" style={{ color: "white" }}>WELCOME</h2>
//               <h2 className="sidebar-title" style={{ color: "white" }}>{username}</h2>
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a className="nav-link active" href="#">
//                     <i className="bi bi-house-door-fill"></i> Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     <i className="bi bi-plus-square"></i> Create new Resume
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link" onClick={handleLogout}>
//                     <i className="bi bi-box-arrow-left"></i> Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <main role="main" className="main-content">
//             <div className="header">
//               <h1 className="h2">Dashboard</h1>
//             </div>
//             {resumes.map((resume) => (
//               <div className="card-container" key={resume._id}>
//                 <div className="card bg-light">
//                   <div className="card-body">
//                     <h5 className="card-title">{resume.name}</h5>
//                     <p className="card-text">{resume.description}</p>
//                   </div>
//                   <div className="button-row">
//                     <button className="btn1">
//                       <i className="bi bi-pencil-square"></i> Update
//                     </button>
//                     <button className="btn1" onClick={() => handleView(resume._id)}>
//                       <i className="bi bi-binoculars-fill"></i> View
//                     </button>
//                     <button className="btn1" style={{ backgroundColor: 'red' }}>
//                       <i className="bi bi-trash-fill"></i> Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import "./pagestyles.css";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";

// function Dashboard() {
//   const [username, setUsername] = useState('');
//   const [resumes, setResumes] = useState([]);

//   const navigate = useNavigate();
//   const { LogoutUser, user } = useAuth();

//   useEffect(() => {
//     if (user) {
//       setUsername(user.username);
//     }
//   }, [user]);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:5000/api/resumes', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log('Fetched resumes:', data);  // Debugging log
//           setResumes(data);
//         } else {
//           console.error('Failed to fetch resumes:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching resumes:', error);
//       }
//     };

//     fetchResumes();
//   }, []);

//   const handleLogout = () => {
//     LogoutUser();
//     alert('Successfully logged out');
//     navigate('/signin');
//   };

//   const handleView = (resumeId) => {
//     navigate(`/resume/${resumeId}`);
//   };

//   return (
//     <div className="Dashboard">
//       <div className="container-fluid1">
//         <div className="row">
//           <nav className="sidebar">
//             <div className="sidebar-sticky">
//               <h2 className="sidebar-title" style={{ color: "white" }}>WELCOME</h2>
//               <h2 className="sidebar-title" style={{ color: "white" }}>{username}</h2>
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a className="nav-link active" href="#">
//                     <i className="bi bi-house-door-fill"></i> Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     <i className="bi bi-plus-square"></i> Create new Resume
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link" onClick={handleLogout}>
//                     <i className="bi bi-box-arrow-left"></i> Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <main role="main" className="main-content">
//             <div className="header">
//               <h1 className="h2">Dashboard</h1>
//             </div>
//             {resumes.length > 0 ? (
//               resumes.map((resume) => (
//                 <div className="card-container" key={resume._id}>
//                   <div className="card bg-light">
//                     <div className="card-body">
//                       <h5 className="card-title">{resume.name}</h5>
//                       <p className="card-text">{resume.description}</p>
//                     </div>
//                     <div className="button-row">
//                       <button className="btn1">
//                         <i className="bi bi-pencil-square"></i> Update
//                       </button>
//                       <button className="btn1" onClick={() => handleView(resume._id)}>
//                         <i className="bi bi-binoculars-fill"></i> View
//                       </button>
//                       <button className="btn1" style={{ backgroundColor: 'red' }}>
//                         <i className="bi bi-trash-fill"></i> Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No resumes found</p>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect } from "react";
import "./pagestyles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useResume } from "../store/ResumeContext";
import { toast } from 'react-toastify';


function Dashboard() {
  const navigate = useNavigate();
  const { LogoutUser, user ,loading } = useAuth();
  const { resumes, fetchResumes, clearResumes } = useResume();
  
  const handleLogout = () => {
    LogoutUser();
    clearResumes();
    toast('Successfully logged out');
    navigate('/signin');
  };

  const handleView = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  if (loading) {
    return (<div >
      <div style={{ textAlign: 'center', marginTop: '50px',}}>
      {/* <img src="http://localhost:5000/uploads/1718951975917-OIP (1).jpg" alt="Loading Icon" style={{ width: '100px', height: '100px', marginBottom: '20px' }} /> */}

      <img
        src="https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif"
        alt="Loading..."
        width="900"
        height="700"
        style={{ border: 'none' }}
      />
      <h2 style={{fontFamily:"serif"}}>Refresh the page</h2>
    </div>
    </div>);
  }
  else
  return (
    <div className="Dashboard">
      <div className="container-fluid1">
        <div className="row">
          <nav className="sidebar">
            <div className="sidebar-sticky">
              <h2 className="sidebar-title" >WELCOME</h2>
              <h2 className="sidebar-title" >{user?.username}</h2>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="bi bi-house-door-fill"></i> Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-plus-square"></i> Create new Resume
                  </a>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-left"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" className="main-content">
            <div className="header">
              <h1 className="h2">Dashboard</h1>
            </div>
            {resumes.length > 0 ? (
              resumes.map((resume) => (
                <div className="card-container" key={resume._id}>
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title">{resume.name}</h5>
                      <p className="card-text">{resume.description}</p>
                    </div>
                    <div className="button-row">
                      <button className="btn1">
                        <i className="bi bi-pencil-square"></i> Update
                      </button>
                      <button className="btn1" onClick={() => handleView(resume._id)}>
                        <i className="bi bi-binoculars-fill"></i> View
                      </button>
                      <button className="btn1" style={{ backgroundColor: 'red' }}>
                        <i className="bi bi-trash-fill"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No resumes found</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

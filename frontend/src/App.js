
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./containers/Navbar";
import About from "./containers/About";
import Howitworks from "./containers/Howitworks";
import Buildresume from "./containers/Buildresume";
import Features from "./containers/Features";
import Review from "./containers/Review";
import Trybox from "./containers/Trybox";
import Motionbox from "./containers/Motionbox";
import Foot from "./containers/Foot";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import FAQ from "./pages/FAQ";
import SignIn from "./pages/Signin";
import TandC from "./pages/TandC";
import Privacy from './pages/Privacy';
import Aboutus from './pages/Aboutus';
import Contactus from "./pages/Contactus";
import ResumeEditor from "./components/ResumeEditor";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ResumeView from "./pages/ResumeView";

function App() {
  return (
    <div>
      <Router>
        <div id="root">
        <Navbar />
          <div className="content">
            <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resume/:resumeId" element={<ResumeView />} />
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
                    <Howitworks/>
                    <Trybox/>
                    <Review/>
                    <Motionbox/>
                    
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
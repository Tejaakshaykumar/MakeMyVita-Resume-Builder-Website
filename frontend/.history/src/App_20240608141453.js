// import logo from './logo.svg';
import './App.css';

import Foot from './containers/Foot';
import Navbar from './containers/Navbar';
import SignIn from './pages/Signin';
import TandC from './pages/TandC';
function App() {
  return (
    <div className="App">
     {/* <TandC /> */}
     {/* <SignIn/> */}
     <Navbar/>
     <Foot/>
    </div>
  );
}

export default App;

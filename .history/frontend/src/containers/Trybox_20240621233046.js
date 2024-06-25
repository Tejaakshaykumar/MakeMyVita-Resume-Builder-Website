import React from 'react';
import './cont.css'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Trybox = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleCreate = () => {
    {isLoggedIn ? (navigate('/resume')):(navigate('/signin'))}
  };
  return (
    <section>
      <div className="try">
      <h2>Try MakeMyVita's professional Resume Builder now</h2>
      <button>land your dream job now</button>
    </div>
    </section>
  );
};

export default Trybox;

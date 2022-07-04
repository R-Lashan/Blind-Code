import React, { useState, useEffect } from 'react';
import image from '../images/coding.png';
import './Styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [ btn, setBtn ] = useState('');

  function signOut(){
    localStorage.setItem('username', '');
    localStorage.setItem('email','');
    localStorage.setItem('password', '');
    alert('You have Sign Out');
  };

  useEffect(() => {
    if(localStorage.getItem('username') === '' && localStorage.getItem('email') === ''){
      setBtn(<Link to='/sign-in'><button className='login-btn'><p>Sign In</p></button></Link>);
    } else {
      setBtn(<button onClick={signOut} className='login-btn'><p>Sign Out</p></button>);
    }
  }, [])
  return (
    <div className='home'>
      <img className='bg-image' src={image}/>
      <Link to='/programming'><button className='learn-btn'>Learn</button></Link>
      {btn}
    </div>
  )
}

export default Home

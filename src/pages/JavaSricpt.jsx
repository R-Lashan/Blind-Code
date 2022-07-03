import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function JavaSricpt() {
  // const [ button, setButton ] = useState('');
  // const [ para, setPara ] = useState('');
  // const [ body, setBody ] = useState('');

  // useEffect(() => { 
  //   if(localStorage.getItem('username') === '' && localStorage.getItem('email') === ''){
  //     setPara(<p style={{marginLeft: '40.7%', position: 'absolute', top: '48%'}}>Please Sign In to learn javascript</p>)
  //     setButton(
  //       <Link to='/sign-in'>
  //         <button style={{marginLeft: '47%', marginTop: '21%', width: '100px', height: '40px', border: 'none',       outline: 'none', backgroundColor: 'black', color: 'white', borderRadius: '10px'}}>Sign In</button>
  //       </Link>
  //     )
  //   } else {
  //     setBody(
  //       <div>
  //         <h1 className='heading'>What is JavaScript?</h1>
  //       </div>
  //     );
  //   }
  // },[])
  return (
    <div>
     {/* {para}
     {button}
     {body} */}
     <p style={{marginLeft: '40.7%', position: 'absolute', top: '48%'}}>This page is under maintenance</p>
      <Link to='/'>
        <button style={{marginLeft: '47%', marginTop: '21%', width: '100px', height: '40px', border: 'none', outline: 'none', backgroundColor: 'black', color: 'white', borderRadius: '10px'}}>Home</button>
      </Link>
    </div>
  )
}

export default JavaSricpt

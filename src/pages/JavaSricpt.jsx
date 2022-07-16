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
     {/* <p style={{marginLeft: '40.7%', position: 'absolute', top: '48%'}}>This page is under maintenance</p>
      <Link to='/'>
        <button style={{marginLeft: '47%', marginTop: '21%', width: '100px', height: '40px', border: 'none', outline: 'none', backgroundColor: 'black', color: 'white', borderRadius: '10px'}}>Home</button>
      </Link> */}
      <h1 className='heading'>What is JavaScript?</h1>
      <div className='info'>
        <li>JavaScript is a scripting language that enables you to create dynamically control multimedia, animate images, pretty much everything else.</li>
        <li>JavaScript is the world's most popular programming language.</li>
        <li>JavaScript is the programming language of the Web.</li>
        <li>JavaScript is easy to learn.</li>            
      </div>
      <h1 className='heading'>Why you should study JavaScript?</h1>
      <div className='info'>
        <li>JavaScript is one of the 3 languages all web developers must learn:</li>
        <li>HTML to define the content of web pages</li>
        <li>CSS to specify the layout of web pages</li>
        <li><b>JavaScript</b> to program the behavior of web pages</li>            
      </div>
      <h1 className='heading'>Steps to learn JavaScript</h1>
      <div className='info'>
        <ol className='steps'>
          <li>Install Node Js</li>
        </ol>         
      </div>
    </div>
  )
}

export default JavaSricpt

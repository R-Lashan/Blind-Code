import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/programming.css';

function Products() {
  return (
    <div>
        <div>
            <h1 className='heading'>What is Computer Programming?</h1>
            <p className='para'>Computer programming is the process of performing a particular computation, usually by designing/building an executable program. programming involves tasks such as analysis, generating algorithms, profilling algorithms' accuracy and resource consumption, and the implementation of algorithms. There two main stages in programming Front-End and Back-End</p>
        </div>
        <div>
            <h1 className='heading'>What is known as Front-End?</h1>
            <p className='para'>Everything you see on a website is built with front end development(sometimes also called "front end web development"). People behind it have a name called front end developers. A front end web developer is a software engineer who implements web designs through coding languages like HTML, CSS and JavaScript.</p>
            <div>
              <h3 className='heading'>Basic Front-End languages</h3>            
                <div className='html-box'>
                  <Link to='/html' style={{textDecoration: 'none'}}>
                    <h2 className='html-text'>HTML</h2>
                  </Link>
                </div>
                <div className='css-box'>
                    <Link to='/css' style={{textDecoration: 'none'}}>
                      <h2 className='css-text'>CSS</h2>
                    </Link>
                </div>
                <div className='js-box'>
                  <Link to='/javascript' style={{textDecoration: 'none'}}>
                      <h2 className='js-text'>JavaScript</h2> 
                  </Link>
                </div>
            </div>
        </div>
        <div>
            <h1 className='heading'>What is known as Back-End?</h1>
            <p className='para'>The back-end, also called the server side, consists of the server which provides data on request, the application which channels it, and the database which oraganizes the information. For example, when a customer browses shoes on a website, they are interacting with the front end</p>
            <h3 className='heading'>Top 7 Programmng Languages for Backend Web Development</h3>
            <ul className='languages'>
              <li>Node JS</li>
              <li>Python</li>
              <li>PHP</li>
              <li>Java</li>
              <li>Ruby</li>
              <li>Golang</li>
              <li>C#</li>
            </ul>
        </div>
    </div>
  )
}

export default Products

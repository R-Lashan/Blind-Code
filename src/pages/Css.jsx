import React from 'react';
import css from '../images/css-example.png';
import css_syntax from '../images/css-syntax.png';
import css_file_create from '../images/create.png';
import html_doc from '../images/html-doc.png';
import css_doc from '../images/css-doc.png';
import browser_output from '../images/browser-output.png';
import browser_bg from '../images/browser1.png';
import html_bg from '../images/html-bg.png';
import css_bg from '../images/css-bg.png';
import css_color from '../images/css-color.png';
import txt_color from '../images/txt-color.png';

import './Styles/Css.css';

function Css() {
  return (
    <div>
      <h1 className='heading'>What is CSS?</h1>
      <div className='info'>
        <li>CSS stands for Cascading Style Sheets</li>
        <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
        <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
        <li>External stylesheets are stored in CSS files</li>            
      </div>
      <h1 className='heading'>Why we use CSS?</h1>
      <div>
        <li className='info'>CSS is used to style our web page, including designs, animations etc...</li>
      </div>
      <div className='html-doc'>
        <h1 className='heading'>A Css example</h1>
        <img className='css-img' src={css} alt="" />
      </div>
      <h1 className='heading'>Css Syntax</h1>
      <img className='css-syntax' src={css_syntax} alt="" />
      <br />
      <br /><br />
      <div className='info'>
        <li>Selector is the html element which u want to style</li>
        <li>The declaration block contains one or more declarations separated by semicolons</li>
        <li>Each declaration includes a CSS property name and a value, separated by a colon.</li>
        <li>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces</li>            
      </div>
      <h1 className='heading'>Three ways to insert Css</h1>
      <p style={{marginLeft: '50px', marginBottom: '30px'}}>There three ways to insert css</p>
      <div className='info'>
        <li>External css</li>
        <li>Inline css</li>
        <li>Internal css</li>          
      </div>
      {/* <p className='heading'>It is better to use external css method</p> */}
      <h1 className='heading'>How to create a css file?</h1>
      <div className='steps'>
        <h4 className='step-1'>Step 1: Create a new folder in your desktop</h4>
        <br />
        <img className='css-create-img' src={css_file_create} alt="" />
        <br />
        <br />
        <h4 className='step-2'>Step 2: open notepad and write some html code</h4>
        <br />
        <p>After you finish coding save your file as index.html, the .html extension is important</p>
        <br />
        <img className='html-img' src={html_doc} alt="" />
        <h4 className='step-3'>Step 3: Again open a new window in notepad and write some css code</h4>
        <br />
        <p>After you finish coding save your file as style.css the, .css extension is important</p>
        <br />
        <img className='html-img' src={css_doc} alt="" />
        <h4 className='step-4'>Step 4: Now open your webpage folder and click the index.html file the output will appear on the browser</h4>
        <br />
        <img className='css-create-img' src={browser_output} alt="" />
        <br />
        <br />
        <p>When you observe your html code u can see theirs a code like {'<link rel="stylesheet" href="style.css"/>'}, This code link the css file with the html file. </p>
        <br />
        <h4 className='tuto'>In the html page u can see h1 tag which has a value Hello World. So i linked the html with the css so it will find for the property h1 and change the color as red in the css file. In the css file theirs a value called body, it means the web pages entire body. when your refresh the page u can see the web page's background color changes</h4>
        <br />
        <h4 className='tuto'><b>Note: whenever u write the code save the file and refresh the page</b></h4>
        <br /><br />
        <h1>Css colors</h1>
        <br />
        <p>In CSS, a color can be specified by using a predefined color name</p>
        <br />
        <h2>Css background colors</h2>
        <br />
        <img className='browser-bg' src={browser_bg} alt="" />
        <p>To get the above result</p>
        <br />
        <p>Code this in your html file</p>
        <br />
        <img className='html-bg' src={html_bg} alt="" />
        <p>And code this in your css file</p>
        <br />
        <img className='css-bg' src={css_bg} alt="" />
        <p>Finally save the two files and refresh the browser</p>
        <br />
        <h2>Css Text colors</h2>
        <br />
        <img className='css-color' src={css_color} alt="" />
        <p>To change the text color u just need to put "color:"</p>
        <p>Save the file and refresh the browser</p>
        <br />
        <img className='browser-bg' src={txt_color} alt="" />
        <p>You will get the above result</p>
      </div>
    </div>
  )
}

export default Css

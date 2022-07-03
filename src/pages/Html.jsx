import React from 'react';
import html from '../images/Html.png';
import notepad_img from '../images/img_notepad.png';
import save_img from '../images/img_saveas.png';
import chorme_img from '../images/img_chrome.png';
import './Styles/Html.css';

import HtmlTags from './HtmlTags';

function Html() {
  return (
    <div>
        <div>
            <h1 className='heading'>What is HTML?</h1>
            <div className='info'>
              <li>HTML stands for Hyper Text Markup Language</li>
              <li>HTML is the standard markup language for creating Web pages</li>
              <li>HTML describes the structure of a Web page</li>
              <li>HTML consists of a series of elements</li>
              <li>HTML elements tell the browser how to display the content</li>
              <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc...</li>
            </div>
            <div className='html-doc'>
              <h1 className='heading'>A Simple HTML Document</h1>
              <img className='html-img' style={{marginLeft: '50px'}} src={html} alt="" /> 
            </div>
            <div>
              <HtmlTags />
            </div>
            <div>
              <h1 className='heading'>Learn HTML Using Notepad or TextEdit</h1>
              <p className='para'>Web pages can be created and modified by using professional HTML editors.
                However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).
                We believe in that using a simple text editor is a good way to learn HTML.
                Follow the steps below to create your first web page with Notepad or TextEdit.
              </p>
              <div className='steps'>
                <h4>Step 1: Open Notepad (PC)</h4>
                <br />
                <p className='para'>Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad.</p>
                <br />
                <h4>Step 2: Write Some HTML</h4>
                <br />
                <p className='para'>Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad.</p>
                <img src={notepad_img} alt="" />
                <br /><br /><br />
                <h4>Step 3: Save the HTML Page</h4>
                <br />
                <p className='para'>Save the file on your computer. Select File {`>`} Save as in the Notepad menu.
                  Name the file "index.html" and set the encoding to UTF-8 (which is the preferred encoding for HTMLfiles
                </p>
                <img src={save_img} alt="" />
                <br /><br /><br />
                <h4>Step 4: View the HTML Page in Your Browser</h4>
                <br />
                <p className='para'>
                  Open the saved HTML file in your favorite browser (double click on the file, or right-click - andchoose "Open with").
                  The result will look much like this:
                </p>
                <img src={chorme_img} alt="" />
                <br /><br /><br />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Html

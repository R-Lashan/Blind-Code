import React from 'react';
import './Styles/HtmlTags.css';

function HtmlTags() {
    const HtmlTags = [
        {
          id: 1,
          name: '<html>...</html>',
          function:  'Indicate that HTML is used to create the web page',
        },
        {
          id: 2,
          name: '<head>...</head>',
          function:  'Container for all the elements such as title of document',
        },
        {
          id: 3,
          name: '<title>...</title>',
          function:  'Title of the website(not included in the web page)',
        },
        {
          id: 4,
          name: '<body>...</body>',
          function:  'To the content of the web page',
        },
        {
          id: 5,
          name: '<h>...</h>',
          function:  'headers',
        },
        {
          id: 6,
          name: '<b>...</b>',
          function:  'bold face text',
        },
        {
          id: 7,
          name: '<i>...</i>',
          function:  'italicize',
        },
        {
          id: 8,
          name: '<centre>...</centre>',
          function:  'a list with center alignment',
        },
        {
          id: 9,
          name: '<ul>...</ul>',
          function:  'a list with bullets',
        },
        {
          id: 10,
          name: '<ol>...<ol>',
          function:  'a list with numbers',
        },
        {
          id: 11,
          name: '<li>...</li>',
          function:  'bullet/ numberical list items',
        },
        {
          id: 12,
          name: '<br>...</br>',
          function:  'line break',
        },
        {
          id: 13,
          name: '<p>...</p>',
          function:  'a paragraph',
        },
        {
          id: 14,
          name: '<img src="..." >',
          function:  'Insert an image',
        },
        {
          id: 15,
          name: '<a href="..."></a>',
          function:  'Create a hyperlink',
        },
      ]
  return (
    <div>
      <h1 className='heading'>A few tabs used in HTML to create a website</h1>
      {         
        HtmlTags.map((tag) => {
          return <div>
            <div className='para tag-div'>{tag.name}</div>
            <div className='para func-div'>{tag.function}</div>
          </div>
        })
      }
    </div>
  )
}

export default HtmlTags

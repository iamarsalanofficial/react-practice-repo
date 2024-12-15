import React from 'react';
import ReactDOM from 'react-dom/client'; 
import Image from './assets/react.svg';

// Get the root element
const reactDiv = document.getElementById('root');

// Create a root and render the content
ReactDOM.createRoot(reactDiv).render(
  <div>
    <h1>Hello, world!</h1>
    <img src={Image} alt="React Logo" width={200} />
  </div>
);
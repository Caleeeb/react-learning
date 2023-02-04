// 1) import and React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a rerference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Creat React compenent
function App() {
  return <h1> Hi there</h1>;
}

// 5) Show React compenent on the screen
root.render(<App />); 
// 1) import and React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a rerference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Creat React compenent
// function App() {
//   return <input style={{ border: '3px dotted blue' }} type="number" min={5} />;
// } (this was moved to App.js as this is a cleaner way of organizing a React project)

// 5) Show React compenent on the screen
root.render(<App />); 
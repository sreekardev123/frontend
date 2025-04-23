import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Old App */}
    <div style={{ marginBottom: '40px' }}>
      <h2>Laser Cut Name Boards</h2>
      <App />
    </div>
    {/* New App1 */}
    <div>
      <h2>SS Name Plates</h2>
      <App1 />
    </div>
    
    <div>
      <h2>Acp Sigma Boards</h2>
      <App2/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

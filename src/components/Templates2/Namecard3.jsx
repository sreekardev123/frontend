import React from 'react';

const Namecard3 = ({ name, email }) => (
  <div style={{
    position: 'relative',
    width: '320px',
    height: '160px',
    background: 'rgba(255, 192, 203, 0.15)',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    boxShadow: '0 0 5px #FF69B4, 0 0 10px #FF69B4, 0 0 20px #FF69B4, 0 0 40px #FF69B4',
    border: '1px solid rgba(255, 192, 203, 0.3)'
  }}>
    {/* Star corner accents */}
    <span style={{position:'absolute',top:'8px',left:'8px',fontSize:'24px',opacity:0.7}}>✨</span>
    <span style={{position:'absolute',top:'8px',right:'8px',fontSize:'24px',opacity:0.7}}>✨</span>
    <span style={{position:'absolute',bottom:'8px',left:'8px',fontSize:'24px',opacity:0.7}}>✨</span>
    <span style={{position:'absolute',bottom:'8px',right:'8px',fontSize:'24px',opacity:0.7}}>✨</span>

    <h2 style={{margin:0,color:'#4169e1'}}>{name}</h2>
    <p style={{margin:'4px 0',color:'#2f4f4f'}}>{email}</p>
  </div>
);

export default Namecard3;

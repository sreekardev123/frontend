import React from 'react';

const Namecard4 = ({ name, email }) => (
  <div style={{
    position: 'relative',
    width: '320px',
    height: '160px',
    background: 'rgba(72, 201, 176, 0.15)',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    boxShadow: '0 0 5px #48c9b0, 0 0 10px #48c9b0, 0 0 20px #48c9b0, 0 0 40px #48c9b0',
    border: '1px solid rgba(72, 201, 176, 0.3)'
  }}>
    {/* Vine decorations top and bottom */}
    <span style={{position:'absolute',top:'8px',left:'50%',transform:'translateX(-50%)',fontSize:'24px',opacity:0.6}}>🍃</span>
    <span style={{position:'absolute',bottom:'8px',left:'50%',transform:'translateX(-50%)',fontSize:'24px',opacity:0.6}}>🍃</span>

    <h2 style={{margin:0,color:'#117864'}}>{name}</h2>
    <p style={{margin:'4px 0',color:'#145a32'}}>{email}</p>
  </div>
);

export default Namecard4;

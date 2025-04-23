import React from 'react';

const Namecard1 = ({ name, email }) => (
  <div style={{
    position: 'relative',
    width: '320px',
    height: '160px',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    boxShadow: '0 0 5px #FFA726, 0 0 10px #FFA726, 0 0 20px #FFA726, 0 0 40px #FFA726',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  }}>
    {/* Floral corner accents */}
    <span style={{position:'absolute',top:'8px',left:'8px',fontSize:'24px',opacity:0.6}}>🌺</span>
    <span style={{position:'absolute',top:'8px',right:'8px',fontSize:'24px',opacity:0.6}}>🌺</span>
    <span style={{position:'absolute',bottom:'8px',left:'8px',fontSize:'24px',opacity:0.6}}>🌺</span>
    <span style={{position:'absolute',bottom:'8px',right:'8px',fontSize:'24px',opacity:0.6}}>🌺</span>

    <h2 style={{margin:0,color:'#e65100'}}>{name}</h2>
    <p style={{margin:'4px 0',color:'#5d4037'}}>{email}</p>
  </div>
);

export default Namecard1;

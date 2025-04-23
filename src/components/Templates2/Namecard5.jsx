import React from 'react';

const Namecard5 = ({ name, email }) => (
  <div style={{
    position: 'relative',
    width: '320px',
    height: '160px',
    background: 'rgba(240, 240, 240, 0.15)',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(240, 240, 240, 0.3)'
  }}>
    {/* Heart decorations */}
    <span style={{position:'absolute',top:'8px',left:'8px',fontSize:'24px',opacity:0.7}}>❤︎</span>
    <span style={{position:'absolute',top:'8px',right:'8px',fontSize:'24px',opacity:0.7}}>❤︎</span>
    <span style={{position:'absolute',bottom:'8px',left:'8px',fontSize:'24px',opacity:0.7}}>❤︎</span>
    <span style={{position:'absolute',bottom:'8px',right:'8px',fontSize:'24px',opacity:0.7}}>❤︎</span>

    <h2 style={{margin:0,color:'#ad1457'}}>{name}</h2>
    <p style={{margin:'4px 0',color:'#880e4f'}}>{email}</p>
  </div>
);

export default Namecard5;

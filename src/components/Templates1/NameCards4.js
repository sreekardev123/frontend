import React from 'react';

const NameCards4 = ({ name, email }) => (
  <div style={{
    position: 'relative',
    width: '300px',
    height: '140px',
    backgroundColor: '#f0f9e8',
    border: '2px solid #82e0aa',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {/* Vine decorations */}
    <span style={{ position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', fontSize: '20px', opacity: 0.6 }}>🍃</span>
    <span style={{ position: 'absolute', bottom: '6px', left: '50%', transform: 'translateX(-50%)', fontSize: '20px', opacity: 0.6 }}>🍃</span>
    <h3 style={{ margin: 0, color: '#27ae60' }}>{name}</h3>
    <p style={{ margin: '4px 0', fontSize: '14px', color: '#145a32' }}>{email}</p>
  </div>
);

export default NameCards4;

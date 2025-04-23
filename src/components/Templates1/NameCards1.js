import React from 'react';

const NameCards1 = ({ name, email }) => (
  <div style={{
    position: 'relative',
    width: '300px',
    height: '140px',
    backgroundColor: '#fdebd0',
    border: '2px dashed #e67e22',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {/* Floral decorations */}
    <span style={{ position: 'absolute', top: '5px', left: '5px', fontSize: '18px', opacity: 0.7 }}>🌸</span>
    <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '18px', opacity: 0.7 }}>🌸</span>
    <span style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '18px', opacity: 0.7 }}>🌸</span>
    <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '18px', opacity: 0.7 }}>🌸</span>
    <h3 style={{ margin: 0, color: '#e67e22' }}>{name}</h3>
    <p style={{ margin: '4px 0', fontSize: '14px', color: '#34495e' }}>{email}</p>
  </div>
);

export default NameCards1;

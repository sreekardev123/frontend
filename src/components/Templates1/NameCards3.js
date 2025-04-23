import React from 'react';

const NameCards3 = ({ name, email }) => (
  <div style={{
    position: 'relative',
    width: '300px',
    height: '140px',
    backgroundColor: '#ebf5fb',
    border: '2px dashed #85c1e9',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {/* Star decorations */}
    <span style={{ position: 'absolute', top: '5px', left: '5px', fontSize: '18px', opacity: 0.7 }}>✨</span>
    <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '18px', opacity: 0.7 }}>✨</span>
    <span style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '18px', opacity: 0.7 }}>✨</span>
    <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '18px', opacity: 0.7 }}>✨</span>
    <h3 style={{ margin: 0, color: '#2e86c1' }}>{name}</h3>
    <p style={{ margin: '4px 0', fontSize: '14px', color: '#1b4f72' }}>{email}</p>
  </div>
);

export default NameCards3;

import React from 'react';

const NameCards5 = ({ name, email }) => (
  <div style={{
    position: 'relative',
    width: '300px',
    height: '140px',
    backgroundColor: '#fbe4f9',
    border: '2px solid #c39bd3',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {/* Heart decorations */}
    <span style={{ position: 'absolute', top: '5px', left: '5px', fontSize: '18px', opacity: 0.7 }}>❤️</span>
    <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '18px', opacity: 0.7 }}>❤️</span>
    <span style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '18px', opacity: 0.7 }}>❤️</span>
    <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '18px', opacity: 0.7 }}>❤️</span>
    <h3 style={{ margin: 0, color: '#8e44ad' }}>{name}</h3>
    <p style={{ margin: '4px 0', fontSize: '14px', color: '#4a235a' }}>{email}</p>
  </div>
);

export default NameCards5;

import React from 'react';

const NameCardOne = ({ fullName, jobTitle, company, email, phone, website, logo }) => (
  <div style={{
    position: 'relative',
    width: '350px',
    height: '200px',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}>
    {/* Decorative flowers at corners */}
    <span style={{ position: 'absolute', top: '5px', left: '5px', fontSize: '20px', opacity: 0.7 }}>🌸</span>
    <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '20px', opacity: 0.7 }}>🌸</span>
    <span style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '20px', opacity: 0.7 }}>🌸</span>
    <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '20px', opacity: 0.7 }}>🌸</span>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {logo && (
        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }} />
      )}
      <div>
        <h2 style={{ margin: 0 }}>{fullName}</h2>
        <h4 style={{ margin: 0, fontWeight: 'normal', color: '#bdc3c7' }}>{jobTitle}</h4>
      </div>
    </div>
    <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
      <p style={{ margin: '4px 0' }}>{company}</p>
      <p style={{ margin: '4px 0' }}>{email}</p>
      <p style={{ margin: '4px 0' }}>{phone}</p>
      {website && <p style={{ margin: '4px 0' }}>{website}</p>}
    </div>
  </div>
);

export default NameCardOne; 
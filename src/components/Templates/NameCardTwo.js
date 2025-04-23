import React from 'react';

const NameCardTwo = ({ fullName, jobTitle, company, email, phone, website, logo }) => (
  <div style={{
    position: 'relative',
    width: '350px',
    height: '200px',
    backgroundColor: '#ffffff',
    color: '#2c3e50',
    border: '2px solid #2c3e50',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    {/* Decorative chains at corners */}
    <span style={{ position: 'absolute', top: '5px', left: '5px', fontSize: '20px', opacity: 0.6 }}>⛓️</span>
    <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '20px', opacity: 0.6 }}>⛓️</span>
    <span style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '20px', opacity: 0.6 }}>⛓️</span>
    <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '20px', opacity: 0.6 }}>⛓️</span>
    <div>
      <h2 style={{ margin: 0 }}>{fullName}</h2>
      <h4 style={{ margin: '4px 0', fontWeight: 'normal' }}>{jobTitle} at {company}</h4>
      <p style={{ margin: '4px 0' }}>{email}</p>
      <p style={{ margin: '4px 0' }}>{phone}</p>
      {website && <p style={{ margin: '4px 0' }}>{website}</p>}
    </div>
    {logo && <img src={logo} alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />}
  </div>
);

export default NameCardTwo; 
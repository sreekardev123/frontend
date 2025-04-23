import React from 'react';

const NameCardThree = ({ fullName, jobTitle, company, email, phone, website, logo }) => (
  <div style={{
    position: 'relative',
    width: '350px',
    height: '200px',
    borderRadius: '8px',
    border: '2px solid #2980b9',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  }}>
    {/* Decorative stars at corners */}
    <span style={{ position: 'absolute', top: '5px', left: '5px', fontSize: '18px', opacity: 0.7 }}>✨</span>
    <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '18px', opacity: 0.7 }}>✨</span>
    <span style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '18px', opacity: 0.7 }}>✨</span>
    <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '18px', opacity: 0.7 }}>✨</span>
    <div style={{
      backgroundColor: '#2980b9',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 10px',
      color: '#fff'
    }}>
      <h3 style={{ margin: 0, fontSize: '18px' }}>{fullName}</h3>
      {logo && <img src={logo} alt="Logo" style={{ height: '30px', width: '30px' }} />}
    </div>
    <div style={{ padding: '10px', flex: 1, fontSize: '14px', lineHeight: '1.4' }}>
      <p style={{ margin: '4px 0', fontWeight: 'bold' }}>{jobTitle} @ {company}</p>
      <p style={{ margin: '4px 0' }}>{email} | {phone}</p>
      {website && <p style={{ margin: '4px 0', color: '#2980b9' }}>{website}</p>}
    </div>
  </div>
);

export default NameCardThree; 
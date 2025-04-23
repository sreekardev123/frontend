import React from 'react';

const NameCardFive = ({ fullName, jobTitle, company, email, phone, website, logo }) => (
  <div style={{
    position: 'relative',
    width: '350px',
    height: '200px',
    display: 'flex',
    overflow: 'hidden',
    borderRadius: '8px',
    border: '2px solid #27ae60'
  }}>
    {/* Decorative hearts at corners */}
    <span style={{ position: 'absolute', top: '5px', left: '5px', fontSize: '20px', opacity: 0.7 }}>💖</span>
    <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '20px', opacity: 0.7 }}>💖</span>
    <span style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '20px', opacity: 0.7 }}>💖</span>
    <span style={{ position: 'absolute', bottom: '5px', right: '5px', fontSize: '20px', opacity: 0.7 }}>💖</span>
    {/* Left accent stripe with company name */}
    <div style={{
      backgroundColor: '#2ecc71',
      width: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <span style={{
        transform: 'rotate(-90deg)',
        color: '#fff',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        {company}
      </span>
    </div>
    {/* Main content */}
    <div style={{ padding: '20px', flex: 1, position: 'relative' }}>
      {logo && (
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '40px',
            height: '40px',
            position: 'absolute',
            top: '20px',
            right: '20px',
            objectFit: 'contain'
          }}
        />
      )}
      <h2 style={{ margin: '0' }}>{fullName}</h2>
      <h4 style={{ margin: '4px 0', color: '#27ae60' }}>{jobTitle}</h4>
      <p style={{ margin: '4px 0' }}>{email}</p>
      <p style={{ margin: '4px 0' }}>{phone}</p>
      {website && <p style={{ margin: '4px 0' }}>{website}</p>}
    </div>
  </div>
);

export default NameCardFive; 
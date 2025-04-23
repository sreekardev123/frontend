import React from 'react';

const NameCardFour = ({ fullName, jobTitle, company, email, phone, website, logo }) => (
  <div style={{
    position: 'relative',
    width: '350px',
    height: '200px',
    backgroundColor: '#f8e9f1',
    border: '2px solid #e84393',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}>
    {/* Decorative vines at top and bottom */}
    <span style={{ position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', fontSize: '20px', opacity: 0.6 }}>🍃</span>
    <span style={{ position: 'absolute', bottom: '6px', left: '50%', transform: 'translateX(-50%)', fontSize: '20px', opacity: 0.6 }}>🍃</span>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h2 style={{ margin: 0, color: '#e84393' }}>{fullName}</h2>
        <h4 style={{ margin: '4px 0', fontWeight: 'normal', color: '#fd79a8' }}>{jobTitle}</h4>
      </div>
      {logo && (
        <img
          src={logo}
          alt="Logo"
          style={{ width: '50px', height: '50px', borderRadius: '4px' }}
        />
      )}
    </div>
    <div style={{ fontSize: '14px', lineHeight: '1.4', color: '#2d3436' }}>
      <p style={{ margin: '4px 0', fontWeight: 'bold' }}>{company}</p>
      <p style={{ margin: '4px 0' }}>{email}</p>
      <p style={{ margin: '4px 0' }}>{phone}</p>
      {website && <p style={{ margin: '4px 0' }}>{website}</p>}
    </div>
  </div>
);

export default NameCardFour; 
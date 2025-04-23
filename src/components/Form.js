// import React, { useState } from 'react';

// const Form = ({ onSubmit }) => {
//   const [fullName, setFullName] = useState('');
//   const [jobTitle, setJobTitle] = useState('');
//   const [company, setCompany] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [website, setWebsite] = useState('');
//   const [logoPreview, setLogoPreview] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ fullName, jobTitle, company, email, phone, website, logo: logoPreview });
//   };

//   const handleLogoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setLogoPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={styles.form}>
//       <div>
//         <label>Full Name:</label>
//         <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
//       </div>
//       <div>
//         <label>Job Title:</label>
//         <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
//       </div>
//       <div>
//         <label>Company:</label>
//         <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label>Phone:</label>
//         <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//       </div>
//       <div>
//         <label>Website (optional):</label>
//         <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} />
//       </div>
//       <div>
//         <label>Logo (photo/company):</label>
//         <input type="file" accept="image/*" onChange={handleLogoChange} />
//         {logoPreview && <img src={logoPreview} alt="Logo Preview" style={{ maxWidth: '100px', marginTop: '10px' }} />}
//       </div>
//       <button type="submit">Generate Name Cards</button>
//     </form>
//   );
// };

// const styles = {
//   form: {
//     maxWidth: '400px',
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem',
//   },
// };

// export default Form; 

//lasercutshot

import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [logoPreview, setLogoPreview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fullName, jobTitle, company, email, phone, website, logo: logoPreview });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.card}>
      <h2 style={styles.title}>Create Name Card</h2>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Full Name</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Job Title</label>
        <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Company</label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Phone</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Website (optional)</label>
        <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Logo (photo/company)</label>
        <input type="file" accept="image/*" onChange={handleLogoChange} style={styles.input} />
        {logoPreview && <img src={logoPreview} alt="Logo Preview" style={styles.logo} />}
      </div>
      <button type="submit" style={styles.button}>Generate Name Cards</button>
    </form>
  );
};

const styles = {
  card: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '2rem',
    borderRadius: '15px',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.3rem',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '0.7rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  logo: {
    maxWidth: '100px',
    marginTop: '10px',
    borderRadius: '8px',
  },
  button: {
    padding: '0.8rem',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background 0.3s ease',
  },
};

export default Form;

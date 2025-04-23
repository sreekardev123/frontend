import React, { useState } from 'react';

//ss name plates

const Form1 = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Name is required.';
    else if (name.trim().length < 2) errs.name = 'Name must be at least 2 characters.';
    if (!email.trim()) errs.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Enter a valid email.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ name: name.trim(), email: email.trim() });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} noValidate>
      <div style={styles.field}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        {errors.name && <span style={styles.error}>{errors.name}</span>}
      </div>
      <div style={styles.field}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}
      </div>
      <button type="submit" style={styles.button}>Generate Cards</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  field: { display: 'flex', flexDirection: 'column' },
  label: { marginBottom: '4px', fontWeight: 'bold' },
  input: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  error: { color: 'red', fontSize: '12px', marginTop: '4px' },
  button: { padding: '10px 20px', backgroundColor: '#2c3e50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default Form1;

import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been submitted.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd'
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>Contact Us</h1>
      
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button 
          type="submit" 
          style={buttonStyle}
          onMouseOver={e => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={e => e.target.style.backgroundColor = '#3498db'}
        >
          Send Message
        </button>
      </form>
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h3>Other Contact Information</h3>
        <p>Email: contact@ourcompany.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Contact;

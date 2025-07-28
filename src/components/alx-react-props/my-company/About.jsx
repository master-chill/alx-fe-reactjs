function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db' }}>About Us</h1>
      <p style={{ lineHeight: '1.6' }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
      <div style={{ 
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#e8f4f8',
        borderRadius: '5px'
      }}>
        <h3>Our Mission</h3>
        <p>To empower businesses through innovative solutions and expert guidance.</p>
      </div>
    </div>
  );
}

export default About;

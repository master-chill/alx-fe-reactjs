function Services() {
  const serviceStyle = {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '5px',
    borderLeft: '4px solid #3498db'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#2c3e50' }}>Our Services</h1>
      <div style={serviceStyle}>
        <h3>Technology Consulting</h3>
        <p>Expert advice on implementing cutting-edge technology solutions.</p>
      </div>
      <div style={serviceStyle}>
        <h3>Market Analysis</h3>
        <p>Comprehensive market research and competitive intelligence.</p>
      </div>
      <div style={serviceStyle}>
        <h3>Product Development</h3>
        <p>End-to-end product design and development services.</p>
      </div>
      <div style={serviceStyle}>
        <h3>Digital Marketing</h3>
        <p>Strategic online marketing campaigns to boost your brand.</p>
      </div>
    </div>
  );
}

export default Services;

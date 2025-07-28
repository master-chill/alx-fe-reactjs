function UserProfile(props) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '15px',
      margin: '15px 0',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#2c3e50', 
        marginTop: 0,
        borderBottom: '2px solid #3498db',
        paddingBottom: '5px'
      }}>
        {props.name}
      </h2>
      <p style={{ fontSize: '16px', margin: '8px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#e74c3c' }}>{props.age}</span>
      </p>
      <p style={{ 
        fontSize: '14px', 
        color: '#7f8c8d',
        lineHeight: '1.5',
        fontStyle: 'italic'
      }}>
        {props.bio}
      </p>
    </div>
  );
}
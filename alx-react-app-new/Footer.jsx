function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      textAlign: 'center',
      padding: '15px',
      position: 'relative',
      bottom: 0,
      width: '100%',
      marginTop: '20px'
    }}>
      <p style={{ margin: '5px 0' }}>
        &copy; {new Date().getFullYear()} My Travel Journal
      </p>
      <p style={{ 
        fontSize: '0.9em',
        color: '#bdc3c7',
        margin: '5px 0'
      }}>
        Exploring the world one city at a time
      </p>
    </footer>
  );
}

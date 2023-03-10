import React from 'react';

const styles = {
    card: {
      margin: 20,
      background: '#e8eaf6',
    },
    heading: {
      background: '#3f51b5',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
  };

function Home() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Welcome to Katrina's Web Development Portfolio</div>
      <div style={styles.content}>`Created with React`</div>
    </div>
  );
}

export default Home;
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

function AboutMe() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Katrina's Portfolio</div>
      <div style={styles.content}>
      `I am a current student enrolled in the Case Western Reserve University
      Fullstack Web Development bootcamp. Prior to my career change, I was a
      pastry chef and wedding cake decorator and was classically trained in 
      French pastries via the French Pastry School in Chicago. I compete with
      my horse in show jumping on weekends and tend to gardens during the spring
      and summer seasons.
      
      In the navbar, you will be able to see some of the work I have done while
      in the bootcamp. You will also find the best way to contact me and can view
      my full CV.
      
      Thanks for visitng!`
      </div>
    </div>
  );
}

export default AboutMe;
import React from 'react';
import OfficeHeader from '../components/HeroSection';
import officeBg from '../asserts/images/office1.jpg'; 

export default function Home() {
  const homeStyle = {
    height: '100vh',
    width: '100%', 
    backgroundImage: `url(${officeBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    position: 'relative',
    
  };

  return (
    <div style={homeStyle}>
      <OfficeHeader />
    </div>
  );
}

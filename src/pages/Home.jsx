import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e">
        <h1>Codeswitch <br />Studio</h1>
        <h2>A selection of projects</h2>
      </Hero>

    </div>
  );
}

export default Home;

import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://codeswitchstudio.com/indicodes/images/hackamudra4.png">
        <h1 id='biggest'>Indicodeswitch</h1>
        <h2 id='bigger'>A selection of projects</h2>
      </Hero>

    </div>
  );
}

export default Home;

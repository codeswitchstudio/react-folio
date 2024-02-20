import React from 'react';
import Hero from '../components/Hero';
import '../components/Hero/style.css';



function Home() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1630086444439-97f3e422cc13">
        <h1 id='biggest'>Codeswitch Studio</h1>
        <h2 id='bigger'>Your digital projects. Customised with care</h2>
      </Hero>
    <section className="container py-9 lg:py-36">
      <div className="row">
      <div className="col">Built with</div>
        <div className="col"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img></div>  
        <div className="col"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img></div>  
        <div className="col"><img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"></img></div>
        <div className="col"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img></div>
        <div className="col"><img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"></img></div>  
        <div className="col"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></img></div>        
        <div className="col"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img></div>
        <div className="col"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"></img></div>
        <div className="col"> <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"></img> </div>
        <div className="col"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img></div>  

      </div>  





    </section>  
    </div>




  );
}

export default Home;

// import React from 'react';
import Container from '../components/Container';
import '../components/Card/style.css';

function Discover() {
  return (
    <Container style={{ marginTop: 30 }}>

    <div className="container-fluid content">
      {/* <h2 className="sectionHeading">Here's my work</h2>  */}
    <div className="row"id="work">
        {/* <!-- Card 1 --> */}
        <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-dark">
            <a href="https://code0em.github.io/lingua-sonnet/">
            <div className="card-img-top-01"></div>  
            </a>
            <div className="card-body">
              <h5 className="card-title">Lingua Sonnet</h5>
              <p className="card-text">
              LinguaSonnet is a web application which seamlessly combines word learning with poetry, allowing users to access word definitions and examples of the word in a poem.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End card 1 --> */}

        {/* <!-- Card 2 --> */}
        <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-dark">
            <a href="https://codeswitchstudio.github.io/horiseon-code-refactor/">
            <div className="card-img-top-02"></div></a>
            <div className="card-body">
              <h5 className="card-title">Horiseon</h5>
              <p className="card-text">
                My first bootcamp project. This was done by refactoring code to make a website that meets accessibility standards using semantic HTML elements, a logical structure, descriptive alt texts.
              </p>
              
            </div>
          </div>
        </div>
        {/* <!-- End card 2 -->

        <!-- Card 3 --> */}
        <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-dark">
            <a href="https://codeswitchstudio.com/pep/">
            <div className="card-img-top-03"></div></a>
            <div className="card-body">
              <h5 className="card-title">Pep Manalang, artist</h5>
              <p className="card-text">
                A landing page for an abstract artist based in Fairbanks, Alaska. Made with Wordpress. This was done back in the day. as in before the bootcamp happened. 
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End card 3 -->

        <!-- Card 4 --> */}
        <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-dark">
            <a href="https://codeswitchstudio.com/cajipe-endaya"> 
            <div className="card-img-top-04"></div></a>
            <div className="card-body">
              <h5 className="card-title">Cajipe Endaya, landing page</h5>
              <p className="card-text">
                Landing page includes a CV, Press coverage page, and instagram embedding for the gallery. Made with code learned from SuperHi.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End card 4 -->

      <!-- Card 5 --> */}
        <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-dark">
            <a href="https://www.facebook.com/DevelopmentPraxis"> 
            <div className="card-img-top-05"></div></a>
            <div className="card-body">
              <h5 className="card-title">DevPrax Brand Assets</h5>
              <p className="card-text">
              Development Praxis visual identity and assets featuring a vivid and clean logo to stand out in a sea of of social media posts.
              </p>

            </div>
          </div>
        </div>
        {/* <!-- End card 5 -->  

      <!-- Card 6 --> */}
      <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-dark">
          <a href="https://thecodingtrain.com/showcase/author/indicodeswitch">
            <div className="card-img-top-06"></div></a>
          <div className="card-body">
            <h5 className="card-title">Creative Coding</h5>
            <p className="card-text">
            Experimental projects made from coding along with Dan Shiffman of The Coding Train. Also featured in his passenger showcase.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End card 6 --> 


    <!-- End cards --> */}
      </div>
    </div>
  </Container>
  );
}

export default Discover;

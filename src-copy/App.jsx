import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container-fluid">
       <Router>
        <Navbar />
        {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Contact />} />
      </Routes>
      </Router>
        <Jumbotron />
        <Card />
        <Footer />
      

    </div>
    
  );
}

export default App;



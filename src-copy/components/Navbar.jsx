import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Codeswitchstudio
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/link">
                About
              </Link>
            </li>
 
            <li className="nav-item">
              <Link className="nav-link" to="/link">
                Projects
              </Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link" to="/link">
                Contact
              </Link>
            </li>

          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

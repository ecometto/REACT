import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close the navigation bar when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">HOME</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsNavOpen(!isNavOpen)} // Toggle the navigation bar when the toggle button is clicked
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/tasks" onClick={handleNavLinkClick}>TaskApp</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacts" onClick={handleNavLinkClick}>Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tinder" onClick={handleNavLinkClick}>Tinder</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

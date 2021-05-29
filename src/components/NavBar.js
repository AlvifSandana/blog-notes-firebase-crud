import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      // <nav className="navbar navbar-light navbar-expand-md navigation-clean">
      //   <div className="container">
      //     <div className="collapse navbar-collapse" id="navcol-1">
      //       <ul className="navbar-nav ms-auto me-auto">
      //         <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
      //         <li className="nav-item"><a href="/notes" className="nav-link">Notes</a></li>
      //         <li className="nav-item"><a href="/programming" className="nav-link">Programming</a></li>
      //         <li className="nav-item"><a href="/linux" className="nav-link">Linux</a></li>
      //         <li className="nav-item"><a href="https://alvifsandana.me" className="nav-link">About Me</a></li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean">
          <div className="container">
            <div className="navbar-expand-md d-inline-block" id="navcol-1">
              <ul className="navbar-nav ms-auto me-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/notes" className="nav-link">Notes</Link>
                </li>
                <li className="nav-item">
                  <Link to="/programming" className="nav-link">Programming</Link>
                </li>
                <li className="nav-item">
                  <Link to="/linux" className="nav-link">Linux</Link>
                </li>
                <li className="nav-item">
                  <a href="https://alvifsandana.me" className="nav-link">About Me</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default NavBar;
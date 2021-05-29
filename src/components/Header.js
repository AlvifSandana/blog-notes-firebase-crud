import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  inputstyle = {
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'none',
    width: 150,
    height: 20
  };

  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-md">
        <div className="container-fluid"><a className="navbar-brand" href="/">Alvif Sandana M.</a>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="nbdrop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Manage
                </a>
                <ul className="dropdown-menu" aria-labelledby="nbdrop">
                  <li><a className="dropdown-item" href="/admin/add">New Note</a></li>
                  <li><a className="dropdown-item" href="/admin/manage">Manage Notes</a></li>
                </ul>
              </li>
            </ul>
          </div>
          </div>
      </nav>
    );
  }
}

export default Header;

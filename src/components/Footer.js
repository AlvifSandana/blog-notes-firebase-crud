import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-basic">
        <div className="social" style={{paddingBottom: 10}}>
          <a href="https://www.instagram.com/alvifsandana23/"><i className="icon ion-social-instagram"></i></a>
          <a href="https://github.com/AlvifSandana"><i className="icon ion-social-github"></i></a>
          <a href="https://twitter.com/siDandott"><i className="icon ion-social-twitter"></i></a>
          <a href="https://facebook.com/alvifsandanamahardika"><i className="icon ion-social-facebook"></i></a>
        </div>
        <p className="copyright">Made with ❤ by Alvif Sandana Mahardika</p>
      </footer>
    );
  }
}

export default Footer;

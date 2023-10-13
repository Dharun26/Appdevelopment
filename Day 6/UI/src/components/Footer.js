import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} TNRTC. All Rights Reserved.</p>
        <Link to='/privacy' className='link-light'>privacy policy</Link>
        <br></br><Link to='/terms' className='link-light'>Terms&Conditions</Link><br></br>
        <Link to='/faq' className='link-light'>FAQ's</Link>

      </div>
    </footer>
  );
}

export default Footer;
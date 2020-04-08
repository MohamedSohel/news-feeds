import React from 'react';

const Footer = () => {
  return(
    <footer className="footer-area">
      <div className="bottom-footer-area">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with
                <i className="fa fa-heart-o" aria-hidden="true" />
                by
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="aboutus.html">About</a></li>
                            <li><a href="#">Sites</a></li>
                            <li><a href="contactus.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-5 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><span className="fa fa-instagram"></span></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><span className="fa fa-facebook"></span></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><span className="fa fa-twitter"></span></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><span className="fa fa-youtube"></span></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" class="btn btn-link" href="tel:+12065551234"><span className="fa fa-phone fa-lg text-primary"/> 1-206-555-1234 </a><br />
                        <a role="button" className="btn btn-link" href="mailto:campsites@nucamp.co"><span className="fa fa-envelope fa-lg text-primary" /> campsites@nucamp.co </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
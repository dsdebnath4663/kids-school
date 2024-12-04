import React from 'react';

// Import images for the footer
import classes1 from './assets/classes-1.jpg';
import classes2 from './assets/classes-2.jpg';
import classes3 from './assets/classes-3.jpg';
import classes4 from './assets/classes-4.jpg';
import classes5 from './assets/classes-5.jpg';
import classes6 from './assets/classes-6.jpg';

const Footer = () => {
  // Footer data
  const contactInfo = {
    address: '123 Street, New York, USA',
    phone: '+012 345 67890',
    email: 'info@example.com',
    socialLinks: [
      { platform: 'Twitter', icon: 'fab fa-twitter', url: '#' },
      { platform: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
      { platform: 'YouTube', icon: 'fab fa-youtube', url: '#' },
      { platform: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
    ]
  };

  const quickLinks = [
    { label: 'About Us', url: '#' },
    { label: 'Contact Us', url: '#' },
    { label: 'Our Services', url: '#' },
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms & Condition', url: '#' }
  ];

  const photoGallery = [classes1, classes2, classes3, classes4, classes5, classes6];

  const newsletter = {
    description: 'Dolor amet sit justo amet elitr clita ipsum elitr est.',
  };

  const footerMenu = [
    { label: 'Home', url: '#' },
    { label: 'Cookies', url: '#' },
    { label: 'Help', url: '#' },
    { label: 'FQAs', url: '#' }
  ];

  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          {/* Get In Touch */}
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>{contactInfo.address}
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>{contactInfo.phone}
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>{contactInfo.email}
            </p>
            <div className="d-flex pt-2">
              {contactInfo.socialLinks.map((link, index) => (
                <a key={index} className="btn btn-outline-light btn-social" href={link.url}>
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Quick Links</h3>
            {quickLinks.map((link, index) => (
              <a key={index} className="btn btn-link text-white-50" href={link.url}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Photo Gallery */}
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Photo Gallery</h3>
            <div className="row g-2 pt-2">
              {photoGallery.map((image, index) => (
                <div key={index} className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src={image} alt={`Gallery ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Newsletter</h3>
            <p>{newsletter.description}</p>
            <div className="position-relative mx-auto">
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{' '}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Rights Reserved. Designed Using{' '}
              <a className="border-bottom" href="">
                Bootstrap
              </a>
              <br />
              Distributed By: <a className="border-bottom" href="" target="_blank" rel="noopener noreferrer">
                ABC
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                {footerMenu.map((item, index) => (
                  <a key={index} href={item.url}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

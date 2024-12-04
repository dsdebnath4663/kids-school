import React from 'react';

// Define the navigation items (including the dropdown items)
const navItems = [
  { name: 'Home', link: '', isActive: true },
  { name: 'About Us', link: '', isActive: false },
  { name: 'Classes', link: '', isActive: false },
  {
    name: 'Pages',
    link: '#',
    isActive: false,
    dropdown: [
      { name: 'School Facilities', link: '' },
      { name: 'Popular Teachers', link: '' },
      { name: 'Become A Teacher', link: '' },
      { name: 'Make Appointment', link: '' },
      { name: 'Testimonial', link: '' },
      { name: '404 Error', link: '' },
    ],
    isDropdown: true,
  },
  { name: 'Contact Us', link: '', isActive: false },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <a href="" className="navbar-brand">
        <h1 className="m-0 text-primary">
          <i className="fa fa-book-reader me-3"></i>Holy Child School
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          {navItems.map((item, index) => (
            item.isDropdown ? (
              <div className="nav-item dropdown" key={index}>
                <a
                  href={item.link}
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {item.name}
                </a>
                <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                  {item.dropdown.map((dropdownItem, i) => (
                    <a href={dropdownItem.link} className="dropdown-item" key={i}>
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                href={item.link}
                className={`nav-item nav-link ${item.isActive ? 'active' : ''}`}
                key={index}
              >
                {item.name}
              </a>
            )
          ))}
        </div>
        <a href="" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
          Join Us<i className="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

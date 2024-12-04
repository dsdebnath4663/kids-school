import React from 'react';
import team1 from "./assets/team-1.jpg";
import team2 from "./assets/team-2.jpg";
import team3 from "./assets/team-3.jpg";

// Sample data for teachers
const teachers = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Math Teacher',
    image: team1,
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'English Teacher',
    image: team2,
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 3,
    name: 'Emily Johnson',
    designation: 'Science Teacher',
    image: team3,
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
];

const PopularTeachers = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-3">Popular Teachers</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
            vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        <div className="row g-4">
          {teachers.map((teacher, index) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" key={teacher.id} data-wow-delay={`${0.1 * (index + 1)}s`}>
              <div className="team-item position-relative">
                <img
                  className="img-fluid rounded-circle w-75"
                  src={teacher.image}
                  alt={teacher.name}
                />
                <div className="team-text">
                  <h3>{teacher.name}</h3>
                  <p>{teacher.designation}</p>
                  <div className="d-flex align-items-center">
                    {teacher.socialLinks.facebook && (
                      <a className="btn btn-square btn-primary mx-1" href={teacher.socialLinks.facebook}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    )}
                    {teacher.socialLinks.twitter && (
                      <a className="btn btn-square btn-primary mx-1" href={teacher.socialLinks.twitter}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {teacher.socialLinks.instagram && (
                      <a className="btn btn-square btn-primary mx-1" href={teacher.socialLinks.instagram}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTeachers;

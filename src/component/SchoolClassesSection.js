import React from 'react';
import classes1 from "./assets/classes-1.jpg";
import classes2 from "./assets/classes-2.jpg";
import classes3 from "./assets/classes-3.jpg";
import classes4 from "./assets/classes-4.jpg";
import classes5 from "./assets/classes-5.jpg";
import classes6 from "./assets/classes-6.jpg";
import user from "./assets/user.jpg"; 

// Sample data (you can replace this with data from an API or state)
const classData = [
  {
    id: 1,
    name: 'Art & Drawing',
    image: classes1,
    teacher: 'Jhon Doe',
    age: '3-5 Years',
    time: '9-10 AM',
    capacity: '30 Kids',
    price: '$99',
  },
  {
    id: 2,
    name: 'Color Management',
    image: classes2,
    teacher: 'Jhon Doe',
    age: '3-5 Years',
    time: '9-10 AM',
    capacity: '30 Kids',
    price: '$99',
  },
  {
    id: 3,
    name: 'Athletic & Dance',
    image: classes3,
    teacher: 'Jhon Doe',
    age: '3-5 Years',
    time: '9-10 AM',
    capacity: '30 Kids',
    price: '$99',
  },
  {
    id: 4,
    name: 'Language & Speaking',
    image: classes4,
    teacher: 'Jhon Doe',
    age: '3-5 Years',
    time: '9-10 AM',
    capacity: '30 Kids',
    price: '$99',
  },
  {
    id: 5,
    name: 'Religion & History',
    image: classes5,
    teacher: 'Jhon Doe',
    age: '3-5 Years',
    time: '9-10 AM',
    capacity: '30 Kids',
    price: '$99',
  },
  {
    id: 6,
    name: 'General Knowledge',
    image: classes6,
    teacher: 'Jhon Doe',
    age: '3-5 Years',
    time: '9-10 AM',
    capacity: '30 Kids',
    price: '$99',
  },
];

const SchoolClassesSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            maxWidth: '600px',
            animationDelay: '0.1s',
            animationName: 'none',
          }}
        >
          <h1 className="mb-3">School Classes</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
            dolor duo.
          </p>
        </div>

        <div className="row g-4">
          {classData.map((classItem, index) => (
            <div
              key={classItem.id}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 * (index + 1)}s`}
              style={{
                animationDelay: `${0.1 * (index + 1)}s`,
                animationName: 'none',
              }}
            >
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={classItem.image}
                    alt={classItem.name}
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                    {classItem.name}
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src={user}
                        alt={classItem.teacher}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">{classItem.teacher}</h6>
                        <small>Teacher</small>
                      </div>
                    </div>
                    <span className="bg-primary text-white rounded-pill py-2 px-3">
                      {classItem.price}
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>{classItem.age}</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Time:</h6>
                        <small>{classItem.time}</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Capacity:</h6>
                        <small>{classItem.capacity}</small>
                      </div>
                    </div>
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

export default SchoolClassesSection;

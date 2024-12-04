import React from "react";

const CallToActionSection = ({ callTooAction }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                minHeight: "400px",
                animationDelay: "0.1s",
                animationName: "none",
              }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src="https://img.freepik.com/free-photo/school-teacher-students-working-with-globe_23-2147885314.jpg?t=st=1733326317~exp=1733329917~hmac=012a8d7b12a566d46e7e9ec317a2e90d721cf69f422ae1574ba94cd2aa4e54de&w=996"
                  style={{
                    objectFit: "cover",
                  }}
                  alt="Call to Action"
                />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">Become A Teacher</h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                  sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <a className="btn btn-primary py-3 px-5" href="">
                  Get Started Now
                  <i className="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;

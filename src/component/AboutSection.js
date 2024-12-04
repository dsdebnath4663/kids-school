import React from "react";

const AboutSection = ({ user, aboutOne, aboutTwo, aboutThree }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visibile",
              animationDelay: "0.1s",
              animationName: "none",
            }}
          >
            <h1 className="mb-4">
              Learn More About Our Work And Our Cultural Activities
            </h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <p className="mb-4">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
              stet est diam rebum amet diam ipsum. Clita clita labore, dolor
              duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore
              duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at
              dolor est vero nonumy magna.
            </p>
            <div className="row g-4 align-items-center">
              <div className="col-sm-6">
                <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                  Read More
                </a>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src=
                    "https://img.freepik.com/free-photo/group-children-lying-reading-grass-field_1150-3900.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>CEO &amp; Founder</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 about-img wow fadeInUp"
            data-wow-delay="0.5s"
            style={{
              visibility: "visibile",
              animationDelay: "0.5s",
              animationName: "none",
            }}
          >
            <div className="row">
              <div className="col-12 text-center">
                <img
                  className="img-fluid w-100 rounded-circle bg-light p-3"
                  src="https://img.freepik.com/free-photo/kids-having-fun-as-boy-scouts_23-2149657086.jpg?t=st=1733325558~exp=1733329158~hmac=b197fb38cddad0f122841b2bb1e9123b1301e366e62b366c85030268e5e1ebca&w=996"
                  alt="Learn More About Our Work And Our Cultural Activities
"
                />
              </div>
              <div
                className="col-6 text-start"
                style={{ marginTop: "-150px" }}
              >
                <img
                  className="img-fluid w-100 rounded-circle bg-light p-3"
                  src="https://img.freepik.com/free-photo/glad-boy-showing-his-artwork_1098-1460.jpg?t=st=1733325946~exp=1733329546~hmac=6132e4a8626a0fe63de898fb128e46596961801dc52b568b5d5cd98e60317f62&w=996"
                  alt=""
                />
              </div>
              <div
                className="col-6 text-end"
                style={{ marginTop: "-150px" }}
              >
                <img
                  className="img-fluid w-100 rounded-circle bg-light p-3"
                  src="https://img.freepik.com/free-photo/young-kids-making-diy-project-from-upcycled-materials_23-2149391103.jpg?t=st=1733325571~exp=1733329171~hmac=a3f7c93e7f521ca8c52a077c8efd7bb931f7a01434bcb63f65d0709e991087af&w=996"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;




const FirstCarouselItem = (testimonial ) => {
  // Array of carousel items
 
    return (
      <div className="item">
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src={testimonial.image} alt={testimonial.title} />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0, 0, 0, .2)' }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">{testimonial.title}</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">{testimonial.description}</p>
                  <a href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">
                    Learn More
                  </a>
                  <a href="#" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default FirstCarouselItem;

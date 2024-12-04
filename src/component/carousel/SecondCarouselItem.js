import React from 'react';


const SecondCarouselItem = (testimonial) => {

  return (

    <div className="testimonial-item bg-light rounded p-5">
      {/* <pre>{JSON.stringify(testimonial, null, 2)}</pre>  */}
      <p className="fs-5">{testimonial.quote} - This is a testimonial quote.</p>
      <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
        <img
          className="img-fluid flex-shrink-0 rounded-circle"
          src={testimonial.image || "https://via.placeholder.com/90"}  // Use passed imageUrl, fallback to placeholder
          alt={testimonial.clientName || "Client"}  // Fallback to "Client" if no name provided
          style={{ width: '90px', height: '90px' }}
        />
        <div className="ps-3">
          <h3 className="mb-1">{testimonial.clientName || 'Client Name'}</h3>
          <span>{testimonial.profession || 'Profession Removed'}</span>
        </div>
        <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
      </div>
    </div>
  );
}

export default SecondCarouselItem;

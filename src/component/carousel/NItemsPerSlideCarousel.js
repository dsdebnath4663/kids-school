import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Carousel, Container } from 'react-bootstrap';

function NItemsPerSlideCarousel({ itemsPerSlide = 4, colContent, testimonials, carouselId }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null); // Track the active button (next or prev)

  const handlePrevClick = () => {
    console.log("activeButton value before clicked ", activeButton)
    console.info("Set active button to `prev` when previous button is clicked")
    setActiveButton("prev");
    console.log("activeButton value after clicked ", activeButton)

  };

  const handleNextClick = () => {
    console.log("activeButton value before clicked ", activeButton)
    console.info("Set active button to `next` when previous button is clicked")
    setActiveButton("next"); // Set active button to "next" when next button is clicked
    console.log("activeButton value after clicked ", activeButton)
  };

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
    // console.log(`Selected slide: ${selectedIndex}`);
  };

  // Function to group testimonials dynamically
  const groupTestimonials = (testimonials, itemsPerSlide) => {
    const groups = [];
    for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
      const group = testimonials.slice(i, i + itemsPerSlide);
      groups.push(group);
    }
    return groups;
  };

  // Dynamically grouped testimonials
  const groupedTestimonials = groupTestimonials(testimonials, itemsPerSlide);

  // Calculate the grid size dynamically based on the number of items per slide
  const getColSize = (itemsPerSlide) => {
    // Check if running in a browser environment
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      // For mobile and small screens, always return 12 (full width, col size 1)
      // console.log("or mobile and small screens, always return 12 (full width, col size 1) ", 12)
      return 12;
    }

    // Validate itemsPerSlide for larger screens
    if (itemsPerSlide <= 0 || itemsPerSlide > 6) {
      // console.log("Error: itemsPerSlide must be greater than 0 and less than or equal to 6.", 12);
      return 12; // Default to full width for invalid values
    }
    // console.log("Calculate column size for larger screens", 12 / itemsPerSlide);
    return 12 / itemsPerSlide; // Calculate column size for larger screens
  };

  return (
    // <Container className='py-2'>
    //    <pre>{JSON.stringify(testimonials, null, 2)}</pre> 
    // </Container>
    <Carousel
      activeIndex={activeIndex} // Binding the activeIndex state to the Carousel
      onSelect={handleSelect} // Handling the selection of a new slide
      interval={5000} // Time interval in milliseconds for automatic slide transition
      controls={true} // Enabling the previous and next controls
      indicators={true} // Enabling the indicators (dots) below the carousel
      // pause="hover" // Pausing the carousel when the user hovers over it
      wrap={true} // Enabling wrap around (i.e., looping back to the first slide after the last one)
      touch={true} // Enabling touch gestures on mobile devices
      fade={false} // Disabling fade effect between slides (it will slide instead)
      slide={true} // Enabling sliding transition between slides
      prevIcon={
        <span
          onClick={handlePrevClick}
          className={`custom-icon    ${activeButton === "prev" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faArrowLeft} className='fontAwesomeIcon' />
        </span>
      } // Customizing the previous slide icon (left arrow)
      nextIcon={
        <span
          onClick={handleNextClick}
          className={`custom-icon ${activeButton === "next" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faArrowRight} className='fontAwesomeIcon' />
        </span>
      } // Customizing the next slide icon (right arrow)

      prevLabel="Go Back" // Label for the previous slide button
      nextLabel="Next Slide" // Label for the next slide button
      data-bs-theme="dark" // Setting the carousel theme to dark (Bootstrap 5 theme support)
      as="section" // Rendering the carousel as a <section> element (can be changed to any other element)
      // className="testimonial-carousel " // Adding a custom class for styling ${carouselId}
      className={`${carouselId}`}

    >
      {groupedTestimonials.map((group, index) => (
        <Carousel.Item key={index}>
          {/* <p>Dynamically calculated for medium and above `{getColSize(itemsPerSlide)}`</p> */}
          <Row>
            {group.map((testimonial) => (
              <Col
                md={getColSize(itemsPerSlide)}// Dynamically calculated for medium and above
                key={testimonial.id}              >
                {
                  colContent && typeof colContent === 'function' && colContent(testimonial)
                    ? colContent(testimonial)
                    : <p>No Column Content available</p>
                }
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default NItemsPerSlideCarousel;
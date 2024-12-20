import carouselOne from "./assets/photos/cute-schoolgirl-uniform-holding-notepads-classroom.jpg";
import carouselTwo from "./assets/photos/surprised-little-schoolboy-wearing-back-bag-headphones-holding-notebook-raising-pen-isolated-white.jpg";
// import carouselThree from "./assets/photos/school-children-dressed-uniform-have-fun-play-schoolyard.jpg";
import carouselFour from "./assets/photos/portrait-group-friends-hanging-out-outdoors-while-going-preschool-together.jpg";

import user from "./assets/user.jpg";
import aboutOne from "./assets/about-1.jpg";
import aboutTwo from "./assets/about-2.jpg";
import aboutThree from "./assets/about-3.jpg";
import callTooAction from "./assets/call-to-action.jpg";

import FacilitiesSection from "./FacilitiesSection";
import AboutSection from "./AboutSection";
import CallToActionSection from "./CallToActionSection";

import SchoolClassesSection from "./SchoolClassesSection.js";
import Navbar from "./Navbar.js";
import AppointmentForm from "./AppointmentForm.js";
import PopularTeachers from "./PopularTeachers.js";
import NItemsPerSlideCarousel from "../component/carousel/NItemsPerSlideCarousel.js";
import FirstCarouselItem from "./carousel/FirstCarouselItem.js";
import SecondCarouselItem from "./carousel/SecondCarouselItem.js";

import Footer from "./Footer.js";
import testimonial1 from "./assets/testimonial-1.jpg";
import testimonial2 from "./assets/testimonial-2.jpg";
import testimonial3 from "./assets/testimonial-3.jpg";
import testimonial4 from "./assets/testimonial-3.jpg";
import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
// import '../App.css'

function LandingPage() {
  // Initialize state variable for window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run only once when the component mounts

  // Logic to return column size based on window width
  const colSize = windowWidth <= 768 ? 1 : 2; // Example for mobile (full width) and larger screens

  console.log("Window width:", windowWidth);
  console.log("Column size:", colSize);

  // Array of carousel items
  const testimonials = [
    {
      image: carouselFour,
      title: "Building Strong Foundations for Lifelong Success",
      description:
        "We provide a solid foundation for learning with engaging, hands-on activities that stimulate curiosity and growth. ",
    },
    {
      image: carouselOne,
      title: "A Safe and Nurturing Environment for Your Child",
      description:
        "Our kindergarten provides a warm, welcoming atmosphere where every child can thrive. ",
    },
  ];
  const defaultTestimonials = [
    {
      id: 1,
      quote:
        "We are extremely proud of how well our son is performing at school. His teachers speak highly of his curiosity and dedication to learning. Keep shining, beta!",
      clientName: "Rajesh Kumar",
      profession: "Software Engineer",
      image: "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg",
    },
    {
      id: 2,
      quote:
        "Our daughter’s progress in school has been remarkable. She’s always eager to learn and improve, and it makes us so proud to see her excel. Keep up the hard work, beta!",
      clientName: "Priya Sharma",
      profession: "Doctor",
      image: "https://img.freepik.com/free-photo/front-view-man-ambulance-car_23-2149478476.jpg",
    },
    {
      id: 3,
      quote:
        "As parents, we couldn’t be more thrilled with our son’s academic achievements. His commitment to his studies and his desire to always improve are truly inspiring. We are proud of you, beta!",
      clientName: "Anjali Mehta",
      profession: "Teacher",
      image: "https://img.freepik.com/free-photo/close-up-portrait-woman-with-beautiful-hair-closed-eyes_23-2148286126.jpg",
    },
    {
      id: 4,
      quote:
        "Watching our daughter succeed in school has been one of the greatest joys of our lives. She’s hardworking, responsible, and always willing to go the extra mile. We couldn’t ask for more.",
      clientName: "Vikram Singh",
      profession: "Business Owner",
      image: "https://img.freepik.com/free-photo/little-red-riding-hood-forest-portrait_23-2149207387.jpg",
    },
  ];


  return (
    <div className="container-xxl bg-white p-0">
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center custom-spinner-container"
      >
        <div
          className="spinner-border text-primary custom-spinner"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      {/* <!-- Spinner End --> */}

      <Navbar />
      <NItemsPerSlideCarousel
        itemsPerSlide={1}
        colContent={FirstCarouselItem}
        testimonials={testimonials}
        carouselId="belowNavbarCarousel"
      />

      <FacilitiesSection />
      <AboutSection
        user={user}
        aboutOne={aboutOne}
        aboutTwo={aboutTwo}
        aboutThree={aboutThree}
      />
      <CallToActionSection callTooAction={callTooAction} />
      <SchoolClassesSection />

      <AppointmentForm />
      <PopularTeachers />

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "600px",
              animationDelay: "0.1s",
              animationName: "none",
            }}
          >
            <h1 className="mb-3">Our Clients Say!</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>

          {/* <TestimonialsCarousel /> */}
          <NItemsPerSlideCarousel
            itemsPerSlide={colSize}
            colContent={SecondCarouselItem}
            testimonials={defaultTestimonials}
            carouselId="testimonialCarousel"
          />
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      <Footer />

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default LandingPage;

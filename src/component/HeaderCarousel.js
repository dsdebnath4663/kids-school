import React from 'react';
import CarouselItem from './CarouselItem';
import OwlCarousel from 'react-owl-carousel3';

const HeaderCarousel = ({ carouselItems }) => {

  return (

    <div className="container-fluid p-0 mb-5">
    <OwlCarousel className="owl-carousel header-carousel position-relative" 
            loop
        margin={24}
        nav
        autoplay
        autoplayTimeout={2000}
        items={1}
        dots={false}
                navText={[
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ]}
    >
      {carouselItems.map((item, index) => (
        <CarouselItem
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          
        />
      ))}
    </OwlCarousel>
  </div>
    
  );
};

export default HeaderCarousel;

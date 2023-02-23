import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroSlider = () => {
  return (
    // <div className="heroSlider h-[600px] lg:h-[860px]">
    //   <img
    //     src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/0/B/{20B18195-50BE-4993-9CAE-0A141AFD3747}201126_slcb_homepage1.jpg"
    //     alt="blah"
    //   />
    // </div>
    <Carousel showArrows={true} showThumbs={false} ariaLabel={false}>
      <div>
        <img src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/4/D/{B4DC25D4-2F83-4133-BE8A-B139CBAD061B}200710_slcb_slcares.jpg" />
      </div>
      <div>
        <img src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/F/A/5/{FA599018-DA27-4904-8585-D0B858639D94}SEAA We Are Vaccinated_website-home-banner.jpeg" />
      </div>
      <div>
        <img src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/0/B/{20B18195-50BE-4993-9CAE-0A141AFD3747}201126_slcb_homepage1.jpg" />
      </div>
    </Carousel>
  );
};

export default HeroSlider;

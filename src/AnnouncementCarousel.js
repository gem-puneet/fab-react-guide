import React, { useEffect } from "react";
import { AnnCarouselInstance } from "testing-fab-lib";


export const AnnouncementSlider = ()=>{
    useEffect(()=>{
      const slider = new AnnCarouselInstance();
      slider.createCarousel();
    },[])
}
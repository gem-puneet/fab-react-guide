import React, { useEffect } from "react";
import { AnnCarouselInstance } from "testing-fab-lib";

export const AnnouncementSlider = ()=>{
  useEffect(()=>{
  const carousel = new AnnCarouselInstance();
  carousel.createCarousel();
  },[])

}
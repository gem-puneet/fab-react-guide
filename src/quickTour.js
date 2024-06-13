import React, { useEffect } from "react";
import { QuickTour } from "testing-fab-lib";
import configSteps from "./clientConfig.json"


export const QuickTourComp = ()=>{
  useEffect(()=>{
    const tour = new QuickTour(configSteps);
    tour.view(); 

    return ()=>{
      tour.closeModal();
    }
  },[])

  return null;
}



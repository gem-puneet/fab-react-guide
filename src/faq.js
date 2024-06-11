import React, { useEffect } from "react";
import { FAQComponent } from "testing-fab-lib";
import configSteps from "./clientConfig.json"


export const FAQ = ()=>{
  useEffect(()=>{
    const faq = new FAQComponent(configSteps);
    faq.openFAQ(); 
  },[])
}



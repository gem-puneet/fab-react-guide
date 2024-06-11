import React,{ useEffect } from "react";
import { AnnModalInstance } from "testing-fab-lib";
import configSteps from "./clientConfig.json"


export const AnnModalComp = ()=>{
  useEffect(()=>{
    const annmodal = new AnnModalInstance(configSteps);
    annmodal.openModal(); 
  },[])
 
}



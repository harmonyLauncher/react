import React from "react";
import Navbar from "../components/Navbar";
import RefCont from "../components/RefCont";
import WhiteListComponent from "../components/WhiteListComponent";
import Form from "../components/Form";
import Footer from "../components/Footer";

const WhiteList = () => {
  return (
    <>
      <Navbar bell={true} code={true}/>
       
           
            <WhiteListComponent/>

        
     
      
    </>
  );
};
export default WhiteList;
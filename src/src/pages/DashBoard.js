import React from "react";
import Navbar from "../components/Navbar";
import RefCont from "../components/RefCont";
import DashBoardComponent from "../components/DashBoardComponent";
import Form from "../components/Form";
import Footer from "../components/Footer";

const DashBoard = () => {
  return (
    <>
      <Navbar bell={true} code={true}/>
       
           
            <DashBoardComponent/>

        
     
      
    </>
  );
};
export default DashBoard;
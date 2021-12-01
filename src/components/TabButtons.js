import React from "react";
import TabButton from "./TabButton";
const ButtonData=[{id:"live-tab",control:"live",selected:"true",name:"Live"},{id:"upcoming-tab",control:"upcoming",selected:"false",name:"Upcoming"},{id:"completed-tab",control:"completed",selected:"false",name:"Completed"}]
const TabButtons = (props) => {
  return (
      <ul class="nav nav-tabs justify-content-center border-0 mb-5" id="projects" role="tablist">
      {ButtonData.map((item,index)=>{
          return(<TabButton id={item.id} control={item.control} selected={item.selected} name={item.name} key={item.id}/>)

      })}
                        
                    </ul>
  );
};

export default TabButtons;

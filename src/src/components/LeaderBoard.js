import React from "react";
import LeaderBoardHeader from "./LeaderBoardHeader";
import LeaderBoardRow from "./LeaderBoardRow";
const LeaderBoardRowData=[{highlighted:"bg-primary text-white",id:1,displayName:"SkyVison",daysLocked:"279 Days",harmony:460279.78},{id:2,highlighted:"bg-primary text-white",displayName:"6BK",daysLocked:"360 Days",harmony:327211.58},{id:3,highlighted:"bg-primary text-white",displayName:"8dR",daysLocked:"342 Days",harmony:323779.9},{id:4,highlighted:"",displayName:"Ctb",daysLocked:"241 Days",harmony:37534.9},{id:5,highlighted:"",displayName:"Dbp",daysLocked:"221 Days",harmony:35334.69},{id:6,highlighted:"",displayName:"Elon",daysLocked:"346 Days",harmony:162952.01},{id:7,highlighted:"",displayName:"Bee",daysLocked:"290 Days",harmony:114045.30}];
const LeaderBoardComponent = ({
    
}) => {
  return (
      <>
      <div class="container p-5 mb-5 vh-100">
        <div class="row text-white d-flex align-items-end">
            <h1 class="fs-3">Referral Actions</h1>

            <h1 class="fs-2 text-center">LeaderBoard</h1>

            <table class="table table-hover table-bordered bg-white">
               <LeaderBoardHeader />
                <tbody>
                      {
                       LeaderBoardRowData.map((item,index)=>{
                           return(
<LeaderBoardRow  key={item.id} highlighted={item.highlighted} id={item.id} displayName={item.displayName} daysLocked={item.daysLocked} harmony={item.harmony}/>
                           )
                       })
                   }
                </tbody>
            </table>
           

        </div>

       
    </div>
      

            </>
  );
};

export default LeaderBoardComponent;
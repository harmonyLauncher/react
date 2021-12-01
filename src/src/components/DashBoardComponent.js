import React from "react";
import TabButtons from "./TabButtons";
import UserProfile from "./UserProfile";
import LeaderBoardRow from "./LeaderBoardRow";
import ProductCard from "./ProductCard";
const ProductData=[{id:1,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:2,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:3,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:4,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:5,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:6,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:7,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:8,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."}];

const LeaderBoardRowData=[{highlighted:"bg-primary text-white",id:1,displayName:"SkyVison",daysLocked:"279 Days",harmony:460279.78},{id:2,highlighted:"bg-primary text-white",displayName:"6BK",daysLocked:"360 Days",harmony:327211.58},{id:3,highlighted:"bg-primary text-white",displayName:"8dR",daysLocked:"342 Days",harmony:323779.9},{id:4,highlighted:"",displayName:"Ctb",daysLocked:"241 Days",harmony:37534.9},{id:5,highlighted:"",displayName:"Dbp",daysLocked:"221 Days",harmony:35334.69},{id:6,highlighted:"",displayName:"Elon",daysLocked:"346 Days",harmony:162952.01},{id:7,highlighted:"",displayName:"Bee",daysLocked:"290 Days",harmony:114045.30}];
const DashBoardComponent = ({
    
}) => {
  return (
      <>
      <div class="container-fluid px-5 top-margin" style={{marginTop: 180}}>
        <div class="row gx-5">
            <UserProfile/>
            <div class="col-md-10">
                <div class="row">
                    <TabButtons/>

                    <div class="tab-content" id="projectsContent">
                        <div class="tab-pane fade show active" id="live" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row gx-5 mb-5">
                               {ProductData.map((item,index)=>{
                                   return(<ProductCard  key={item.id} id={item.id} participants={item.participants} size={item.size} access={item.access} rate={item.rate} price={item.price} description={item.description}/>)
                               })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      

            </>
  );
};

export default DashBoardComponent;
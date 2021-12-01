import React from "react";
import Token from "./Token";
const PoolData=[{name:"TOKEN DISTRIBUTION",value:"11/2/2021"},{name:"MIN. ALLOCATION",value:"$25"},{name:"MIN. ALLOCATION (BNB)",value:"0.05 BNB"},{name:"ALLOCATION SIZE",value:"$50"},{name:"ALLOCATION SIZE (BNB)",value:"0.1 BNB"}]
const PoolInfo = ({id,control,selected,name}) => {
  return (
     
                      <div class="col">
                <h2 class="text-white fw-bold">Pool Information</h2>
                <div class="inside-tab p-5">
                    <div class="row row-cols-md-3">
                    {PoolData.map((item,index)=>{
                        return(
<Token name={item.name} value={item.value} key={index}/>
                        )
                    })}
                        
                        
                    </div>

                </div>
            </div>
                   
  );
};

export default PoolInfo;

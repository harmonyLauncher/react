import React from "react";
import Token from "./Token";
const TokenData=[{name:"NAME",value:"CHEERS"},{name:"SYMBOL",value:"$CHEERS"},{name:"DECIMALS",value:"18"},{name:"TOTAL SUPPLY",value:"100"},{name:"ADDRESS",value:"0x2e8c611931a379",size:12}]
const TokenInfo = ({id,control,selected,name}) => {
  return (
     
                      <div class="col">
                <h2 class="text-white fw-bold">Token Information</h2>
                <div class="inside-tab p-5">
                    <div class="row row-cols-md-3">
                    {TokenData.map((item,index)=>{
                        return(
<Token name={item.name} value={item.value} key={index} size={item.size}/>
                        )
                    })}
                        
                        
                    </div>

                </div>
            </div>
                   
  );
};

export default TokenInfo;

import React from "react";

const Token = ({id,value,name,size}) => {
  return (
     
                       <div class="col">
                            <p class="text-secondary mb-0">{name}</p>
                            <p class="text-white fs-3 fw-bold" >{value}</p>
                        </div>
                   
  );
};

export default Token;

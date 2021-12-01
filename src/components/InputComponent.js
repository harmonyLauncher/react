import React from "react";

const InputComponent = ({forLabel,id,name,placeholder,ariaLabel,value,type}) => {
  return (
     <>
                     {value&&<label for={forLabel} class="fs-6 text-secondary py-1">{value}</label>}  
                                    <input type={type} id={id} name="full-name" class="form-control neo-field p-3 text-white" placeholder={placeholder} aria-label={ariaLabel}/>
                               
                   </>
  );
};

export default InputComponent;

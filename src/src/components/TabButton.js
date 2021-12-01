import React from "react";

const TabButton = ({id,control,selected,name}) => {
  return (
     
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id={id} data-bs-toggle="tab" data-bs-target={`#${control}` } type="button" role="tab" aria-controls={control} aria-selected={selected}><i class="fas fa-compact-disc"></i> {name}</button>
                        </li>
                   
  );
};

export default TabButton;

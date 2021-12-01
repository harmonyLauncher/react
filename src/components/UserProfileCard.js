import React from "react";

const UserProfileCard = ({id,value,icon,name}) => {
  return (
     
           <div class="row mb-3">
                    <div class="col">
                        <span class="fs-6">{name}</span>
                        <div class="neo p-3 fs-6 d-flex align-items-center justify-content-center justify-content-md-between">
                            <span class="float-start"><i class={icon}></i>{value}</span>
                            <a href=" # " class="btn-badge-icons float-end"><i class="fas fa-info"></i></a>
                        </div>
                    </div>
                </div>            
                   
  );
};

export default UserProfileCard;

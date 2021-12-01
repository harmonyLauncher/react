import React from "react";
import UserProfileCard from "./UserProfileCard";
const UserData=[{name:"Total Balance",icon:"fas fa-dollar-sign",value:"100000",id:1},{name:"Locked Tokens",icon:"fas fa-coins",value:"0",id:2},{name:"Prot Holdings",icon:"fas fa-buffer",value:"0",id:3},{name:"Wallet Balance",icon:"fas fa-wallet",value:"70000",id:4}]
const UserProfile = () => {
  return (
     <div class="col-md-2 d-flex flex-column flex-shrink-0 p-3 text-white profile-sidebar sticky-top position-relative">
                <div class="row g-0">
                    <div class="col ">
                        <img src="images/banner01.jpg" alt="" class="img-fluid float-start shadow-sm" />
                    </div>
                    <div class="col">
                        <ul class="list-unstyled px-3 fs-6 float-end">
                            <li>
                                <i class="far fa-user"></i> Alexander
                            </li>
                            <li>
                                <i class="fas fa-globe"></i> Network:
                            </li>
                            <li>
                                <i class="fab fa-ethereum"></i> Ethereum
                            </li>
                            <li>
                                QRWERTY10...
                            </li>
                        </ul>
                    </div>
                </div>
               
              
               {
                   UserData.map((item,index)=>{
                       return(
                          < UserProfileCard key={item.id} name={item.name} value={item.value} icon={item.icon} />
                       )
                   })
               }
               
            </div>
                   
  );
};

export default UserProfile;

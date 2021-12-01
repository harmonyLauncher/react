import React from "react";
import TabButtons from "./TabButtons";
import UserProfile from "./UserProfile";
import LeaderBoardRow from "./LeaderBoardRow";
import InputComponent from "./InputComponent";
import ProductCard from "./ProductCard";
const ProductData=[{id:1,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:2,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:3,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:4,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:5,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:6,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:7,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:8,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."}];

const LeaderBoardRowData=[{highlighted:"bg-primary text-white",id:1,displayName:"SkyVison",daysLocked:"279 Days",harmony:460279.78},{id:2,highlighted:"bg-primary text-white",displayName:"6BK",daysLocked:"360 Days",harmony:327211.58},{id:3,highlighted:"bg-primary text-white",displayName:"8dR",daysLocked:"342 Days",harmony:323779.9},{id:4,highlighted:"",displayName:"Ctb",daysLocked:"241 Days",harmony:37534.9},{id:5,highlighted:"",displayName:"Dbp",daysLocked:"221 Days",harmony:35334.69},{id:6,highlighted:"",displayName:"Elon",daysLocked:"346 Days",harmony:162952.01},{id:7,highlighted:"",displayName:"Bee",daysLocked:"290 Days",harmony:114045.30}];
const WhiteListComponent = ({
    
}) => {
  return (
      <>
      <div class="container-fluid px-5 top-margin" style={{marginTop: 180}}>
        <div class="row gx-5">
            <UserProfile/>
            <div class="col-md-10">
                <div class="row">
                    <div class="col">

                        <div class="inside-tab p-4">
                            <div class="project-detail d-flex align-items-center justify-content-md-between">
                                <div class="project-info text-secondary fs-5">
                                    <span class="neo"><img src="images/tab-icon2.png" class="img-thumbnail w-25 shadow me-2" alt="pic"/></span> Octopus Protocol
                                </div>
                                <div class="project-label">
                                    <div class="status text-end">
                                        <a href="#" class="neo"><i class="fas fa-star text-primary"></i> Applications Open</a>
                                    </div>
                                </div>
                            </div>
                            <p class="fs-4 text-white pt-3">Announcing Try Hards Whitelisting on Prostarter Launchpad</p>
                            <p class="text-secondary">Octopus Protocol is an open-source protocol facilitating unparalleled access and exposure to real-world assets. Octopus Protocol, built on the Binance Smart Chain (BSC), allows engagement with decentralized derivatives by enabling
                                a platform to create, exchange, settle and manage synthetic assets. Octopus Protocol $OPS is a BEP-20 token built on the Binance Smart Chain Network.</p>
                            <img src="images/preview.png" class="img-fluid" alt=""/>
                            <p class="fs-4 text-white pt-3">Try Hards IGO Detail</p>
                            <ul class="p-3 text-secondary">
                                <li>Live IGO Whitelisting Date: To Be Announced</li>
                                <li>Total AlLocation: $50,000</li>
                            </ul>

                        </div>

                    </div>
                    <div class="col">
                        <div class="title text-white fs-2 fw-bold">Announcing Try Hards Whitelisting on <br/> Prostarter Launchpad</div>
                        <p class="text-secondary py-4 fs-6 fw-bolder">Welcome to Harmony Launcher!</p>

                        <div class="inside-tab p-4">
                            <p class="text-secondary">Please fill out the form and perform all tasks accordingly. Ensure that the information submitted is accurate as it will be used for KYC afterwards. If you have any questions, please contact us on <a href="#">Telegram.</a></p>
                        </div>
                        <p class="text-secondary py-4 fs-6 fw-bolder">Good luck and thank you for your support!</p>
                        <form class="" method="post" action="#">
                            <div class="row mb-2">
                                <div class="col">
                                <InputComponent forLabel="full-name" value={"Full Name"} id={"full-name"} name={"full-name"} placeholder={"John"} ariaLabel={"Full name"} type={"text"}/>
                                  </div>
                                <div class="col">
                             <InputComponent forLabel="emailID" value={"Email Address"} id={"emailID"} name={"emailID"} placeholder={"john@example.com"} ariaLabel={"email"} type={"email"}/>
                               

                                    </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                  <InputComponent forLabel="wallet-address" value={"ERC-20 Wallet Address"} id={"wallet-address"} name={"wallet-address"} placeholder={"QRWERTY10226#AKK01P222acd56e$21rfa3241"} ariaLabel={"wallet address"} type={"text"}/>
                            
                                      </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col float-start">
                                    <a class="btn btn-neo p-3 fs-5 fw-normal" href="#">Prot Pool</a>
                                </div>
                                <div class="col">
                                    <a class="btn btn-neo p-3 fs-5 fw-normal" href="#">Public Pool</a>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col">
                                  <InputComponent forLabel="telegram" value={"Telegram Handle"} id={"telegram"} name={"telegram"} placeholder={"@telegram_name"} ariaLabel={"telegram"} type={"text"}/>
                           
                                    </div>
                                <div class="col">
                                   <InputComponent forLabel="twitter" value={"Twitter Handle"} id={"twitter"} name={"twitter"} placeholder={"Twitter_name"} ariaLabel={"twitter"} type={"text"}/>
                           
                                        </div>
                            </div>

                            <p class="text-secondary py-4">Paste the tweet link where you`ve tweeted about your favorite feature of Try Hards using the hashtags $TRY, #Prostarter and $PROT (Optional)</p>

                            <div class="row mb-4">
                                <div class="col">
                                     <InputComponent forLabel="twitter" id={"tweet"} name={"tweet"} placeholder={"https://twitter.com/ProtOfficial/status/13241532532121124"} ariaLabel={"tweet"} type={"text"}/>
                           
                                     </div>
                            </div>
                            <div class="row mb-4">
                                <p class="text-white py-4 fs-6 fw-bolder">Have You followed the below steps</p>
                                <div class="col-12 mb-3">
                                    <div class="form-check d-flex align-items-center">
                                     
                                        <input class="form-check-input neo-field p-3 me-2 text-white" type="checkbox" id="follow_twitter"/>
                                        <label class="form-check-label" for="follow_twitter">
                                        <span class="text-white">Have you followed <a href="#">Try Hards Twitter</a> Account</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check d-flex align-items-center">
                                        <input class="form-check-input neo-field p-3 me-2 text-white" type="checkbox" id="follow_telegram"/>
                                        <label class="form-check-label" for="follow_telegram">
                                            <span class="text-white">Join <a href="#">Try Hards Telegram</a> Community Group</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type=" button " class="btn btn-primary btn-skew mw-100 mb-4"><i class="fas fa-globe "></i> <span>Go to App</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
      

            </>
  );
};

export default WhiteListComponent;
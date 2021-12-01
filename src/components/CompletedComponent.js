import React from "react";
import TabButtons from "./TabButtons";
import UserProfile from "./UserProfile";
import LeaderBoardRow from "./LeaderBoardRow";
import InputComponent from "./InputComponent";

import TokenInfo from "./TokenInfo";
import PoolInfo from "./PoolInfo";
import ProductCard from "./ProductCard";
const ProductData=[{id:1,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:2,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:3,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:4,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:5,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:6,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:7,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."},{id:8,participants:"750",size:"$150",access:"POOLS(2)",rate:"0/550K",price:"1000000.00",description:"Initial token distribution event for PULSE tokens with guaranteed allocation based on staking tiers."}];

const LeaderBoardRowData=[{highlighted:"bg-primary text-white",id:1,displayName:"SkyVison",daysLocked:"279 Days",harmony:460279.78},{id:2,highlighted:"bg-primary text-white",displayName:"6BK",daysLocked:"360 Days",harmony:327211.58},{id:3,highlighted:"bg-primary text-white",displayName:"8dR",daysLocked:"342 Days",harmony:323779.9},{id:4,highlighted:"",displayName:"Ctb",daysLocked:"241 Days",harmony:37534.9},{id:5,highlighted:"",displayName:"Dbp",daysLocked:"221 Days",harmony:35334.69},{id:6,highlighted:"",displayName:"Elon",daysLocked:"346 Days",harmony:162952.01},{id:7,highlighted:"",displayName:"Bee",daysLocked:"290 Days",harmony:114045.30}];
const CompletedComponent = ({
    
}) => {
  return (
      <>
         <div class="container-fluid px-5 top-margin" style={{marginTop: 180}}>
        <div class="inside-tab p-4">
            <div class="row">
                <div class="col">
                    <div class="row g-0 d-flex justify-content-center">
                        <div class="col-2 p-4 neo d-flex" style={{width: 100, height: 100}}>
                            <img src="images/tab-icon2.png" alt="" class="img-fluid shadow-sm" />
                        </div>
                        <div class="col-10 ps-md-4 mb-4">
                            <h2 class="text-white fs-2">Cheers Land</h2>
                            <p class="text-secondary pb-3">CheersLand is a scalable GameFi Metaverse Aggregator where anyone can monetize their gaming experiences and social networks.</p>
                            <div class="row gx-2 mb-4">
                                <div class="col d-flex justify-content-start py-2">
                                    <a href="#" class="neo me-2 d-flex justify-content-center align-items-center fs-4" style={{width: 64, height: 46}}><i class="fab fa-twitter text-secondary"></i></a>
                                    <a href="#" class="neo me-2 d-flex justify-content-center align-items-center fs-4" style={{width: 64, height: 46}}><i class="fab fa-medium-m text-secondary"></i></a>
                                    <a href="#" class="neo me-2 d-flex justify-content-center align-items-center fs-4" style={{width: 64, height: 46}}><i class="fab fa-telegram-plane text-secondary"></i></a>
                                    <a href="#" class="neo me-2 d-flex justify-content-center align-items-center fs-4"  style={{width: 64, height: 46}}><i class="fas fa-globe text-secondary"></i></a>
                                </div>
                            </div>
                            <div class="row py-4">
                                <div class="col">
                                    <p class="text-secondary mb-0">TOTAL RAISE</p>
                                    <p class="text-primary fs-3 fw-bold">$10.000</p>
                                </div>
                                <div class="col">
                                    <p class="text-secondary mb-0">NETWORK</p>
                                    <p class="text-white fs-3 fw-bold"><i class="fas fa-coins"></i> Binance</p>
                                </div>
                                <div class="col">
                                    <p class="text-secondary mb-0">PARTICIPANTS</p>
                                    <p class="text-white fs-3 fw-bold">200</p>
                                </div>
                                <div class="col">
                                    <p class="text-secondary mb-0">ACCESS</p>
                                    <p class="text-white fs-3 fw-bold">Public</p>
                                </div>
                            </div>
                            <div class="row py-4">
                                <div class="col text-wrap">
                                    <p class="text-secondary mb-0">IDO SALE CONTRACT ADDRESS</p>
                                    <p class="text-white fs-4 fw-bold text-wrap">0x2e8c611931a379f7b1d14ff1e65d8061019c4e13 <i class="far fa-copy ps-2"></i></p>
                                </div>

                            </div>
                            <a class="neo" href="#"> View BscScan</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="inside-tab p-5">
                        <div class="col d-flex justify-content-end py-2 align-items-center">
                            <a href="#" class="neo float-end"><i class="fas fa-dollar-sign dollar-icon-blue text-dark"></i> 1BNB=4K$CHEERS</a>
                        </div>

                        <div class="row p-3 mt-5">
                            <div class="col position-relative">
                                <span class="dollar-place position-absolute  translate-middle"><i class="fas fa-dollar-sign fa-5x text-dark"></i></span>
                                <p class="raise-amount text-white position-relative zindex-fixed fs-1 fw-bold mb-0">142.499,50 BNB</p>
                                <p class="text-white fs-6">Total Raise Amount</p>
                            </div>
                            <div class="col text-md-end text-sm-start">
                                <p class="text-white fs-6">LIVE WHITELISTING STARTS IN</p>
                                <p class="raise-amount text-white position-relative zindex-fixed fs-3 fw-bold mb-0">02 D : 16 H : 21 M : 17 S</p>

                            </div>
                        </div>
                        <div class="row py-3">

                            <div class="col mb-3">
                                <p class="text-secondary">SWAP AMOUNT</p>
                                <a class="neo text-primary px-4" href="#"> 83,333 $MYNE</a>

                            </div>
                            <div class="col mb-3">
                                <p class="text-secondary">TOTAL RAISE</p>
                                <a class="neo text-white px-4" href="#">20/20BNB</a>


                            </div>
                            <div class="col mb-3">
                                <p class="text-secondary">ESTIMATED GAS FEE</p>
                                <a class="neo text-white px-4" href="#">0 GWEI</a>

                            </div>


                        </div>

                        <div class="row py-3">
                            <p class="text-secondary mb-0">PROGRESS</p>
                            <div class="progress mx-3" style={{height: 16}}>
                                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '47%'}} aria-valuenow="47" aria-valuemin="0" aria-valuemax="100">
                                </div>

                            </div>
                        </div>

                        <div class="row py-3">
                            <div class="col mb-3">
                                <a href="#" class="neo float-start">90% Completed</a>
                            </div>
                            <div class="col text-md-end text-sm-center">
                                <p class="text-white fs-5">532K/550K $TRY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <div class="container-fluid p-5">
        <div class="row row-cols-md-2">
           <PoolInfo/>

          <TokenInfo/>
            <div class="col">
                <h2 class="text-white pt-5">About the Project</h2>
                <p class="text-secondary py-3">CheersLand is a scalable GameFi Metaverse Aggregator where anyone can monetize their gaming experiences and social networks. CheersLand GameFi Metaverse Aggregator is composed of multi-game combinations, Ranking List, Initial Gaming Offering
                    (IGO), NFT Market, Multi-asset Staking Platform, etc. $CHEERS is a BEP20 native utility token of CheersLand built on the Binance Smart Chain network.</p>
            </div>
        </div>
    </div>

      

            </>
  );
};

export default CompletedComponent;
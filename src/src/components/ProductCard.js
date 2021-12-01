import React from "react";

const ProductCard = ({id,participants,size,access,rate,price,description}) => {
  return (
     
           <div class="col">
                                    <div class="inside-tab">
                                        <div class="row mb-2">
                                            <div class="col-md-4 icon-box p-3">
                                                <img src="images/tab-icon1.png" alt="" class="w-100 shadow-sm me-2" />
                                            </div>
                                            <div class="col details-box p-3">
                                                <i class="fab fa-ethereum text-white"></i> <span class="text-secondary"> Ethereum</span>
                                                <h3 class="text-white">PULSE TDE</h3>
                                                <a href="#" class="neo"><i class="fas fa-star text-primary"></i> Applications Open</a>
                                            </div>
                                        </div>
                                        <div class="row p-3">
                                            <p class="text-secondary">{description}</p>
                                        </div>

                                        <div class="row p-3 position-relative">
                                            <span class="position-absolute  translate-middle top-0 start-50 "><i class="fas fa-dollar-sign fa-2x text-dark dollar-icon"></i></span>
                                            <p class="raise-amount text-white position-relative zindex-fixed">USD {price}<br/><small class="fs-6">Total Raise Amount</small></p>

                                        </div>

                                        <div class="progress mx-2" style={{height: 8}}>
                                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '47%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            </div>

                                        </div>
                                        <div class="row p-3 d-flex align-items-center">
                                            <div class="col">
                                                <div class="btn-badge-text float-start">47% </div>
                                            </div>
                                            <div class="col">
                                                <span class="text-secondary">{rate} $TRY</span>
                                            </div>
                                        </div>

                                        <div class="row p-3 d-flex align-items-center">
                                            <div class="col">
                                                <p class="text-secondary fs-6 mb-0">Participants</p>
                                                <div class="btn-badge-text">{participants} </div>
                                            </div>
                                            <div class="col">
                                                <p class="text-secondary fs-6 mb-0">Alloc. Size</p>
                                                <div class="btn-badge-text">{size}</div>
                                            </div>
                                            <div class="col">
                                                <p class="text-secondary fs-6 mb-0">Access</p>
                                                <div class="btn-badge-text">{access}</div>
                                            </div>
                                        </div>
                                        <div class="row p-3">
                                            <div class="col text-center mb-3">
                                                <button type=" button " class="btn btn-primary btn-skew"><i class="fas fa-arrow-alt-circle-up"></i> <span>Apply for Whitelisting</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                   
  );
};

export default ProductCard;

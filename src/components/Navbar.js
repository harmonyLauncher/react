import React from "react";

const Navbar = ({bell,code}) => {
  return (
    <div className="container-fluid referral-header">
      <header
        className="
          header
          position-fixed
          d-flex
          align-items-center
          justify-content-center justify-content-md-between
          py-3
          mb-4
          zindex-fixed
        "
      >
        <a
          href="/"
          className="
            d-flex
            align-items-center
            col-md-3
            mb-2 mb-md-0
            text-dark text-decoration-none
            animate__animated animate__fadeInDown
          "
        >
          <img src="images/logo.png" alt="Harmony Launcher logo" />
        </a>
        {bell&&<i class="far fa-bell position-relative fa-2x text-white mx-5">
                <span class="bell-notification position-absolute top-0 start-100 translate-middle badge border border-light rounded-pill bg-primary p-2">12 </span>
            </i>}
        <div className="header-bar animate__animated animate__fadeInUp">
          <ul className="nav col-md-8 mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#home"
                className="nav-link px-2 link-dark header-nav__link"
              >
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a
                href="#cases"
                className="nav-link px-2 link-dark header-nav__link"
              >
                <i className="far fa-lightbulb"></i> Use Cases
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="nav-link px-2 link-dark header-nav__link"
              >
                <i className="fas fa-bolt"></i> Features
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="nav-link px-2 link-dark header-nav__link"
              >
                <i className="fas fa-user"></i> Team
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="nav-link px-2 link-dark header-nav__link"
              >
                <i className="fas fa-map"></i> Roadmap
              </a>
            </li>
          </ul>

         {!code&& <div className="col float-end">
            <button
              type=" button "
              className="btn btn-primary btn-skew float-end"
            >
              <i className="fas fa-globe"></i> <span>Go to App</span>
            </button>
           
          </div>}
          {code&&<div class="d-inline-flex">
                    <button type=" button " class="btn btn-primary btn-skew w-50"><i class="fas fa-globe "></i> <span>Go to App</span></button>
                   <div class="input-group mb-3">
                        <input type="text" class="form-control neo-field p-2 text-white ms-4" name="wallet-address" id="wallet-address" placeholder="QRWERTY10226#AKK01P222 ..." aria-label="wallet address" aria-describedby="wallet-address" />
                        <span class="input-group-text" id="wallet-address"><i class="far fa-copy"></i></span>
                    </div>
                </div>}
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark border-top border-1 border-secondary py-5 mb-5">
      <div className="container">
        <div className="row">
          <div
            className="col aos-animate"
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
          >
            <a
              href="/"
              className="
                d-flex
                align-items-center
                col-md-3
                mb-2 mb-md-0
                text-dark text-decoration-none
              "
            >
              <img src="images/logo.png" alt="Harmony Launcher logo" />
            </a>
          </div>
          <div
            className="col aos-animate"
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="400"
          >
            <p className="text-white text-end">
              The secure and hassle-free way to launch your projects on the
              Harmony Network.
            </p>
          </div>
        </div>
        <div className="row aos-animate" data-aos="fade-up">
          <div className="col">
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">
                &copy; 2021 Harmonylauncher. All right reserved.
              </li>
              <li className="list-group-item">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="list-group-item">
                <a href="/">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-group list-group-horizontal float-end">
              <li className="list-group-item">
                <a href="/">
                  <i className="fab fa-mastodon"></i>
                </a>
              </li>
              <li className="list-group-item">
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-group-item">
                <a href="/">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

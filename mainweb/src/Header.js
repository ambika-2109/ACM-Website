import React from 'react';

const Header = () => {
  return <>
     <header>
         <section className="container main-hero-container">
         <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
               Welcome to ACM, <br/>
               Vnit Nagpur
              </h1>
              <p className="main-hero-para">
              The Association for Computing Machinery is a US-based international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. The ACM is a non-profit professional membership group, claiming nearly 100,000 student and professional
              </p>
              <h3>
                  Scroll down for more!
              </h3>
            </div>
          
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
            <img src="./image/img3.png" alt="heroimg" className='img-fluid' />
            </div>
         </div>
         </section>
     </header>
  </>;
};

export default Header;

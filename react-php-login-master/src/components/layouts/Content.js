
import React, { Component } from 'react';
import Youtube from './Youtube';
import Footer from './Footer';
import Header from './Header';


function Content() {
  return (
    <div>
      <Header />
      <Youtube />


      <div className="container-xxl con py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                style={{ objectFit: " cover" }}
              />
              <div
                className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                style={{ width: "200px", height: "200px" }}
              >
                <div className="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3">
                  <h1 className="text-white mb-0">25</h1>
                  <h2 className="text-white">Years</h2>
                  <h5 className="text-white mb-0">Experience</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h1 className="display-6 mb-5">
                We're Here To Assist You With Exploring Protection
              </h1>
              <p className="fs-5 text-primary mb-4">
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet
                lorem sit clita duo justo erat amet
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 me-3"
                      src="../img/icon/icon-04-primary.png"
                      alt=""
                    />
                    <h5 className="mb-0">Flexible Insurance Plans</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 me-3"
                      src="../img/icon/icon-04-primary.png"
                      alt=""
                    />
                    <h5 className="mb-0">Money Back Guarantee</h5>
                  </div>
                </div>
              </div>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex align-items-center">
                  <img
                    className="flex-shrink-0 rounded-circle me-3"
                    src="https://images.pexels.com/photos/3862617/pexels-photo-3862617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                  <h5 className="mb-0">Call Us: +012 345 6789</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-6 mb-5">
                Few Reasons Why People Choosing Us!
              </h1><a id="service"></a>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                      <img
                        className="align-self-center mb-3"
                        src="../img/icon/icon-06-primary.png"
                        alt=""
                      />
                      <h5 className="mb-0">Easy Process</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                      <img
                        className="align-self-center mb-3"
                        src="../img/icon/icon-03-primary.png"
                        alt=""
                      />
                      <h5 className="mb-0">Fast Delivery</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                      <img
                        className="align-self-center mb-3"
                        src="../img/icon/icon-04-primary.png"
                        alt=""
                      />
                      <h5 className="mb-0">Policy Controlling</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                      <img
                        className="align-self-center mb-3"
                        src="../img/icon/icon-07-primary.png"
                        alt=""
                      />
                      <h5 className="mb-0">Money Saving</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div
                className="position-relative rounded overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-xxl py-5">
        <div className="container text-center">
          <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>

          </div>
          <div className="row g-4 justify-content-center  "><a id="about"></a>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4 ">
                  <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4 ">
                    <img
                      className="img-fluid"
                      src="../img/icon/icon-10-light.png"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-0">Property Insurance</h4>
                </div>


                <img
                  className='card_text'
                  src="/img/propinsu.png"
                  alt=""
                />

              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                  </div>
                  <h4 className="mb-0">Business  Insurance</h4>
                </div>


                <img
                  className='card_text'
                  src="/img/propinsu.png"
                  alt=""
                />

              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                    <img
                      className="img-fluid"
                      src="../img/icon/icon-05-light.png"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-0">Home Insurance</h4>
                </div>


                <img
                  className='card_text'
                  src="/img/propinsu.png"
                  alt=""
                />

              </div>
            </div>

          </div>
        </div>
      </div> */}
      <div className='container'>
        <div className='row'>
          <h1 className="display-6 mb-5 text-center">
            We Provide professional Insurance Services
          </h1>
        </div>
        <div className='row text-center'>
          <div className='col-4 '>
            <h3>Property Insurance
            </h3>
            <img src="/img/propinsu.png" style={{height: 300}} className="img-fluid"/>
          </div>
          <div className='col-4'>
            <h3>Business Insurance
</h3>
            <img src="/img/Business Insurance.jpg" style={{height: 300}} className="img-fluid"/>
          </div>
          <div className='col-4'>
            <h3>Home Insurance
</h3>
            <img src="/img/Home Insurance.webp" style={{height: 300}} className="img-fluid"/>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        data-wow-delay="0.1s"
      >

      </div>

      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
            <h1 className="display-6 mb-5">
              Meet Our Professional Team Members
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src="../img/team-1.jpg" alt="" />
                <div className="text-center p-4">
                  <h5>Full Name</h5>
                  <span>Designation</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Full Name</h5>
                  <p>Designation</p>
                  <div className="d-flex justify-content-center">
                  
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src="../img/team-2.jpg" alt="" />
                <div className="text-center p-4">
                  <h5>Full Name</h5>
                  <span>Designation</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Full Name</h5>
                  <p>Designation</p>
                  <div className="d-flex justify-content-center">
                  
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src="../img/team-3.jpg" alt="" />
                <div className="text-center p-4">
                  <h5>Full Name</h5>
                  <span>Designation</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Full Name</h5>
                  <p>Designation</p>
                  <div className="d-flex justify-content-center">
                 
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src="../img/team-4.jpg" alt="" />
                <div className="text-center p-4">
                  <h5>Full Name</h5>
                  <span>Designation</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Full Name</h5>
                  <p>Designation</p>
                  <div className="d-flex justify-content-center">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
            <h1 className="display-6 mb-5">
              What They Say About Our Insurance
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-left h-100">
                <img
                  className="img-fluid animated pulse infinite"
                  src="../img/testimonial-1.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="../img/testimonial-2.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="../img/testimonial-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid rounded mx-auto mb-4"
                    src="../img/testimonial-1.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid rounded mx-auto mb-4"
                    src="../img/testimonial-2.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid rounded mx-auto mb-4"
                    src="../img/testimonial-3.jpg"
                    alt=""
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-right h-100">
                <img
                  className="img-fluid animated pulse infinite"
                  src="../img/testimonial-1.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="../img/testimonial-2.jpg"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="../img/testimonial-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default Content;

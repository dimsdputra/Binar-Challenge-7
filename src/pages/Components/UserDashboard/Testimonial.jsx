import React from 'react'
import "../../../assets/stylesheets/style.css";

function Testimonial() {
  return (
    <section className="testimonial">
            <h4 className="text-center fs-4 fw-bold">Testimonial</h4>
            <p className="text-center fw-light fs-6">Berbagai review positif dari para pelanggan kami</p>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide col-sm-4">
                        <div className="testi">
                            <div className="photo">
                            </div>
                            <div className="card-body-testi">
                                <p className="fw-light fs-6 mt-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="fw-bold fs-6">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide col-sm-4">
                        <div className="testi">
                            <div className="photo">
                            </div>
                            <div className="card-body-testi">
                                <img src="/asset/Rate.svg" alt="" />
                                <p className="fw-light fs-6 mt-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="fw-bold fs-6">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide col-sm-4">
                        <div className="testi">
                            <div className="photo">
                            </div>
                            <div className="card-body-testi">
                                <p className="fw-light fs-6 mt-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="fw-bold fs-6">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-n">
                    <div>
                        <img src="/asset/Left button hover.svg" alt="" className="swiper-button-next"/>
                        <div className="btn-next">
                            <img src="/asset/Left button.svg" alt=""  className="swiper-button-next"/>
                        </div>
                    </div>
                    <div>
                        <img src="/asset/Right button hover.svg" alt="" className="swiper-button-prev"/>
                        <div className="btn-prev">
                            <img src="/asset/Right button.svg" alt=""  className="swiper-button-prev"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
  )
}

export default Testimonial
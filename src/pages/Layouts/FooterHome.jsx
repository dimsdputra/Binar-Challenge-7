import React from 'react'
import facebook from '../../assets/icons/icon_facebook.png';
import instagram from '../../assets/icons/icon_instagram.png';
import twitter from '../../assets/icons/icon_twitter.png';
import mail from '../../assets/icons/icon_mail.png';
import twitch from '../../assets/icons/icon_twitch.png';

function FooterHome() {
  return (
    <section className="footer container">
            <div className="row">
                <div className="fw-light fs-6 col-sm-3">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="fw-light fs-6 col-sm-2">
                    <p>Our Services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
                <div className="fw-light fs-6 col-sm-3">
                    <p>Connect with us</p>
                    <div className="icon">
                        <img src={facebook} alt=""/>
                        <img src={instagram} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={twitch} alt=""/>
                        <img src={mail} alt=""/>
                    </div>
                </div>
                <div className="fw-light fs-6 col-sm-3">
                    <p>Copyright Binar 2022</p>
                    <div className="logo"></div>
                </div>
            </div>
        </section>
  )
}

export default FooterHome
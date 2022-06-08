import React from 'react'
import "../../../assets/stylesheets/style.css";
import icon_professional from '../../../assets/icons/icon_professional.png';
import icon_24hrs from '../../../assets/icons/icon_24hrs.png';
import icon_price from '../../../assets/icons/icon_price.png';
import icon_complete from '../../../assets/icons/icon_complete.png';

function Services() {
  return (
    <section className='services container'>
        <div>
            <h3 className='fw-bold fs-4 mt-5'>Why Us?</h3>
            <p className='fw-light fs-6 mt-3'>Mengapa harus pilih Binar Car Rental</p>
        </div>
        <div className='card-services mt-3 mb-3 row'>
            <div className='col-sm-3 mb-3'>
                <div className='card w-100 h-100'>
                    <div className='card-body'>
                        <img src={icon_complete} alt="" />
                        <p className='card-title fw-bold fs-6'>Mobil Lengkap</p>
                        <p className='card-text fw-light fs-6'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 mb-3'>
                <div className='card w-100 h-100'>
                    <div className='card-body'>
                        <img src={icon_price} alt="" />
                        <p className='card-title fw-bold fs-6'>Harga Murah</p>
                        <p className='card-text fw-light fs-6'>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 mb-3'>
                <div className='card w-100 h-100'>
                    <div className='card-body'>
                        <img src={icon_24hrs} alt="" />
                        <p className='card-title fw-bold fs-6'>Layanan 24 Jam</p>
                        <p className='card-text fw-light fs-6'>Siap melayani kebutuhan anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 mb-3'>
                <div className='card w-100 h-100'>
                    <div className='card-body'>
                        <img src={icon_professional} alt="" />
                        <p className='card-title fw-bold fs-6'>Sopir Profesional</p>
                        <p className='card-text fw-light fs-6'>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
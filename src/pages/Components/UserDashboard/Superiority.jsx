import React from 'react'
import "../../../assets/stylesheets/style.css";
import CheckIcon from '../../../assets/icons/check.svg'
import ImageServices from '../../../assets/images/img_service.png'

function Superiority() {
  return (
    <section className='superiority container' id='Superiority'>
        <div className='image'>
            <img src={ImageServices} alt="" />
        </div>
        <div className='p-0'>
            <h2 className='fw-bold fs-4'>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className='fw-light fs-6'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <ul className='fw-light fs-6 p-0'>
                <li><img src={CheckIcon} alt="" />Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li><img src={CheckIcon} alt="" />Sewa Mobil Dengan Supir di Bali 24 Jam</li>
                <li><img src={CheckIcon} alt="" />Sewa Mobil Jangka Panjang Bulanan</li>
                <li><img src={CheckIcon} alt="" />Gratis Antar - Jemput Mobil di Bandara</li>
                <li><img src={CheckIcon} alt="" />Layanan Airport Transfer / Drop In Out</li>
            </ul>
        </div>
    </section>
  )
}

export default Superiority
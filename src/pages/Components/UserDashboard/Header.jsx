import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImgCar from '../../../assets/images/img_car.png'

function Header() {
    const navigate = useNavigate()
    const Search = () => {
        navigate("/search")
      }
  return (
    <header>
        <section className="cover container">
        <div className="cover-text mb-3 mt-5">
        <h1 className="fw-bold fs-4 w-75">Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
        <p className="fw-light fs-6 w-75">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <button className="btn btn-success fw-bold fs-6" onClick={() => {Search()}}>Mulai Sewa Mobil</button>
        </div>
        <div className="cover-img mt-5">
        <img src={ImgCar} alt="" />
        </div>
    </section>
  </header>
  )
}

export default Header
import React, { useEffect, useState } from 'react'
import FooterHome from '../../Layouts/FooterHome'
import NavbarHome from '../../Layouts/NavbarHome'
import ImgCar from '../../../assets/images/img_car.png'
import Key from '../../../assets/icons/Key_Icon.png'
import Clock from '../../../assets/icons/Clock_Icon.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchResult() {
const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCar();
  }, []);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const getCar = async () => {
    try {
      const res = await axios.get(
        "https://rent-car-appx.herokuapp.com/admin/car"
      );
      setListData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <div>
        <NavbarHome/>
        <header>
            <section className="cover container">
            <div className="cover-text mb-3 mt-5">
            <h1 className="fw-bold fs-4 w-75">Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
            <p className="fw-light fs-6 w-75">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </div>
            <div className="cover-img mt-5">
            <img src={ImgCar} alt="" />
            </div>
            </section>
        </header>
        <section>
        <div className='container shadow-lg p-5 mb-5 bg-body rounded search'>
            <div className="row d-flex align-items-end">
                <div className="col">
                    <label className='form-label'>Tipe Driver</label>
                    <select className="form-select form-select-md fs-6 text-secondary w-100">
                        <option value="Dengan Sopir">Dengan Sopir</option>
                        <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                </div>
                <div className="col">
                    <label className='form-label'>Tanggal</label>
                    <input type="date" className='form-control'/>
                </div>
                <div className="col">
                    <label className='form-label'>Waktu Jemput/Ambil</label>
                    <select className="form-select form-select-md fs-6 text-secondary w-100">
                        <option value="00:00">00.00 WIB</option>
                        <option value="01:00">01.00 WIB</option>
                        <option value="02:00">02.00 WIB</option>
                        <option value="03:00">03.00 WIB</option>
                        <option value="04:00">04.00 WIB</option>
                        <option value="05:00">05.00 WIB</option>
                        <option value="06:00">06.00 WIB</option>
                        <option value="07:00">07.00 WIB</option>
                        <option value="08:00">08.00 WIB</option>
                        <option value="09:00">09.00 WIB</option>
                        <option value="10:00">10.00 WIB</option>
                        <option value="11:00">11.00 WIB</option>
                        <option value="12:00">12.00 WIB</option>
                        <option value="13:00">13.00 WIB</option>
                        <option value="14:00">14.00 WIB</option>
                        <option value="15:00">15.00 WIB</option>
                        <option value="16:00">16.00 WIB</option>
                        <option value="17:00">17.00 WIB</option>
                        <option value="18:00">18.00 WIB</option>
                        <option value="19:00">19.00 WIB</option>
                        <option value="20:00">20.00 WIB</option>
                        <option value="21:00">21.00 WIB</option>
                        <option value="22:00">22.00 WIB</option>
                        <option value="23:00">23.00 WIB</option>
                    </select>
                </div>
                <div className="col">
                    <label className='form-label'>Jumlah Penumpang (optional)</label>
                    <input type="text" className='form-control' placeholder='Jumlah Penumpang'/>
                </div>
                <div className='col-2'>
                    <button className="btn btn-primary fw-bold w-100">Edit</button>
                </div>
            </div>
        </div>
        </section>
        <section className="content-section ps-5 pe-4">
          <div className="row">
            <div className="col-lg-0" id="show-col-lg-0">
              <div className="adding-space" style={{ width: "300px" }}></div>
            </div>
            <div className="col-lg-12" id="show-col-lg-12">
              {/* Content */}
              <div className="container">
                {/* card */}
                <div className="row">
                  {listData.map((item) => {
                    return (
                      <div className="col-4 mb-5" key={item.id} >
                        <div className="card" style={{height:"480px"}}>
                          <div className="card-body">
                            <h5 className="card-title">
                              <img className='car-size'
                                src={item.image}
                                alt="img-car"
                                style={{
                                  maxWidth: "auto",
                                  maxHeight: "190px",
                                  objectFit: 'cover'
                                }}
                              />
                            </h5>
                            <p>{item.name}</p>
                            <h6>Rp {item.price} / hari</h6>
                            <p className="card-text m-0">
                              <img src={Key} alt="icon-key" />
                              Start rent - Finish rent
                            </p>
                            <p className="card-text m-0">
                              <img src={Clock} alt="icon-clock" />
                              Updated at 4 Apr 2022, 09.00
                            </p>
                            <div
                              className="btn-group"
                              aria-label="Basic example"
                            >
                              <button
                                className="button btn btn-success" 
                                style={{width:'22vw'}}
                                onClick={() => handleDetail(item.id)}
                              >
                                Detail
                              </button>
                            </div>
                          </div>
                          {/* card */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Akhir Content */}
            </div>
          </div>
        </section>
        <FooterHome/>
    </div>
    </div>
  )
}

export default SearchResult
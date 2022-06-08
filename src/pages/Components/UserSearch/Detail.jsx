import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavbarHome from '../../Layouts/NavbarHome';
import keyIcon from '../../../assets/icons/Users_Icon.png';
import settingIcon from '../../../assets/icons/Settings_Icon.png';
import calendarIcon from '../../../assets/icons/Calendar_Icon.png';
import ReactPlayer from 'react-player';
import ModalImage from "react-modal-image";
import FooterHome from '../../Layouts/FooterHome';

function Detail() {
  const [dataDetail, setDataDetail] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleDetail();
  }, [id]);

  const handleDetail = async () => {
    try {
      const res = await axios(
        `https://rent-car-appx.herokuapp.com/admin/car/${id}`
      );
      setDataDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <NavbarHome/>
        <header>
            <section className="cover container" style={{height:'200px'}}>
            </section>
        </header>
        <section className="detail-page">
        <div className="row">
          <div className="col head"></div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              {/* ---------------------------Search Form------------------------- */}
              <section>
                <div className='container shadow-lg p-5 mb-5 bg-body rounded search'>
                    <div className="row d-flex align-items-end">
                        <div className="col">
                            <label className='form-label'>Tipe Driver</label>
                            <select className="form-select form-select-md fs-6 text-secondary w-100" disabled>
                                <option value="Dengan Sopir">Dengan Sopir</option>
                                <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="col">
                            <label className='form-label'>Tanggal</label>
                            <input type="date" className='form-control' disabled/>
                        </div>
                        <div className="col">
                            <label className='form-label'>Waktu Jemput/Ambil</label>
                            <select className="form-select form-select-md fs-6 text-secondary w-100" disabled>
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
                            <input type="text" className='form-control' placeholder='Jumlah Penumpang' disabled/>
                        </div>
                    </div>
                </div>
                </section>
              {/* -----------------End Search Form------------------- */}


              <div className="detail-section mt-4 mb-5">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row ">
                      {/*----------- Card Detail -----------------*/}
                      <div className="col-md-8">
                        <div className="card card-detail">
                          <div className="card-title mt-4 ms-4">
                            <p>
                              <strong>Tentang Paket</strong>
                            </p>
                            <div className="react-player">
                              <ReactPlayer
                                url="https://youtu.be/f5_wn8mexmM"
                                width="530px"
                                style={{marginLeft:'9vw'}}
                              />
                            </div>
                          </div>
                          <div class="card-body">
                            <p>Include</p>
                            <ul>
                              <li>
                                Apa saja yang termasuk dalam paket misal durasi
                                max 12 jam
                              </li>
                              <li>Sudah termasuk bensin selama 12 jam</li>
                              <li>Sudah termasuk Tiket Wisata</li>
                              <li>sudah termasuk pajak</li>
                            </ul>
                            <p>Exclude</p>
                            <ul>
                              <li>
                                Tidak termasuk biaya makan sopir Rp.75.000/hari
                              </li>
                              <li>
                                Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya Rp.20.000/jam
                              </li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                            <p>
                              <strong>Refund, Reschedule, Overtime</strong>
                            </p>
                            <ul>
                              <li>
                                Tidak termasuk biaya makan sopir Rp.75.000/hari
                              </li>
                              <li>
                                Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya Rp.20.000/jam
                              </li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                              <li>
                                Tidak termasuk biaya makan sopir Rp.75.000/hari
                              </li>
                              <li>
                                Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya Rp.20.000/jam
                              </li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                              <li>
                                Tidak termasuk biaya makan sopir Rp.75.000/hari
                              </li>
                              <li>
                                Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya Rp.20.000/jam
                              </li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*--------- Card Detail ------------*/}
                      <div className="col-md-4 shadow-lg p-3 mb-5 bg-body rounded" style={{height:'40vw'}}>
                        <div class="card-detail-mobil">
                          <div class="card-body">
                            <a class="card-title d-flex justify-content-center">
                              <ModalImage
                                small={dataDetail.image}
                                large={dataDetail.image}
                                alt={dataDetail.name}
                              />
                              ;
                            </a>
                            <p>
                              <strong>{dataDetail.name}</strong>
                            </p>
                            <div className="icon d-flex">
                              <p class="card-text">
                                <img
                                  className="me-1"
                                  src={keyIcon}
                                  alt="icon-key"
                                />
                                4 Orang
                              </p>
                              <p class="card-text">
                                <img
                                  className="me-1"
                                  src={settingIcon}
                                  alt="icon-clock"
                                />
                                Manual
                              </p>
                              <p class="card-text">
                                <img
                                  className="me-1"
                                  src={calendarIcon}
                                  alt="icon-clock"
                                />
                                Tahun 2020
                              </p>
                            </div>
                            <p>
                              Total{" "}
                              <span>
                                <strong>Rp.{dataDetail.price}</strong>
                              </span>
                            </p>
                            <button
                              type="button"
                              className="btn btn-success w-100"
                              onClick={() => navigate("/invoice")}
                            >
                              Lanjutkan Pembayaran
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='mt-5'>
      <FooterHome/>
      </div>
    </div>
  )
}

export default Detail
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Car_Image from '../../../assets/images/Car_Image.png';
import Key_Icon from '../../../assets/icons/Key_Icon.png';
import Clock_Icon from '../../../assets/icons/Clock_Icon.png';
import Trash_Icon from '../../../assets/icons/Trash_Icon.png';
import Edit_Icon from '../../../assets/icons/Edit_Icon.png';
import Car_Driving_llustration from '../../../assets/images/Car_Driving_llustration.png';
import Right_Icon from '../../../assets/icons/Right_Icon.png';
import Plus_Icon from '../../../assets/icons/Plus_Icon.png';

function Car() {
    const navigate = useNavigate();
    const [dataCars, setDataCars] = useState([]);


    useEffect(() => {
        document.title = "Admin | Cars";
        getDataCars();
    }, []);

    const getDataCars = async () => {
        try {
            const res = await axios.get('https://rent-car-appx.herokuapp.com/admin/car');
            setDataCars(res.data)
        } catch (error){
            console.log(error);
        }
    }
    
    return (
        <React.Fragment>

            <section className="content-section ps-5 pe-4">
                <div className="row">
                    <div class="col-xl-2 collapse show" id="collapseWidthExample">
                        <div class="adding-space" style={{width: '300px'}} />
                    </div>
                    <div className="col-lg" id="show-col-lg-12">
                        {/* <!-- List Car Start --> */}
                        <section class="list-car">
                            <div class="sub-tree d-flex mt-3">
                                <Link to="/cars">
                                    <p class="fw-bold">Cars</p>
                                </Link>
                                <img src={Right_Icon} className="mx-2 my-1" height={17} alt="" />
                                <p>List Car</p>
                            </div>

                            <div class="list-button">
                                <h2 class="fw-bold mb-4 mt-4">List Car</h2>
                                <div class="button-right">
                                        <button type="button" class="btn btn-primary add-btn" onClick={() => {
                                            navigate('addcars')
                                        }}><img src={Plus_Icon} alt='' /> Add New Car
                                        </button>
                                </div>
                            </div>

                            <div class="btn-group mt-2 mb-4">
                                <button type="button" class="btn btn-sort">All</button>
                                <button type="button" class="btn btn-sort">Small</button>
                                <button type="button" class="btn btn-sort">Medium</button>
                                <button type="button" class="btn btn-sort">Large</button>
                            </div>

                            <div class="row">
                                {dataCars.map((item) => {
                                    return(
                                        <div class="col mt-5 p-0 d-flex justify-content-center align-item-center" key={item.id}>
                                            <div class="card-list">
                                                <div class="car-img">
                                                    <img src={Car_Image} class="car-size" alt="car" />
                                                </div>
                                                <p class="m-0">{item.name}</p>
                                                <h5 class="mt-2 mb-3 fw-bold">Rp {new Intl.NumberFormat('de-DE').format(parseInt(item.price))} / hari</h5>
                                                <p class="font-weight-light"><img src={Key_Icon} class="pe-2" alt=''/>Start rent - Finish
                                                    rent</p>
                                                <p class="font-weight-light mb-4"><img src={Clock_Icon} class="pe-2" alt=''/>Updated at 4
                                                    Apr 2022, 09.00</p>

                                                <div class="d-flex justify-content-center">
                                                    <button type="button" class="btn border border-2 border-danger rounded-2 me-3 delete-btn" data-bs-toggle="modal" data-bs-target="#deleteCarModal">
                                                        <img src={Trash_Icon} class="pe-2" alt=''/>Delete
                                                    </button>
                                                    <Link to="" state={{ data: item, condition: "Edit Cars" }}>
                                                        <button type="button" class="btn btn-success edit-btn">
                                                            <img src={Edit_Icon} class="pe-2" alt=''/>Edit
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                 })}
                            </div>
                        </section>


                        <div class="modal fade" id="deleteCarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteCarModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-center d-flex justify-content-center">
                                <div class="modal-content" style={{maxWidth: '387px'}}>
                                    <div class="popup text-center">
                                        <img src={Car_Driving_llustration} width="153" alt="" />
                                        <h5>Menghapus Data Mobil</h5>
                                        <div class="content">
                                            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
                                        </div>
                                        <div class="d-flex justify-content-center mt-4">
                                            
                                            <button type="button" class="btn btn-popup-yes mx-2" data-bs-dismiss="modal">Ya</button>
                                            
                                            <button type="button" class="btn btn-popup-no mx-2" data-bs-dismiss="modal" >Tidak</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
        </React.Fragment>
    );
}

export default Car
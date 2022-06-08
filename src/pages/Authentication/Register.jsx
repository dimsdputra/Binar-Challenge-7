import axios from 'axios'
import React, { useEffect, useState } from 'react'
import carsLogin from '../../assets/images/Cars_Login_Image.png';
import BCRLogo from '../../assets/images/BCR_Logo.png';
import { Link } from 'react-router-dom';

function Register() {
  const [dataRegister, setDataRegister] = useState({
    email: '',
    password: '',
    role: 'Customer'
  })

  useEffect(() => {
    document.title = 'Register | Binar Rental Cars'
  }, [])

  const createUserRegister = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://rent-car-appx.herokuapp.com/admin/auth/register',
        data: dataRegister
      })
      if(res.status === 201){
        alert('Success, Please Login To Continue The Page')
      }
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        alert("Email already exists");
      }
    }
  }
  return (
    <React.Fragment>
            <div className="container-fluid">
                {/* <!-- Login Start --> */}
                <section className="login-admin-section">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 p-0 hidden-on-small-size">
                            <img src={carsLogin} className="cars-baner w-100 vh-100" alt="cars" />
                        </div>
                        <div className="col-lg-4 col-md-6 px-0 py-5 d-flex flex-column align-items-center mt-auto mb-auto">
                            <div className="form-container" style={{maxWidth: "400px"}}>
                                <div className="form-head">
                                    <img src={BCRLogo} alt="logo BCR" />
                                    <h1>Create new Account</h1>
                                </div>
                                <div className="form-content">
                                    <div className="mb-3">
                                        <label for="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail"
                                            placeholder="Contoh: Dimas@gmail.com" onChange={(e) => {
                                                setDataRegister({
                                                    ...dataRegister,
                                                    email: e.target.value
                                                })
                                            }} required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="inputPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" placeholder="6+ karakter" onChange={(e) => {
                                            setDataRegister({
                                                ...dataRegister,
                                                password: e.target.value
                                            })
                                        }} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary form-control" onClick={() => createUserRegister()}>Sign Up</button>

                                    <div className="redirect-login mt-2">Already have an account? <strong><Link to={'/login'} style={{color: 'blue', textDecoration: 'none'}}>Sign In</Link></strong></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Login End --> */}
            </div>
        </React.Fragment>
  )
}

export default Register
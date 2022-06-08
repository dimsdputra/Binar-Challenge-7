import React, { useEffect, useState } from 'react'
import carsLogin from '../../assets/images/Cars_Login_Image.png';
import BCRLogo from '../../assets/images/BCR_Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [dataLogin, setDataLogin] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        document.title = 'Login | Binar Rental Car'
        if(localStorage.getItem('access_token')){
            navigate('/')
        }
    }, [])

    const navigate = useNavigate()

    const userLogin = async () => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'https://rent-car-appx.herokuapp.com/admin/auth/login',
                data: dataLogin
            })
            if (res.status === 201){
                localStorage.setItem("access_token", res.data.access_token)
                if(res.data.role === "admin"){
                    navigate('/dashboard')
                }else {
                    navigate('/')
                }
            }
        } catch (error) {
            if (error.response.status === 400) {
                alert('Password Wrong!')
            }if (error.response.status === 404) {
                alert('Email Not Foound')
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
                        <div className="col-lg-4 col-md-6 px-0 py-5 d-flex flex-column mt-auto mb-auto align-items-center">
                            <div className="form-container" style={{maxWidth: "350px"}}>
                                <div className="form-head">
                                    <img src={BCRLogo} alt="logo BCR" />
                                    <h1>Welcome, Admin BCR</h1>
                                </div>
                                <div className="form-content">
                                    <div className="mb-3">
                                        <label for="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail"
                                            placeholder="Contoh: johndee@gmail.com" onChange={(e) => {
                                                setDataLogin({
                                                    ...dataLogin,
                                                    email: e.target.value
                                                })
                                            }} required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="inputPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" placeholder="6+ karakter" onChange={(e) => {
                                            setDataLogin({
                                                ...dataLogin,
                                                password: e.target.value
                                            })
                                        }} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary form-control" onClick={() => userLogin()}>Sign In</button>

                                    <div className="redirect-login mt-2">Don't have an account? <strong><Link to={'/register'} style={{color: 'blue', textDecoration: 'none'}}>Sign Up</Link></strong></div>

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

export default Login
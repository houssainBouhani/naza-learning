import React, { useEffect, useState } from 'react'

//react router link
import { Link } from 'react-router-dom'


//handle form
import { Formik } from "formik";
import * as yup from "yup";

//input component
import { TextField } from '../TextField'

import { useNavigate } from "react-router-dom";
//REDUX action
import { useDispatch, useSelector } from "react-redux";
//action creator
import { login } from '../../../store/actions/auth/auth';



const schema = yup.object().shape({
  email: yup.string().email("email est invalide").required("Email est requis"),
  password: yup
    .string()
    .required("le mot de passe est requis")
    .min(6, "le Mot de passe doit comporter au moins 6 caractères"),
});

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  //user is logged or not
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const loading = useSelector((state) => state.authReducer.loading);

  
  useEffect(() => {
    setUserLoggedIn(isLoggedIn);
    
    if (userLoggedIn) {
      navigate(`/`);
    }

    
  }, [isLoggedIn, userLoggedIn]);

  const onLogin  = (e,values) => {
    e.preventDefault();
  //get userdata
  const userData = {
    username: values.email,
    password: values.password
  };
  dispatch(login(userData));

  

 }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={(values,e) => {
        console.log(values);
      }}
    >
      {({
         values,
         isValid,
         dirty
      }) => (
        <div id="db-wrapper">

          <div className="d-flex flex-column container mt-5">
            <div className="align-items-center justify-content-center g-0 min-vh-100 row">
              <div className="py-8 py-xl-0 col-lg-5 col-md-5">
                <div className="card">
                  <div className="p-6 card-body">
                    <div className="mb-5 d-flex justify-content-center align-items-center flex-column">
                      <img
                        src={require("../../../assets/images/logo.png")}
                        alt="logo"
                        className="mb-4 logo-size"
                      />
                      <h1 className="mb-1 fw-bold">S'identifier</h1>
                      <span>
                      Vous n'avez pas de compte ? 
                        <Link className="ms-1" to={"/auth/register"}>
                        S'inscrire
                        </Link>
                      </span>
                    </div>
                    <form noValidate>
                      <div className="row">

                        <div className="mb-3 col-lg-12 col-md-12">
                          <TextField
                            label="Email"
                            placeholder="Adresse e-mail"
                            name="email"
                            type="email"
                          />
                        </div>


                        <div className="mb-3 col-lg-12 col-md-12">
                          <TextField
                            label="Mot de passe"
                            placeholder="Mot de passe"
                            name="password"
                            type="password"
                          />
                        </div>
                        <div className="mb-0 d-grid gap-2 col-lg-12 col-md-12">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!(isValid && dirty)}
                            onClick={(e)=> onLogin(e,values)}
                          >
                            s'identifier
                          </button>
                        </div>
                      </div>
                    </form>

                    <hr className="my-4" />
                    <div className="mt-4 text-center"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default Login
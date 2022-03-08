import React, { useEffect, useState } from "react";
//react router link
import { Link } from "react-router-dom";

//handle form
import { Formik } from "formik";
import * as yup from "yup";

// input
import { TextField } from "../TextField";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//REDUX action
import { useDispatch, useSelector } from "react-redux";
//action creator
import { register } from "../../../store/actions/auth/auth";

const schema = yup.object().shape({
  userName: yup.string().required("Nom d'utilisateur est requis"),
  email: yup.string().email("email est invalide").required("Email est requis"),
  number: yup
    .string()
    .min(8, "le numéro de téléphone doit comporter au moins 8 chiffres")
    .max(10, "le numéro de téléphone ne peut pas dépasser 10 chiffres")
    .required("Numéro de téléphone est requis"),
  password: yup
    .string()
    .required("le mot de passe est requis")
    .min(6, "le mot de passe doit comporter au moins  6 caractères"),
  terms: yup
    .bool()
    .required()
    .oneOf([true], "les conditions et la politique doivent être acceptées"),
});

const FormRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userRegistred, setUserRegistred] = useState(false);

  //user is registred or not
  const isRegistred = useSelector((state) => state.authReducer.isRegistred);
  const loading = useSelector((state) => state.authReducer.loading);

  useEffect(() => {
    setUserRegistred(isRegistred);
    
    if (userRegistred) {
      navigate(`/auth/login`);
    }
  }, [isRegistred, userRegistred]);

  const onRegister = (e, values) => {
    e.preventDefault();
    //get userdata
    const userData = {
      username: values.userName,
      email: values.email,
      plainPassword: values.password,
      phone: values.number,
    };
    dispatch(register(userData));
  };


 const  showSpiner = () => {
    return (
      loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">
            Loading...
          </span>
        </Spinner>
      ) : (
        <p>s'inscrire</p>
      )
    )
  }

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        number: "",
        password: "",
        terms: false,
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        console.log(values);
      }}
    >
      {({ values, isValid, dirty }) => (
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
                      <h1 className="mb-1 fw-bold">S'inscrire</h1>
                      <span>
                        Vous avez déjà un compte?
                        <Link className="ms-1" to={"/auth/login"}>
                          S'identifier
                        </Link>
                      </span>
                    </div>
                    <form noValidate>
                      <div className="row">
                        <div className="mb-3 col-lg-12 col-md-12">
                          <TextField
                            label=" Nom d'utilisateur"
                            placeholder="Nom d'utilisateur"
                            name="userName"
                            type="text"
                          />
                        </div>
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
                            label="Numéro de téléphone"
                            placeholder="Numéro de téléphone"
                            name="number"
                            type="text"
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
                        <div className="mb-3 col-lg-12 col-md-12">
                          <div className="form-check">
                            <TextField name="terms" type="checkbox" />

                            <label
                              htmlFor="check-api-checkbox"
                              className="form-check-label"
                            >
                              J'accepte &nbsp;
                              <Link to={"/pages/terms-and-conditions"}>
                                les conditions d'utilisation &nbsp;
                              </Link>
                              et
                              <Link to={"/pages/terms-and-conditions"}>
                                &nbsp; la politique de confidentialité.
                              </Link>
                            </label>
                          </div>
                        </div>
                        <div className="mb-0 d-grid gap-2 col-lg-12 col-md-12">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!(isValid && dirty) || loading}
                            onClick={(e) => onRegister(e, values)}
                          >
                            {showSpiner()}
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
  );
};

const Register = () => {
  return <FormRegister />;
};

export default Register;

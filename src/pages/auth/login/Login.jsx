import React from 'react'

//react router link
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <div id="db-wrapper">
      <div className="d-flex flex-column container">
        <div
          className="align-items-center justify-content-center g-0 min-vh-100 row"
        >
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
                  <span
                  >Vous n'avez pas de compte&nbsp;?<Link
                    className="ms-1"
                    to="/auth/register"
                  >
                      S'inscrire </Link>
                  </span>
                </div>
                <form className="">
                  <div className="row">
                    <div className="mb-3 col-lg-12 col-md-12">
                      <label className="form-label"
                      >E-mail </label
                      ><input
                        placeholder="Adresse e-mail "
                        required="true"
                        type="email"
                        id="email"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12">
                      <label className="form-label">Mot de passe</label>
                      <input
                        placeholder="Mot de passe"
                        required="true"
                        type="password"
                        id="password"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12">
                      <div
                        className="d-md-flex justify-content-between align-items-center"
                      >
                        <div className="mb-3 mb-md-0"></div>
                        <a href="/authentication/forget-password"
                        >Mot de passe oublié?</a
                        >
                      </div>
                    </div>
                    <div className="mb-0 d-grid gap-2 col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
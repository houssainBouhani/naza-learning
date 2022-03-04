import React from 'react'
//react router link
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div id="db-wrapper">
    <div className="d-flex flex-column container">
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
                         S'identifier</Link>
                      </span>
                   </div>
                   <form>
                      <div className="row">
                         <div className="mb-3 col-lg-12 col-md-12"><label className="form-label">Nom d'utilisateur</label><input placeholder="Nom d'utilisateur" required="" type="text" id="username" className="form-control" /></div>
                         <div className="mb-3 col-lg-12 col-md-12"><label className="form-label">Email </label><input placeholder="Adresse e-mail " required="" type="email" id="email" className="form-control" /></div>
                         <div className="mb-3 col-lg-12 col-md-12"><label className="form-label">Numéro de téléphone </label><input placeholder="Numéro de téléphone" required="" type="number" id="téléphone" className="form-control" /></div>
                        
                         <div className="mb-3 col-lg-12 col-md-12"><label className="form-label">Mot de passe</label><input placeholder="Mot de passe" required="" type="password" id="password" className="form-control" /></div>
                         <div className="mb-3 col-lg-12 col-md-12">
                            <div className="form-check">
                               <input type="checkbox" id="check-api-checkbox" className="form-check-input" />
                               <label htmlFor="check-api-checkbox" className="form-check-label">
                                  J'accepte   &nbsp;
                                  <Link to={"/pages/terms-and-conditions"}>
                                  les conditions d'utilisation &nbsp;</Link>
                                     et 
                                  <Link to={"/pages/terms-and-conditions"}>
                                  &nbsp;  la politique de confidentialité.
                                  </Link>
                               </label>
                            </div>
                         </div>
                         <div className="mb-0 d-grid gap-2 col-lg-12 col-md-12"><button type="submit" className="btn btn-primary">s'identifier</button></div>
                      </div>
                   </form>
                   <hr className="my-4" />
                   <div className="mt-4 text-center">   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default Register
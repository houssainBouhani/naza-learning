import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white navbar p-2 navbar-default py-2 navbar navbar-expand-lg navbar-light">
      <div className="px-0 ps-2 container-fluid">
        <a className="navbar-brand" href="/"><img src={require("../../assets/images/logo.png")} style={{ maxWidth: "115px" }} alt="logo" /></a>
        <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
          <span className="icon-bar top-bar mt-0" /><span className="icon-bar middle-bar" /><span className="icon-bar bottom-bar" /></button>
        <div className="navbar-collapse collapse" id="basic-navbar-nav">
          <form className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center"><span className="position-absolute ps-3 search-icon"><i className="fe fe-search" /></span><input placeholder="Rechercher des cours" type="Search" id="formSearch" className="ps-6 form-control" /></form>
          <div className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap navbar-nav">
            <span className="ms-auto mt-3 mt-lg-0  d-block me-5"><a className="btn btn-white shadow-sm me-2 btn" href="/">s'identifier</a><a className="btn btn-primary shadow-sm btn" href="/">S'inscrire</a></span>
            <span className="d-flex">
              <div className="mt-2 me-0 dropdown nav-item">
                <a id="dropdownNotification" aria-expanded="false" className="text-dark icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted dt nav-link" tabIndex={0} href="/"><i className="fe fe-bell" /></a>
                <div data-bs-popper="static" className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end mt-4 py-0 dropdown-menu dropdown-menu-end" aria-labelledby="dropdownNotification">
                  <div className="border-bottom px-3 pt-3 pb-3 d-flex justify-content-between align-items-end"><span className="h4 mb-0">Notifications</span></div>
                  <div data-simplebar="init" style={{ maxHeight: '300px' }}>
                    <div className="simplebar-wrapper" style={{ margin: '0px' }}>
                      <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer" />
                      </div>
                      <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                          <div className="simplebar-content-wrapper" tabIndex={0} aria-label="scrollable content" style={{ height: 'auto', overflow: 'hidden scroll' }}>
                            <div className="simplebar-content" style={{ padding: '0px' }}>
                              <div className="list-group list-group-flush">
                                <div className=" bg-light list-group-item">
                                  <div className="row">
                                    <div className="col">
                                      <a className="text-body" href="/">
                                        <div className="d-flex">
                                          <img src={require("../../assets/images/avatar-2.jpg")} alt="" className="avatar-md rounded-circle" />
                                          <div className="ms-3">
                                            <h5 className="fw-bold mb-1">Brooklyn Simmons</h5>
                                            <p className="mb-3">Je viens de lancer un nouveau cours React for Beginner.</p>
                                            <span className="fs-6 text-muted"><span><span className="fe fe-thumbs-up text-success me-1" />Oct 9,</span><span className="ms-1">1:20 PM</span></span>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="col-auto text-center me-2 col"><a href="/"><span className="me-2"><span className="badge-dot badge bg-secondary" /> </span></a></div>
                                  </div>
                                </div>
                                <div className="list-group-item">
                                  <div className="row">
                                    <div className="col">
                                      <a className="text-body" href="/">
                                        <div className="d-flex">
                                          <img src={require("../../assets/images/avatar-3.jpg")} alt="" className="avatar-md rounded-circle" />
                                          <div className="ms-3">
                                            <h5 className="fw-bold mb-1">Jenny Wilson</h5>
                                            <p className="mb-3">Krisitn Watsan aime votre commentaire sur le cours Javascript Introduction !</p>
                                            <span className="fs-6 text-muted"><span><span className="fe fe-thumbs-up text-success me-1" />Oct 9,</span><span className="ms-1">1:56 PM</span></span>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="col-auto text-center me-2 col"><a href="/"><span className="me-2"><span className="badge-dot badge bg-secondary" /> </span></a></div>
                                  </div>
                                </div>
                                <div className="list-group-item">
                                  <div className="row">
                                    <div className="col">
                                      <a className="text-body" href="/">
                                        <div className="d-flex">
                                          <img src={require("../../assets/images/avatar-4.jpg")} alt="" className="avatar-md rounded-circle" />
                                          <div className="ms-3">
                                            <h5 className="fw-bold mb-1">Sina Ray</h5>
                                            <p className="mb-3">Vous gagnez un nouveau certificat pour avoir suivi le cours Javascript Beginner.</p>
                                            <span className="fs-6 text-muted"><span><span className="fe fe-thumbs-up text-success me-1" />Oct 9,</span><span className="ms-1">1:56 PM</span></span>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="col-auto text-center me-2 col"><a href="/"><span className="me-2"><span className="badge-dot badge bg-secondary" /> </span></a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="simplebar-placeholder" style={{ width: 'auto', height: '581px' }} />
                    </div>
                    <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                      <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }} />
                    </div>
                    <div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}>
                      <div className="simplebar-scrollbar" style={{ height: '154px', transform: 'translate3d(0px, 146px, 0px)', display: 'block' }} />
                    </div>
                  </div>
                  <div className="border-top px-3 pt-3 pb-3"><a className="text-link fw-semi-bold" href="/authentication/notifications">Voir toutes les notifications</a></div>
                </div>
              </div>
              <div className="dropdown nav-item">
                <a id="dropdownUser" aria-expanded="false" className="rounded-circle border-bottom-0 dt nav-link" tabIndex={0} href="/">
                  <div className="avatar avatar-md avatar-indicators avatar-online"><img alt="avatar" src={require("../../assets/images/avatar-nav.jpg")} className="rounded-circle" /></div>
                </a>
                <div data-bs-popper="static" className="dashboard-dropdown dropdown-menu-end mt-4 py-0 dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
                  <a data-rr-ui-dropdown-item className="mt-3 dropdown-item" tabIndex={0} href="/">
                    <div className="d-flex">
                      <div className="avatar avatar-md avatar-indicators avatar-online"><img alt="avatar" src={require("../../assets/images/avatar-nav.jpg")} className="rounded-circle" /></div>
                      <div className="ms-3 lh-1">
                        <h5 className="mb-1">Annette Black</h5>
                        <p className="mb-0 text-muted">annette@geeksui.com</p>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a className="dropdown-item" href="/">
                    <i className="fe fe-user me-2" /> Profile</a>
                  <a className="dropdown-item" href="/">
                    <i className="fe fe-star me-2" /> Abonnement</a>
                  <a className="dropdown-item" href="/">
                    <i className="fe fe-settings me-2" /> paramètres</a>
                  <hr className="dropdown-divider" />
                  <a className="mb-3 dropdown-item" href="/"><i className="fe fe-power me-2" /> Se déconnecter</a>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
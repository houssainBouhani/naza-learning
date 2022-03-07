import React, { useState } from "react";

//modal
import Modals from "../../../components/modal/Modals";

const Users = () => {
  const [modalShow, setModalShow] = useState(false);
  const [msg, setMsg] = useState({
    message: "",
    type: "",
  });

  const onConfirmStudent = () => {
    setModalShow(true);
    setMsg({ type: "confirm", message: "Vous Êtes sûr d'accepter cet utilisateur ?" });
  };

  const onDeleteStudent = () => {
    setModalShow(true);
    setMsg({ type: "reject", message: "Vous Êtes sûr de rejeter cet utilisateur ?" });
  };

  return (
    <div className="mb-5  card">
      <div className="p-0 card-body">
        <div className=" overflow-hidden">
          <div className="row">
            <div className="mb-lg-0 mb-2 px-5 py-4 col-lg-12 col-md-12 col-sm-12">
              <input
                type="search"
                className="form-control"
                placeholder="Rechercher des étudiants"
              />
            </div>
          </div>
        </div>
        <div className="table-responsive ">
          <table role="table" className="text-nowrap table">
            <thead className="table-light">
              <tr role="row">
                <th colSpan={1} role="columnheader">
                  NOM
                </th>
                <th colSpan={1} role="columnheader">
                  REJOINT À
                </th>
                <th colSpan={1} role="columnheader" className="text-center">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              <tr role="row">
                <td role="cell">
                  <div className="d-flex align-items-center">
                    <img
                      src={require("../../../assets/images/avatar-3.jpg")}
                      alt="avatar"
                      className="rounded-circle avatar-md me-2"
                    />
                    <h5 className="mb-0">Reva Yokk</h5>
                  </div>
                </td>
                <td role="cell">7 July, 2020</td>
                <td role="cell">
                  <div className="d-flex justify-content-center border-top-0">
                    <a
                      role="button"
                      className="btn-sm btn btn-success me-2"
                      onClick={() => onConfirmStudent()}
                    >
                      Accepter
                    </a>
                    <a
                      role="button"
                      className="btn-outline-white btn-sm btn btn-outline"
                      onClick={() => onDeleteStudent()}
                    >
                      Rejeter
                    </a>
                  </div>
                </td>
              </tr>
              <tr role="row">
                <td role="cell">
                  <div className="d-flex align-items-center">
                    <img
                      src={require("../../../assets/images/avatar-4.jpg")}
                      alt="avatar"
                      className="rounded-circle avatar-md me-2"
                    />
                    <h5 className="mb-0">Dianna Smiley</h5>
                  </div>
                </td>
                <td role="cell">6 July, 2020</td>
                <td role="cell">
                  <div className="d-flex justify-content-center border-top-0">
                    <a
                      role="button"
                      href="#"
                      className="btn-sm btn btn-success me-2"
                    >
                      Accepter
                    </a>
                    <a
                      role="button"
                      href="#"
                      className="btn-outline-white btn-sm btn btn-outline"
                    >
                      Rejeter
                    </a>
                  </div>
                </td>
              </tr>
              <tr role="row">
                <td role="cell">
                  <div className="d-flex align-items-center">
                    <img
                      src={require("../../../assets/images/avatar-5.jpg")}
                      alt="avatar"
                      className="rounded-circle avatar-md me-2"
                    />
                    <h5 className="mb-0">Nia Sikhone</h5>
                  </div>
                </td>
                <td role="cell">12 June, 2020</td>
                <td role="cell">
                  <div className="d-flex justify-content-center border-top-0">
                    <a
                      role="button"
                      href="#"
                      className="btn-sm btn btn-success me-2"
                    >
                      Accepter
                    </a>
                    <a
                      role="button"
                      href="#"
                      className="btn-outline-white btn-sm btn btn-outline"
                    >
                      Rejeter
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="pb-5">
              <nav>
                <ul className="justify-content-center mb-0 pagination">
                  <li className="page-item">
                    <button
                      type="button"
                      className="page-link mx-1 rounded btn btn-primary"
                    >
                      <i className="fe fe-chevron-left" />
                    </button>
                  </li>
                  <li className="page-item active page-item">
                    <button
                      type="button"
                      className="page-link mx-1 rounded btn btn-primary"
                    >
                      1
                    </button>
                  </li>
                  <li className="page-item  page-item">
                    <button
                      type="button"
                      className="page-link mx-1 rounded btn btn-primary"
                    >
                      2
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      type="button"
                      className="page-link mx-1 rounded btn btn-primary"
                    >
                      <i className="fe fe-chevron-right" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Modals show={modalShow} modal={msg} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Users;

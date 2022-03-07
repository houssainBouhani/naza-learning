import React from "react";

//react router

import { Link } from "react-router-dom";

//carousel
import Slider from "react-slick";

const CoursesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      {" "}
      <Slider {...settings} className="container">
        <div
          className="item px-md-1"
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="mb-4 card-hover mx-2 card">
            <a href="/">
              <img
                src={require("../../../../assets/images/course-laravel.jpg")}
                alt=""
                className="card-img-top rounded-top-md"
              />
            </a>
            <div className="card-body">
              <h3 className="h4 mb-2 text-truncate-line-2 ">
                <Link className="text-inherit" to={"courses/1"}>
                  {" "}
                  GraphQL : introduction à graphQL pour les débutants
                </Link>
              </h3>
              <ul className="mb-3 list-inline">
                <li className="list-inline-item">
                  <i className="far fa-clock me-1" />
                  2h 40m
                </li>
                <li className="list-inline-item">
                  <svg
                    className="me-1 mt-n1"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={3}
                      y={8}
                      width={2}
                      height={6}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={7}
                      y={5}
                      width={2}
                      height={9}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={11}
                      y={2}
                      width={2}
                      height={12}
                      rx={1}
                      fill="#754FFE"
                    />
                  </svg>
                  Advance
                </li>
              </ul>
              <div className="lh-1 d-flex align-items-center ">
                <span className="text-warning me-1 mb-1">
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                </span>
                <span className="text-warning me-1"> 2.5</span>
                <span className="fs-6 text-muted"> (1,500)</span>
              </div>
              <div className="lh-1 mt-3 ">
                <span className="text-dark fw-bold">$500</span>
                <del className="fs-6 text-muted">$600</del>
              </div>
            </div>
            <div className="card-footer">
              <div className="align-items-center g-0 row">
                <div className="col-auto col">
                  <img
                    src={require("../../../../assets/images/avatar-nav.jpg")}
                    alt=""
                    className="rounded-circle avatar-xs"
                  />
                </div>
                <div className="col ms-2 col">
                  <span>Brooklyn Simmons</span>
                </div>
              </div>
              <span className="d-none">
                {" "}
                <div className="mt-3 progress" style={{ height: "5px" }}>
                  <div
                    role="progressbar"
                    className="progress-bar bg-success"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div
          className="item px-md-1"
          tabIndex={-1}
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="mb-4 card-hover mx-2 card">
            <a href="/">
              <img
                src={require("../../../../assets/images/course-javascript.jpg")}
                alt=""
                className="card-img-top rounded-top-md"
              />
            </a>
            <div className="card-body">
              <h3 className="h4 mb-2 text-truncate-line-2 ">
                <Link className="text-inherit" to={"courses/2"}>
                  {" "}
                  Un guide complet du débutant sur JavaScript
                </Link>
              </h3>
              <ul className="mb-3 list-inline">
                <li className="list-inline-item">
                  <i className="far fa-clock me-1" />
                  2h 40m
                </li>
                <li className="list-inline-item">
                  <svg
                    className="me-1 mt-n1"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={3}
                      y={8}
                      width={2}
                      height={6}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={7}
                      y={5}
                      width={2}
                      height={9}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={11}
                      y={2}
                      width={2}
                      height={12}
                      rx={1}
                      fill="#754FFE"
                    />
                  </svg>
                  Advance
                </li>
              </ul>
              <div className="lh-1 d-flex align-items-center ">
                <span className="text-warning me-1 mb-1">
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                </span>
                <span className="text-warning me-1"> 2.5</span>
                <span className="fs-6 text-muted"> (1,500)</span>
              </div>
              <div className="lh-1 mt-3 ">
                <span className="text-dark fw-bold">$500</span>{" "}
                <del className="fs-6 text-muted">$600</del>
              </div>
            </div>
            <div className="card-footer">
              <div className="align-items-center g-0 row">
                <div className="col-auto col">
                  <img
                    src={require("../../../../assets/images/avatar-2.jpg")}
                    alt=""
                    className="rounded-circle avatar-xs"
                  />
                </div>
                <div className="col ms-2 col">
                  <span>Brooklyn Simmons</span>
                </div>
              </div>
              <span className="d-none">
                {" "}
                <div className="mt-3 progress" style={{ height: "5px" }}>
                  <div
                    role="progressbar"
                    className="progress-bar bg-success"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div
          className="item px-md-1"
          tabIndex={-1}
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="mb-4 card-hover mx-2 card">
            <a href="/">
              <img
                src={require("../../../../assets/images/course-node.jpg")}
                alt=""
                className="card-img-top rounded-top-md"
              />
            </a>
            <div className="card-body">
              <h3 className="h4 mb-2 text-truncate-line-2 ">
                <Link className="text-inherit" to={"courses/3"}>
                  {" "}
                  Laravel : Le guide ultime du débutant pour apprendre Laravel
                  étape par étape
                </Link>
              </h3>
              <ul className="mb-3 list-inline">
                <li className="list-inline-item">
                  <i className="far fa-clock me-1" />
                  2h 40m
                </li>
                <li className="list-inline-item">
                  <svg
                    className="me-1 mt-n1"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={3}
                      y={8}
                      width={2}
                      height={6}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={7}
                      y={5}
                      width={2}
                      height={9}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={11}
                      y={2}
                      width={2}
                      height={12}
                      rx={1}
                      fill="#754FFE"
                    />
                  </svg>
                  Advance
                </li>
              </ul>
              <div className="lh-1 d-flex align-items-center ">
                <span className="text-warning me-1 mb-1">
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                </span>
                <span className="text-warning me-1"> 2.5</span>
                <span className="fs-6 text-muted"> (1,500)</span>
              </div>
              <div className="lh-1 mt-3 ">
                <span className="text-dark fw-bold">$500</span>{" "}
                <del className="fs-6 text-muted">$600</del>
              </div>
            </div>
            <div className="card-footer">
              <div className="align-items-center g-0 row">
                <div className="col-auto col">
                  <img
                    src={require("../../../../assets/images/avatar-3.jpg")}
                    alt=""
                    className="rounded-circle avatar-xs"
                  />
                </div>
                <div className="col ms-2 col">
                  <span>Brooklyn Simmons</span>
                </div>
              </div>
              <span className="d-none">
                {" "}
                <div className="mt-3 progress" style={{ height: "5px" }}>
                  <div
                    role="progressbar"
                    className="progress-bar bg-success"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div
          className="item px-md-1"
          tabIndex={-1}
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="mb-4 card-hover mx-2 card">
            <a href="/">
              <img
                src={require("../../../../assets/images/course-react.jpg")}
                alt=""
                className="card-img-top rounded-top-md"
              />
            </a>
            <div className="card-body">
              <h3 className="h4 mb-2 text-truncate-line-2 ">
                <Link className="text-inherit" to={"courses/4"}>
                  {" "}
                  Comment créer facilement un site web avec React
                </Link>
              </h3>
              <ul className="mb-3 list-inline">
                <li className="list-inline-item">
                  <i className="far fa-clock me-1" />
                  2h 40m
                </li>
                <li className="list-inline-item">
                  <svg
                    className="me-1 mt-n1"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={3}
                      y={8}
                      width={2}
                      height={6}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={7}
                      y={5}
                      width={2}
                      height={9}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={11}
                      y={2}
                      width={2}
                      height={12}
                      rx={1}
                      fill="#754FFE"
                    />
                  </svg>
                  Advance
                </li>
              </ul>
              <div className="lh-1 d-flex align-items-center ">
                <span className="text-warning me-1 mb-1">
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                </span>
                <span className="text-warning me-1"> 2.5</span>
                <span className="fs-6 text-muted"> (1,500)</span>
              </div>
              <div className="lh-1 mt-3 ">
                <span className="text-dark fw-bold">$500</span>{" "}
                <del className="fs-6 text-muted">$600</del>
              </div>
            </div>
            <div className="card-footer">
              <div className="align-items-center g-0 row">
                <div className="col-auto col">
                  <img
                    src={require("../../../../assets/images/avatar-5.jpg")}
                    alt=""
                    className="rounded-circle avatar-xs"
                  />
                </div>
                <div className="col ms-2 col">
                  <span>Brooklyn Simmons</span>
                </div>
              </div>
              <span className="d-none">
                {" "}
                <div className="mt-3 progress" style={{ height: "5px" }}>
                  <div
                    role="progressbar"
                    className="progress-bar bg-success"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div
          className="item px-md-1"
          tabIndex={-1}
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="mb-4 card-hover mx-2 card">
            <a href="/">
              <img
                src={require("../../../../assets/images/course-wordpress.jpg")}
                alt=""
                className="card-img-top rounded-top-md"
              />
            </a>
            <div className="card-body">
              <h3 className="h4 mb-2 text-truncate-line-2 ">
                <Link className="text-inherit" to={"courses/5"}>
                  {" "}
                  Cours complet HTML - Créer un didacticiel de site Web
                </Link>
              </h3>
              <ul className="mb-3 list-inline">
                <li className="list-inline-item">
                  <i className="far fa-clock me-1" />
                  2h 40m
                </li>
                <li className="list-inline-item">
                  <svg
                    className="me-1 mt-n1"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={3}
                      y={8}
                      width={2}
                      height={6}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={7}
                      y={5}
                      width={2}
                      height={9}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={11}
                      y={2}
                      width={2}
                      height={12}
                      rx={1}
                      fill="#754FFE"
                    />
                  </svg>
                  Advance
                </li>
              </ul>
              <div className="lh-1 d-flex align-items-center ">
                <span className="text-warning me-1 mb-1">
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                </span>
                <span className="text-warning me-1"> 2.5</span>
                <span className="fs-6 text-muted"> (1,500)</span>
              </div>
              <div className="lh-1 mt-3 ">
                <span className="text-dark fw-bold">$500</span>{" "}
                <del className="fs-6 text-muted">$600</del>
              </div>
            </div>
            <div className="card-footer">
              <div className="align-items-center g-0 row">
                <div className="col-auto col">
                  <img
                    src={require("../../../../assets/images/avatar-7.jpg")}
                    alt=""
                    className="rounded-circle avatar-xs"
                  />
                </div>
                <div className="col ms-2 col">
                  <span>Brooklyn Simmons</span>
                </div>
              </div>
              <span className="d-none">
                {" "}
                <div className="mt-3 progress" style={{ height: "5px" }}>
                  <div
                    role="progressbar"
                    className="progress-bar bg-success"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div
          className="item px-md-1"
          tabIndex={-1}
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="mb-4 card-hover mx-2 card">
            <a href="/">
              <img
                src={require("../../../../assets/images/course-html.jpg")}
                alt=""
                className="card-img-top rounded-top-md"
              />
            </a>
            <div className="card-body">
              <h3 className="h4 mb-2 text-truncate-line-2 ">
                <Link className="text-inherit" to={"courses/6"}>
                  {" "}
                  Wordpress : développement complet du thème et du plugin
                  WordPress
                </Link>
              </h3>
              <ul className="mb-3 list-inline">
                <li className="list-inline-item">
                  <i className="far fa-clock me-1" />
                  2h 40m
                </li>
                <li className="list-inline-item">
                  <svg
                    className="me-1 mt-n1"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={3}
                      y={8}
                      width={2}
                      height={6}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={7}
                      y={5}
                      width={2}
                      height={9}
                      rx={1}
                      fill="#754FFE"
                    />
                    <rect
                      x={11}
                      y={2}
                      width={2}
                      height={12}
                      rx={1}
                      fill="#754FFE"
                    />
                  </svg>
                  Advance
                </li>
              </ul>
              <div className="lh-1 d-flex align-items-center ">
                <span className="text-warning me-1 mb-1">
                  {" "}
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  >
                    <path
                      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                      style={{ fill: "currentcolor" }}
                    />
                  </svg>
                </span>
                <span className="text-warning me-1"> 2.5</span>
                <span className="fs-6 text-muted"> (1,500)</span>
              </div>
              <div className="lh-1 mt-3 ">
                <span className="text-dark fw-bold">$500</span>{" "}
                <del className="fs-6 text-muted">$600</del>
              </div>
            </div>
            <div className="card-footer">
              <div className="align-items-center g-0 row">
                <div className="col-auto col">
                  <img
                    src={require("../../../../assets/images/avatar-4.jpg")}
                    alt=""
                    className="rounded-circle avatar-xs"
                  />
                </div>
                <div className="col ms-2 col">
                  <span>Brooklyn Simmons</span>
                </div>
              </div>
              <span className="d-none">
                <div className="mt-3 progress" style={{ height: "5px" }}>
                  <div
                    role="progressbar"
                    className="progress-bar bg-success"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CoursesSlider;

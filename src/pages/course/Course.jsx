import React from "react";

import Header from "./components/Header";

//react-bootstrap
import { Accordion, Tabs, Tab } from "react-bootstrap";

//custom css
import "./course.style.css";

const Course = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="mt-n8 mb-4 mb-lg-0 col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <Tabs
                defaultActiveKey="Contenu"
                className="nav-lb-tab nav tab-content remove-border"
              >
                <Tab
                  eventKey="Contenu"
                  title="Contenu"
                  className="pb-4 pt-3 px-4 tab-pane me-0"
                >
                  <div className="p-0 card-body">
                    <Accordion defaultActiveKey="0" className="tab-content">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Module 1</Accordion.Header>
                        <Accordion.Body>
                          <ul className="py-4 list-group">
                            <li className="px-0 py-1 border-0 list-group-item">
                              <a
                                className="d-flex justify-content-between align-items-center text-inherit text-decoration-none"
                                href="/marketing/courses/course-single/"
                              >
                                <div className="text-truncate ">
                                  <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2">
                                    <svg
                                      viewBox="0 0 24 24"
                                      role="presentation"
                                      style={{
                                        width: "1.2rem",
                                        height: "1.2rem",
                                      }}
                                    >
                                      <path
                                        d="M8,5.14V19.14L19,12.14L8,5.14Z"
                                        style={{ fill: "currentcolor" }}
                                      />
                                    </svg>{" "}
                                  </span>
                                  <span className="fs-5">Introduction</span>
                                </div>
                              </a>
                            </li>
                            <li
                              tabIndex={-1}
                              aria-disabled="true"
                              className="px-0 py-1 border-0 list-group-item disabled"
                            >
                              <a
                                className="d-flex justify-content-between align-items-center text-inherit text-decoration-none"
                                href="/marketing/courses/course-single/"
                              >
                                <div className="text-truncate ">
                                  <span className="icon-shape bg-light text-muted icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock fs-4" />{" "}
                                  </span>
                                  <span className="fs-5">
                                    Our Sample Website
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Module 2</Accordion.Header>
                        <Accordion.Body>
                        <ul className="py-4 list-group">
                            <li className="px-0 py-1 border-0 list-group-item">
                              <a
                                className="d-flex justify-content-between align-items-center text-inherit text-decoration-none"
                                href="/marketing/courses/course-single/"
                              >
                                <div className="text-truncate ">
                                  <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2">
                                    <svg
                                      viewBox="0 0 24 24"
                                      role="presentation"
                                      style={{
                                        width: "1.2rem",
                                        height: "1.2rem",
                                      }}
                                    >
                                      <path
                                        d="M8,5.14V19.14L19,12.14L8,5.14Z"
                                        style={{ fill: "currentcolor" }}
                                      />
                                    </svg>{" "}
                                  </span>
                                  <span className="fs-5">Introduction</span>
                                </div>
                              </a>
                            </li>
                            <li
                              tabIndex={-1}
                              aria-disabled="true"
                              className="px-0 py-1 border-0 list-group-item disabled"
                            >
                              <a
                                className="d-flex justify-content-between align-items-center text-inherit text-decoration-none"
                                href="/marketing/courses/course-single/"
                              >
                                <div className="text-truncate ">
                                  <span className="icon-shape bg-light text-muted icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock fs-4" />{" "}
                                  </span>
                                  <span className="fs-5">
                                    Our Sample Website
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Tab>

                <Tab eventKey="Description" title="Description"  className="pb-4 pt-3 px-4 tab-pane">
                  <div className="p-0 card-body">
                    <div class="list-group list-group-flush">
                      <div class="border-0 fs-5 px-5 py-4 list-group-item">
                        réserver une réunion
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;

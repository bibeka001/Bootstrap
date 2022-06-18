import React, { useState } from "react";
import forest from "./Image/forest.jpg";
import sea from "./Image/sea.jpg";
import road from "./Image/road.jpg";

const Bootstrap5 = () => {
  const [page, setPage] = useState(0);
  const data = [
    {
      info: [
        {
          img: forest,
          label: "First slide label",
          text: " Some representative placeholder content for the first slide.",
        },
      ],
    },
    {
      info: [
        {
          img: road,
          label: "Second slide label",
          text: " Some representative placeholder content for the first slide.",
        },
      ],
    },
    {
      info: [
        {
          img: sea,
          label: "Third slide label",
          text: " Some representative placeholder content for the first slide.",
        },
      ],
    },
    {
      info: [
        {
          img: sea,
          label: "Third slide label",
          text: " Some representative placeholder content for the first slide.",
        },
      ],
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-primary bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            dRE@M Creation
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">
                  about us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" ></button>
    <button type="button" data-bs-target="carouselExampleCaptions" data-bs-slide-to="1" ></button>
    <button type="button" data-bs-target="carouselExampleCaptions" data-bs-slide-to="2" ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={forest} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={forest} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={road} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

        <div
          style={{ width: "100%" }}
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {data.map((value, index) => {
              return (
                <>
                  <li
                    data-target="carouselExampleCaptions"
                    // data-slide-to={page}
                    className={page === index ? "active" : null}
                  ></li>
                </>
              );
            })}
            {/* 
            <li
              data-target="carouselExampleCaptions"
              data-slide-to="1"
              className={page === 1 ? "active" : null}
            ></li>
            <li
              data-target="carouselExampleCaptions"
              data-slide-to="2"
              className={page === 2 ? "active" : null}
            ></li> */}
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {data[page].info.map((item, index) => {
                return (
                  <>
                    <img
                      src={item.img}
                      className="d-block w-100"
                      alt="..."
                      key={index}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{item.label}</h5>
                      <p>{item.text}</p>
                    </div>
                  </>
                );
              })}
            </div>
            {/* <div className="carousel-item">
              <img src={road} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={sea} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="carouselExampleCaptions"
            data-slide="prev"
            onClick={() => {
              if (page !== 0) {
                setPage(page - 1);
              }
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="carouselExampleCaptions"
            data-slide="next"
            onClick={() => {
              if (page < data.length - 1) {
                setPage(page + 1);
              }
            }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Bootstrap5;

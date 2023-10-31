import React from "react"

const Header = () => {
  return (
    <div id="header" className="d-flex justify-content-between font-loader">
      <div>
        <h1 className="orange m-2">
          <strong>Эвакуатор 13</strong>
        </h1>
      </div>
      <div id="menu" className="justify-content-center text-center">
        <div className="lead fs-5 m-3">
          <a
            className="text-dark"
            style={{ textDecoration: "none" }}
            href="#prices"
          >
            Цены
          </a>
        </div>
        <div className="lead fs-5 m-3">
          <a
            className="text-dark"
            style={{ textDecoration: "none" }}
            href="#feedbacks"
          >
            Отзывы
          </a>
        </div>
        <div className="lead fs-5 m-3">
          <a
            className="text-dark"
            style={{ textDecoration: "none" }}
            href="#contacts"
          >
            Контакты
          </a>
        </div>
      </div>
      <div>
        <p>
          <a
            style={{ textDecoration: "none" }}
            href="tel:89179945927"
            className="orange lead fs-5"
          >
            <strong>8 917 994 59 27</strong>
          </a>
          <br />
          Нужна помощь на дороге?
        </p>
      </div>
    </div>
  )
}

export default Header

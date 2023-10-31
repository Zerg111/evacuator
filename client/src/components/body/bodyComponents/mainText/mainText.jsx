import React from "react"
import img1 from "./evacuator.png"

const MainText = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5 text-center font-loader animate__animated animate__fadeIn">
        <div>
          <p className="lead fs-2 fw-weight-bold">ЭКСТРЕННАЯ И ПЛАНОВАЯ</p>
          <p className="lead fs-1">
            <strong>
              Эвакуация транспорта в Саранске, Мордовии и по России
            </strong>
          </p>
          <p className="lead fs-4">
            Подача от 15 минут Стоимость от 2000 рублей Работаем круглосуточно
          </p>
          <p className="lead fs-2 orange">
            <strong className="">
              Звоните прямо сейчас:
              <pre />
              <a
                style={{ textDecoration: "none" }}
                href="tel:89179945927"
                className="orange"
              >
                8 917 994 59 27 (Александр)
              </a>
            </strong>
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <img src={img1} />
      </div>
    </>
  )
}

export default MainText

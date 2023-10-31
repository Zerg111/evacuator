import React from "react"
import passenger from "./passenger.jpg"
import offRoad from "./offRoad.png"
import minibus from "./minibus.jpg"
import specialEquipment from "./specialEquipment.png"

const ServiceCard = () => {
  return (
    <div className="">
      <h1
        id="prices"
        className="text-center m-5 wow animate__animated animate__fadeIn font-loader"
      >
        Цены на эвакуацию транспорта
      </h1>
      <div class="card-group font-loader">
        <div class="card m-2 shadow p-3 mb-5 bg-body rounded wow animate__animated animate__fadeInLeft">
          <img src={passenger} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Легковые автомобили</h5>
            <h4 class="card-text text-center mt-5">От 2000 ₽</h4>
          </div>
        </div>
        <div class="card m-2 shadow p-3 mb-5 bg-body rounded wow animate__animated animate__fadeInLeft">
          <img src={offRoad} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Внедорожники</h5>
            <h4 class="card-text text-center mt-5">От 2500 ₽</h4>
          </div>
        </div>
        <div class="card m-2 shadow p-3 mb-5 bg-body rounded wow animate__animated animate__fadeInRight">
          <img src={minibus} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Микроавтобусы</h5>
            <h4 class="card-text text-center mt-5">От 3000 ₽</h4>
          </div>
        </div>
        <div class="card m-2 shadow p-3 mb-5 bg-body rounded wow animate__animated animate__fadeInRight">
          <img src={specialEquipment} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Спецтехника до 5 тонн</h5>
            <h4 class="card-text text-center mt-5">От 4000 ₽</h4>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center m-5 wow animate__animated animate__fadeInUp">
        <div className="text-center border w-100 shadow p-3 mb-5 bg-body rounded">
          <p className="mb-5 lead fs-1">Дополнительно</p>

          <p className="lead fs-3">Разбор ГАЗ, ВАЗ, УАЗ</p>

          <p className="lead fs-3">Выкуп битых авто</p>

          <p className="lead fs-4 ">
            <strong className="orange">
              Обращаться по телефону:
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
    </div>
  )
}

export default ServiceCard

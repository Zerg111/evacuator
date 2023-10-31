import React from "react"
import { Carousel } from "react-bootstrap"

const Feedback = () => {
  return (
    <div>
      <h1 id="feedbacks" className="text-center m-5 font-loader">
        Отзывы клиентов
      </h1>
      <Carousel>
        <Carousel.Item id="slider">
          <div className="d-flex justify-content-center text-center">
            <p className="lead fs-4 m-5">
              Отличный сервис, работают быстро и четко. И приятно, то что имея
              большой опыт знает много контактов в помощи с автомобилем:
              автосервисы и разные магазины где можно найти то, что вам нужно.
              Спасибо.
            </p>
          </div>
          <div className="text-center lead fs-3">
            <p>Игорь Г.</p>
          </div>
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item id="slider">
          <div className="d-flex justify-content-center text-center">
            <p className="lead fs-4 m-5">
              Хочу поблагодарить Александра за оказанную услугу. Он - настоящий
              профессионал своего дела, эвакуатор был подан в заранее
              обговоренное время, быстро, грузили автомобиль BMW 125 i, не
              смотря на то что спереди мешала припаркованная машина, и то что
              переднее левое колесо практически не функционировало после ДТП,
              Александр быстро нашёл выход из данной ситуации, и погрузил машину
              очень аккуратно и бережно. Доставили авто в сервис, так же бережно
              и аккуратно выгрузил. Рекомендую, тут работают настоящие
              профессионалы!
            </p>
          </div>
          <div className="text-center lead fs-3">
            <p>Дмитрий С.</p>
          </div>
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item id="slider">
          <div className="d-flex justify-content-center text-center">
            <p className="lead fs-4 m-5">
              Все отлично, лучшее обслуживание, все оперативно и четко, самое
              главное что все очень быстро и без лишних проблем, спасибо большое
              водителю за профессионализм и вежливость, таких очень мало в наше
              время
            </p>
          </div>
          <div className="text-center lead fs-3">
            <p>Екатерина П.</p>
          </div>
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item id="slider">
          <div className="d-flex justify-content-center text-center">
            <p className="lead fs-4 m-5">
              Везла машину на ремонт и заглохла посреди дороги. Очерь
              благодарна, что водитель на эвакуаторе моментально откликнулся на
              мой звонок, приехал в кратчайшие сроки и довез до сервиса. Цена
              очень приятная, особенно учитывая нынешнюю ситуацию! В салоне
              чисто, доехали комфортно. Водитель вежливый и приятный в общении!
              Даже согласился в подарок отвезти меня обратно, чем несказанно
              меня выручил!!! Огромная благодарность! Побольше бы таких людей!
            </p>
          </div>
          <div className="text-center lead fs-3">
            <p>Светлана П.</p>
          </div>
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item id="slider">
          <div className="d-flex justify-content-center text-center">
            <p className="lead fs-4 m-5">
              Спасибо, очень выручили! Ночью ответили на звонок быстро,
              разговаривали спокойно и любезно. Цена оказалась доступной. В
              кабине эвакуатора достаточно удобно, никаких посторонних
              запахов!!! Вообщем я осталась довольна, не жалею, что доверилась
              именно вам! Рекомендую.
            </p>
          </div>
          <div className="text-center lead fs-3">
            <p>Оксана К.</p>
          </div>
          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Feedback

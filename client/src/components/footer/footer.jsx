import React from "react"

const Footer = () => {
  return (
    <div>
      <div className="border text-center bg-warning">
        <div className="m-5">
          <h1 id="contacts">Контакты</h1>
        </div>
        <div className="m-5">
          <h2>
            <a
              style={{ textDecoration: "none" }}
              href="tel:89179945927"
              className="text-dark"
            >
              8 917 994 59 27 (Александр)
            </a>
          </h2>
          <h2>
            <a
              style={{ textDecoration: "none" }}
              href="tel:89179945927"
              className="text-dark"
            >
              8 987 697 17 04 (Александр)
            </a>
          </h2>
          <p className="lead fs-2">
            Время работы: круглосуточно, без выходных <br />
            География: г. Саранск, республика Мордовия и всей России <br />
            Наличный и безналичный расчет
          </p>
        </div>
      </div>
      <div className="bg-dark">nskdfns</div>
    </div>
  )
}

export default Footer

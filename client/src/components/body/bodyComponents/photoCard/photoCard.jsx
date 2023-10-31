import React from "react"
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img4 from "./4.jpg"
import img5 from "./5.jpg"
import img6 from "./6.jpg"
import img7 from "./7.jpg"
import img8 from "./8.jpg"

const PhotoCard = () => {
  return (
    <div class="row row-cols-1 row-cols-md-4 g-4 m-2">
      <div class="col">
        <div class="card">
          <img src={img1} class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={img2} class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={img3} class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={img4} class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={img5} class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={img6} class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={img7} class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={img8} class="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  )
}

export default PhotoCard

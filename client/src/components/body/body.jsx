import React from "react"
import MainText from "./bodyComponents/mainText/mainText"
import ServiceCard from "./bodyComponents/serviceCard/serviceCard"
import PhotoCard from "./bodyComponents/photoCard/photoCard"
import Feedback from "./bodyComponents/feedback/feedback"

const Body = () => {
  return (
    <>
      <MainText />
      <ServiceCard />
      <PhotoCard />
      <Feedback />
    </>
  )
}

export default Body

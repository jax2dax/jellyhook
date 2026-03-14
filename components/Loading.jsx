import React from 'react'
import Lottie from "lottie-react"
import loading from "@/public/loading.json"
import congrats from "@/public/congrats.json"
export const Loading = () => {
  return (
    <div>
      <Lottie animationData={loading} autoplay loop />
    </div>
  )
}

export const Congrats =()=>{
    return(
        <div>
            <Lottie animationData={congrats} autoPlay loop={false} />
        </div>
    )
}

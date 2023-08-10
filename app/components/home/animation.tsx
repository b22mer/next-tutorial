'use client'
import React from 'react'
// import Lottie from 'react-lottie-player'
import { Player } from "@lottiefiles/react-lottie-player";
// Alternatively:

// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import lottieJson from '@/public/animation.json';

export default function Animation() {
  return (
    <Player
      loop
      src={lottieJson}
      autoplay 
    />
  )
}
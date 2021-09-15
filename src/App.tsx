import React from 'react'
import img from './assets/images/logo512.png'

export default function App() {
  return (
    <div className="appContainer">
      <h1>Hello React TS</h1>

      <p>if background has a color it means that scss was loaded</p>

      <img src={img} alt="" />
    </div>
  )
}

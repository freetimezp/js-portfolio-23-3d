import React, { useState } from "react";
import CanvasAnimation from '../components/ThreeAnimation';

const IndexPage = () => {
  return (
    <main>
      <CanvasAnimation />

      <div className="header">
        <h1>PORTFOLIO</h1>
        <h3>By: Freetime</h3>
      </div>
    </main>
  )
}

export default IndexPage;

export const Head = () => {
  return (
    <title>
      Portfolio - 3D
    </title>
  )
}


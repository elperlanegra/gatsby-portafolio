import React from "react"
import illustration from "../img/undraw_developer_activity_bv83.svg"

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
      <div className="flex-1">
        <h1 className="font-bold text-purple-700 text-6xl">
          ¡Hola! Soy Manuel
        </h1>
        <p className="text-xl font-light">
          Desarrolador de aplicaciones web y movil
        </p>
      </div>
      <img
        src={illustration}
        alt="Un hombre haciendo la actividad de programar"
        style={{ height: "300px" }}
      ></img>
    </div>
  </header>
)

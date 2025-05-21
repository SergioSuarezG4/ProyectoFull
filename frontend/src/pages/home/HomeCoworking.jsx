// src/pages/HomeCoworking.jsx
import React from "react";
import CardHome from "../../components/CardHome";

const HomeCoworking = () => {
  return (
    <div>
      <header className="relative w-full h-[500px]">
        <img
          src="https://espai114.com/wp-content/uploads/2021/04/crecimiento-coworking-2-705x397.png"
          alt="Coworking Space"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold">Bienvenido a nuestro Espacio de Coworking</h1>
          <p className="mt-2 text-lg">El lugar perfecto para trabajar y conectar con otros profesionales.</p>
        </div>
      </header>

      <section className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold">¿Por qué elegirnos?</h2>
          <p className="mt-4 text-lg">Un espacio diseñado para tu productividad.</p>
        </div>
      </section>
      <section>
        <CardHome/>
      </section>
    </div>
  );
};

export default HomeCoworking;

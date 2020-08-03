import React from "react";
import CardService from "./CardService";
import data from "../lib/data.js";
const Services = () => {
  return (
    <div id="services" className="services flexCenterColumn">
      <h2>Servicios Funerarios</h2>
      {data.services && (
        <div className="servicesCardsContainer flexCenterColumn">
          {data.services.map((service, i) => {
            return <CardService key={i} {...service} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Services;

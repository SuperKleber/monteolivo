import React from "react";
import Layout from "../components/Layout";
import Emergency from "../components/Emergency";
import Services from "../components/Services";

const Index = () => {
  return (
    <Layout>
      <div className="firstView">
        <div className="container">
          <h1 className="bold">SERVICIOS FUNERARIOS</h1>
          <h4>
            En esos momentos difíciles <br /> somos tu mejor compañía
          </h4>
          <div className="gallery"></div>
        </div>
        <Emergency />
        <div
          style={{ height: 250 }}
          className="container flexCenterColumn infoButton"
        >
          <a href="#services" className="button fullWidth">
            SÓLO QUIERO MÁS INFO
          </a>
          <br />
          <img src="/icons/arrow-down.svg" alt="flecha abajo" width="30" />
        </div>
        <Services />
      </div>
    </Layout>
  );
};

export default Index;

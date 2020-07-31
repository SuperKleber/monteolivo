import React from "react";
import Layout from "../components/Layout";
import Emergency from "../components/Emergency";

const Index = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="bold">SERVICIOS FUNERARIOS</h1>
        <h4>
          En esos momentos difíciles <br /> somos tu mejor compañía
        </h4>
      </div>
      <Emergency />
      <div style={{ height: 250 }} className="container flexCenterColumn">
        <button className="buttonShape fullWidth">SÓLO QUIERO MÁS INFO</button>
        <br />
        <img src="/icons/arrow-down.svg" alt="flecha abajo" width="30" />
      </div>
    </Layout>
  );
};

export default Index;

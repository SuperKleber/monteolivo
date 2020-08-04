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
          <div className="gallery ">
            <div className="imgContainer">
              <img src="/img/cartel-auto.jpg" alt="funeraria con auto" />
            </div>
            <div className="imgContainer large">
              <img
                src="/img/foto1.jpg"
                alt="funeraria santa cruz ataud velacion"
              />
            </div>
          </div>
        </div>
        <Emergency />

        <Services />
      </div>
      <style jsx="true" global="true">{`
        @media (min-width: 990px) {
          body {
            height: 100vh;
            overflow: hidden;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Index;

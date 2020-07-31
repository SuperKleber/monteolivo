import React, { useState } from "react";
import Modal from "./Modal";
const Emergency = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="emergency container">
      <button
        onClick={() => setModal(true)}
        className="buttonShapeRed fullWidth"
      >
        TENGO UNA EMERGENCIA FUNERARIA
      </button>
      {modal && (
        <Modal className="emergencyModal">
          <button
            onClick={() => setModal(false)}
            className="closeButton buttonShapeRed"
          >
            X
          </button>
          <br />
          <div className="emergencyModalCard shapeFlatRed flexCenterColumn container">
            <h3 className="white">
              Asistencia funeraria inmediata y profesional
            </h3>
            <a
              href="https://api.whatsapp.com/send?phone=59133469191&text=%C2%A1Tengo%20una%20emergencia!"
              target="_blank"
              className="buttonEmergencyModal buttonShapeRed fullWidth"
            >
              <img src="/icons/whatsapp.svg" width="25" /> Whatsapp
            </a>
            <br />
            <a
              href="tel:33469191"
              className="buttonEmergencyModal buttonShapeRed fullWidth"
            >
              Llamar: 33469191
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Emergency;

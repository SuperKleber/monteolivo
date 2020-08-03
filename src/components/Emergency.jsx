import React, { useState } from "react";
import Modal from "./Modal";
import ReactPixel from "react-facebook-pixel";
const Emergency = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="emergency container">
      <button
        onClick={() => {
          ReactPixel.trackCustom("emergency");
          setModal(true);
        }}
        className="button fullWidth"
      >
        TENGO UNA EMERGENCIA FUNERARIA
      </button>
      {modal && (
        <Modal className="emergencyModal">
          <button
            onClick={() => setModal(false)}
            className="closeButton button"
          >
            X
          </button>
          <br />
          <div className="emergencyModalCard flexCenterColumn container">
            <h3 className="white">
              Asistencia funeraria inmediata y profesional
            </h3>
            <a
              href="https://api.whatsapp.com/send?phone=59133469191&text=%C2%A1Tengo%20una%20emergencia!"
              target="_blank"
              className="buttonEmergencyModal button fullWidth"
              onClick={() => ReactPixel.track("Contact")}
            >
              <img src="/icons/whatsapp.svg" width="25" /> Whatsapp
            </a>
            <br />
            <a
              onClick={() => ReactPixel.track("Contact")}
              href="tel:33469191"
              className="buttonEmergencyModal button fullWidth"
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

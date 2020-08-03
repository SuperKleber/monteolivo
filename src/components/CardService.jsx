import React, { useState } from "react";
import whatsappApi from "../lib/whatsappApi.js";
import ReactPixel from "react-facebook-pixel";
const CardService = ({ title, list, offerList, price, offerPrice, img }) => {
  const [viewOffer, setViewOffer] = useState();
  let realList = list || [];
  try {
    realList = offerList ? (viewOffer ? offerList : list) : list;
  } catch (error) {}

  return (
    <div className="cardService shapeFlat">
      {title && <h3>{title}</h3>}
      {list && (
        <ul className="listServices">
          {realList.map((text, i) => {
            return (
              <span key={i}>
                {i !== 0 && <hr></hr>}
                <li>{text}</li>
              </span>
            );
          })}
        </ul>
      )}

      <div className="priceContainer">
        {price && (
          <span className={`price shapePreset ${viewOffer ? "viewOffer" : ""}`}>
            {viewOffer ? (offerPrice ? offerPrice : price) : price}
          </span>
        )}

        {offerPrice && (
          <div className="offer">
            <label
              className="switch"
              htmlFor={`viewOffer-${title
                .replace(/ |á|é|í|ó|ú|Á|É|Í|Ó|Ú /g, "")
                .toLowerCase()}`}
            >
              <input
                id={`viewOffer-${title
                  .replace(/ |á|é|í|ó|ú|Á|É|Í|Ó|Ú /g, "")
                  .toLowerCase()}`}
                type="checkBox"
                onChange={(e) => {
                  setViewOffer(e.target.checked);
                }}
              />
              <span className="slider round"></span>
            </label>
            <span>👈Oferta ecológica</span>
          </div>
        )}
      </div>
      <br />
      <a
        href={whatsappApi(
          59133469191,
          `👋Hola, quiero más información sobre: ${title} ${
            viewOffer
              ? `Con el precio de oferta ecológica de ${offerPrice} (~sin-oferta-${price}~)`
              : ""
          }`
        )}
        onClick={() => ReactPixel.track("Contact")}
        target="_blank"
        className="action button fullWidth"
      >
        <img src="/icons/whatsapp.svg" width="25" />
        Solicitar servicio
      </a>
    </div>
  );
};

export default CardService;

import React from "react";
import ReactDom from "react-dom";
const Modal = ({ children, style, className }) => {
  return ReactDom.createPortal(
    <div className={`modal ${className}`} style={style}>
      {children}
    </div>,

    document.getElementById("modal")
  );
};

export default Modal;

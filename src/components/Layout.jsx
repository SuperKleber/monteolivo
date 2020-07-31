import React from "react";
import Helmet from "react-helmet";
import "../styles/master.less";
import Menu from "./Menu";
const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Menu />
      <div>{children}</div>
      <div id="modal"></div>
    </div>
  );
};

export default Layout;

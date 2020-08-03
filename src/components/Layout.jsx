import React, { useEffect } from "react";
import Helmet from "react-helmet";
import "../styles/master.less";
import Menu from "./Menu";
import Seo from "./Seo";
import ReactPixel from "react-facebook-pixel";
const Layout = ({ children }) => {
  useEffect(() => {
    ReactPixel.init("334250397579433");
    ReactPixel.pageView();
  }, []);
  return (
    <div className="Layout">
      <Seo />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Helmet>
      <Menu />
      <div>{children}</div>
      <div id="modal"></div>
    </div>
  );
};

export default Layout;

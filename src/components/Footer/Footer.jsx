import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>pratikmunjamkar23@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/thepetcare/">
          <Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/the1petcare/"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://www.youtube.com/channel/UCerUVEiy2sTCu4ezKui-Vwg"><Youtube color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useContext } from "react";
import "./About.css";
import Upwork from "../img/Upwork.png";
import Fiverr from "../img/fiverr.png";
import Amazon from "../img/amazon.png";
import Shopify from "../img/Shopify.png";
import Facebook from "../img/Facebook.png";
import { themeContext } from "../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            About for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          Pets need care and attention to keep them fit,<br/> happy,
           and safe. They need healthy food, clean, fresh water,<br/> and a comfortable place to sleep.
          <br/> Most pets also require regular exercise to stay fit. 
          <br/>It is important to find out all about an animal before
          <br/> deciding whether it will fit in well with you or your family.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Us</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./styles.css";
import { Link, animateScroll as scroll } from "react-scroll";
export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="wrapper">
      <div className="logo">
        LOGO
      </div>
      <nav>
        <Link
          to="services"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          SERVIÇOS
        </Link>
        <Link
          to="services"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          CASOS
        </Link>
        <Link
          to="services"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          CONTACTOS
        </Link>
      </nav>
    </div>
  );
}

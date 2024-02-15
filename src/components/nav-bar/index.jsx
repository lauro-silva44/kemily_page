import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/images/symbol.png";
import "./styles.css";
export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="wrapper">
        <img className="logo" src={Logo} alt="logo" />
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
          to="cases"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          CASOS
        </Link>
        <Link
          to="contacts"
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

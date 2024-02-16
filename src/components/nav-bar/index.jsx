import React from "react";
import { Link} from "react-scroll";
import Logo from "../../assets/images/logo.svg";
import "./styles.css";
export default function Navbar() {

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

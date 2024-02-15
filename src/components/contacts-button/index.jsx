import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link, animateScroll as scroll } from "react-scroll";

import "./style.css";
export default function ContactsButton() {

  const openEmailBox = () => {
    window.location.href = 'mailto:quemilyspinola@gmail.com?subject=Consulta&body=Prezada%20!';
  };
  return (
    <button className="button_wrapper" onClick={openEmailBox}>
      <div className="icon">
        <EmailOutlinedIcon />
      </div>
      CONTACTS
    </button>
  );
}

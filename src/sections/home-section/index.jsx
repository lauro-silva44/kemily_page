import React from "react";
import "./style.css";
import Navbar from "../../components/nav-bar";
import Lawyer from "../../assets/images/lawyer.png"
export default function HomeSection() {
  return (
    <section className="home">
      <Navbar />
      <div className="text_image_wrapper">
        <div className="name">
          <h1>Quemily Spínola</h1>
          <span>ADVOGADA</span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
          <div>
            BUTTON
          </div>
        </div>
        <img src={Lawyer} alt="lawyer" />
      </div>
    </section>
  );
}

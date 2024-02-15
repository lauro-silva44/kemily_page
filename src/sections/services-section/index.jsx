import React from "react";
import "./style.css";
import SectionTitle from "../../components/section-title";
import WorkItem from "../../components/work-items";
export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <SectionTitle title="SER VI ÇOS" />
      <div className="grid">
      <WorkItem/>
      <WorkItem/>
      <WorkItem/>
      <WorkItem/>
      </div>
    </section>
  );
}

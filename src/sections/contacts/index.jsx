import React from 'react'
import "./style.css"
import WorkItem from '../../components/work-items'
import SectionTitle from '../../components/section-title'
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";


const caseOutl = (
  <CasesOutlinedIcon
    style={{
      color: "var(--golden-yellow)",
    }}
  />
);
export default function Contacts() {
  return (
    <section className='contacts'>
      <SectionTitle title="CON TAC TOS" />
      <div className="grid">
    <WorkItem icon={caseOutl} type="CASE#1" />
    <WorkItem icon={caseOutl} type="CASE#1" />
    <WorkItem icon={caseOutl} type="CASE#1" />
    <WorkItem icon={caseOutl} type="CASE#1" />
  </div>
  </section>
  )
}

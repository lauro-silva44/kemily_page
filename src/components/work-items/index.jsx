import React from "react";
import "./style.css";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";

const iconRoom =(<RoomServiceOutlinedIcon
  style={{
    color: "var(--golden-yellow)",
  }}
/>);
export default function WorkItem({icon = iconRoom, type = "SERVIÇOS#1" }) {
  
  return (
    <div className="work_wrapper">
      <div className="service_name">
        <div className="icon_place">
        {icon}
        </div>
        {type}
      </div>
      <div className="description">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </p>
      </div>
    </div>
  );
}

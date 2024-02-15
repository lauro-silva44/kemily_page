import React from "react";
import "./style.css";

export default function SectionTitle({ title }) {
  const enteredTitle = title.split(" ");
  return (
    <div className="title_wrapper">
      <div className="title">
        {enteredTitle.map((silabal) => (
          <h1 className="title">{silabal}</h1>
        ))}
      </div>
    </div>
  );
}

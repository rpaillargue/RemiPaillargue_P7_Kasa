import React, { useState } from "react";
import arrow from "../../assets/arrow-down.png";
import "../Collapse/collapse.css";

function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse" id={`collapse-${title}`}>
      <div className="header-collapse">
        <div className="title-collapse">{title}</div>
        <span
          className={`arrow-collapse ${open}`}
          onClick={() => setOpen(!open)}
        >
          <img src={arrow} alt="Fleche collapse" />
        </span>
      </div>
      {open && <div className="description-collapse">{description}</div>}
    </div>
  );
}

export default Collapse;

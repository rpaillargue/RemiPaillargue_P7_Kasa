import React, { useState } from "react";
import arrow from "../../assets/arrow-down.png";
import "../Collapse/collapse.css";

function Collapse({ title, description }) {
  // State pour suivre si le contenu du collapse est ouvert ou fermé
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse" id={`collapse-${title}`}>
      <div className="header-collapse">
        <div className="title-collapse">{title}</div>
        {/* Flèche pour ouvrir/fermer le contenu du collapse */}
        <span
          className={`arrow-collapse ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <img src={arrow} alt="Fleche collapse" />
        </span>
      </div>

      {/* Contenu du collapse qui est affiché si le collapse est ouvert */}
      {open && <div className="description-collapse">{description}</div>}
    </div>
  );
}
export default Collapse;

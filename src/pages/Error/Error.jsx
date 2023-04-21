import React from "react";
import { NavLink } from "react-router-dom";
import "../Error/Error.css"

function Error() {
  return (
    <div className="page-error">
      <h1 className="title-error">404</h1>
      <span className="description-error">Oups! La page que vous demandez n'existe pas.</span>
      <NavLink to="/" className="nav-link-error">Retourner sur la page d'accueil</NavLink>
    </div>
  );
}

export default Error;

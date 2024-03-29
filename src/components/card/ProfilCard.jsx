import React from "react";
import cardStyle from "./ProfilCard.module.css";

const ProfilCard = ({ nextProfil }) => {
  const { age, id, email, image, name } = nextProfil;
  return (
    <div className="employee-card d-flex align-items-center gap-2">
      <img
        src={image}
        alt=""
        className={cardStyle.img + " rounded-circle object-fit-cover"}
      />
      <div className={cardStyle.info + " employee-info"}>
        <div className="employee-name fw-bold ">{name}</div>
        <div className="employee-email text-muted">{email}</div>
        <div className="employee-age text-muted">{age} years</div>
      </div>
    </div>
  );
};

export default ProfilCard;

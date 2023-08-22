import { useState, useEffect } from "react";
import { User } from "../../model/User";

function CardInfos({ icon_type, text_type, value, API }) {
  return (
    <>
      <div className="card">
        <img
          className="icon_types"
          src={icon_type}
          alt={`image_icon_${text_type}`}
        />
        <div className="card_text">
          <div className="measure_type">{value}</div>
          <div className="text_type">{text_type} </div>
        </div>
      </div>
    </>
  );
}

export default CardInfos;

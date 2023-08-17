import { useState, useEffect } from "react";

function CardInfos(props) {
  let initailState = null;
  const [state, setState] = useState(initailState);
  console.log([state, setState]);
  const showResults = () => {
    return setState("hello");
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="card">
        <img
          className="icon_types"
          src={props.icon_types}
          alt={`image_icon_${props.text_type}`}
        />
        <div className="card_text">
          <div className="measure_type">{state}</div>
          <div className="text_type">{props.text_type} </div>
        </div>
      </div>
    </>
  );
}

export default CardInfos;

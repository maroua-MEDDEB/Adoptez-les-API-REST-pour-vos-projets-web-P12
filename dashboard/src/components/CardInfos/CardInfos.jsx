import { Card, CardImg, CardText, MeasureType } from "./index.style";

function CardInfos({ icon_type, text_type, value }) {
  return (
    <>
      <Card>
        <CardImg
          className="icon_types"
          src={icon_type}
          alt={`image_icon_${text_type}`}
        />
        <CardText>
          <MeasureType>{value}</MeasureType>
          <div className="text_type">{text_type} </div>
        </CardText>
      </Card>
    </>
  );
}

export default CardInfos;

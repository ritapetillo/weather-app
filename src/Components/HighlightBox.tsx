import React from "react";
import { Col } from "react-bootstrap";
import "../Styles/HighlightBox.scss";

interface Props {
  title: string;
  icon: string;
  value: string;
}
const HighlightBox = ({ title, icon, value }: Props) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="highlightBox mb-3">
        <h5>{title}</h5>
        <img
          src={`${process.env.PUBLIC_URL}/icons/${icon}.svg`}
          className="img-fluid"
        />
        <h6>{value}</h6>
      </div>
    </Col>
  );
};

export default HighlightBox;

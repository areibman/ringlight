import React, { Fragment } from "react";
import styled from "styled-components";

const RingOutter = styled.span`
  width: 50%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: absolute;
  z-index: 0;
  box-shadow: 2px 2px 10px grey;
`;

const RingInner = styled.span`
  width: 40%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  background-color: black;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  box-shadow: 2px 2px 10px grey;
`;

const ClassicLight = (props) => {
  return (
    <Fragment>
      <RingOutter color={props.color} />
      <RingInner />
    </Fragment>
  );
};

export default ClassicLight;

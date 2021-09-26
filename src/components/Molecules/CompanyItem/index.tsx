import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import AnimatedCover from "../AnimatedCover";

interface CompanyItemProps {
  image: string;
  animate?: any;
}

const CompanyItem: React.FC<CompanyItemProps> = (props) => {
  return (
    <Container>
      <img src={props.image} />
      <AnimatedCover
        animate={props.animate}
        backgroundColor={"#000"}
        startVisible={true}
      />
    </Container>
  );
};

export default CompanyItem;

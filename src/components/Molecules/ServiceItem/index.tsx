import React from "react";
import { Container, Cover } from "./styles";
import { FaCopy } from "react-icons/fa";

interface ServiceItemProps {
  title?: string;
  description?: string;
  image: string;
}

const ServiceItem: React.FC<ServiceItemProps> = (props) => {
  return (
    <Container>
      <img
        src={props.image}
        alt={props.title || ""}
        width="50px"
        height="50px"
      />
      <h2>
        {props.title?.split(" ").map((word, index, array) => (
          <>
            {word}
            {index < array.length - 1 && <br />}
          </>
        ))}
      </h2>
      <p>{props.description}</p>
    </Container>
  );
};

export default ServiceItem;

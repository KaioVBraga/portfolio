import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { FaCopy } from "react-icons/fa";

interface ServiceItemProps {
  title?: string;
  description?: string;
  image: string;
  animate?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!props.animate || show) {
      return;
    }

    setTimeout(() => setShow(true), 800);
  }, [props.animate, show]);

  return (
    <Container animate={props.animate} show={show}>
      <img
        src={props.image}
        alt={props.title || ""}
        width="45px"
        height="45px"
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

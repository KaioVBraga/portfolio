import React, { useState } from "react";
import { Container, ItemsList } from "./styles";
import ListItem from "../../Atoms/ListItem";

const HeroNavbar: React.FC<HeroNavbarProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const leftItems = [
    {
      text: "Home",
    },
    {
      text: "Portfolio",
    },
    {
      text: "About",
    },
    {
      text: "Services",
    },
  ];

  const rightItems = [
    {
      text: "Skills",
    },
    {
      text: "Testimonial",
    },
    {
      text: "Journal",
    },
    {
      text: "Contact",
    },
  ];

  return (
    <Container>
      <ItemsList align="right">
        {leftItems.map((item, index) => (
          <ListItem key={index} active={index === activeIndex}>
            {item.text}
          </ListItem>
        ))}
      </ItemsList>

      <h2>
        Unfold<span>.</span>
      </h2>

      <ItemsList align="left">
        {rightItems.map((item, index) => (
          <ListItem key={index} active={index + 4 === activeIndex}>
            {item.text}
          </ListItem>
        ))}
      </ItemsList>
    </Container>
  );
};

export default HeroNavbar;

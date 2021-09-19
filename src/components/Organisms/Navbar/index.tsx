import React, { useState, useEffect, useCallback } from "react";
import { Container, ItemsList } from "./styles";
import ListItem from "../../Atoms/ListItem";

const Navbar: React.FC<NavbarProps> = (props) => {
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
    <Container displayNavbar={props.displayNavbar}>
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

export default Navbar;

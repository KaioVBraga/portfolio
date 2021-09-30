import React, { useState, useEffect, useCallback } from "react";
import { Container, ItemsList } from "./styles";
import ListItem from "../../Atoms/ListItem";

const Navbar: React.FC<NavbarProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const leftItems = [
    {
      text: "Home",
      destiny: "home-hero",
    },
    {
      text: "Portfolio",
      destiny: "projects",
    },
    // {
    //   text: "About",
    //   destiny: "about",
    // },
    // {
    //   text: "Services",
    //   destiny: "services",
    // },
  ];

  const rightItems = [
    {
      text: "Skills",
      // destiny: "skills",
      destiny: "services",
    },
    // {
    //   text: "Testimonial",
    //   destiny: "testimonial",
    // },
    // {
    //   text: "Journal",
    //   destiny: "journal",
    // },
    {
      text: "Contact",
      destiny: "get-in-touch",
    },
  ];

  return (
    <Container displayNavbar={props.displayNavbar}>
      <ItemsList align="right">
        {leftItems.map((item, index) => (
          <ListItem
            key={index}
            active={index === activeIndex}
            onClick={() => props.scrollTo(item.destiny)}
          >
            {item.text}
          </ListItem>
        ))}
      </ItemsList>

      <h2>
        Kaio Braga<span>.</span>
      </h2>

      <ItemsList align="left">
        {rightItems.map((item, index) => (
          <ListItem
            key={index}
            active={index + 4 === activeIndex}
            onClick={() => props.scrollTo(item.destiny)}
          >
            {item.text}
          </ListItem>
        ))}
      </ItemsList>
    </Container>
  );
};

export default Navbar;

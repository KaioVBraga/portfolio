import React, { useState } from "react";
import ServiceItem from "../../Molecules/ServiceItem";
import { Container } from "./styles";

const ServicesGrid: React.FC = (props) => {
  const itemsList = [
    [
      {
        image:
          "	https://preview.colorlib.com/theme/unfold/images/svg/001-options.svg",
        title: "Digital Strategy",
        description:
          "A small river named Duden flows by their place and supplies it with the necessary regalialia.",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/004-percentage.svg",
        title: "Web Development",
        description:
          "A small river named Duden flows by their place and supplies it with the necessary regalialia.",
      },
    ],
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/002-chat.svg",
        title: "Web Design",
        description:
          "A small river named Duden flows by their place and supplies it with the necessary regalialia.",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/006-goal.svg",
        title: "WordPress Solutions",
        description:
          "A small river named Duden flows by their place and supplies it with the necessary regalialia.",
      },
    ],
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/003-contact-book.svg",
        title: "User Experience",
        description:
          "A small river named Duden flows by their place and supplies it with the necessary regalialia.",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/005-line-chart.svg",
        title: "Mobile Applications",
        description:
          "A small river named Duden flows by their place and supplies it with the necessary regalialia.",
      },
    ],
  ];

  return (
    <Container>
      <section>
        <header>
          <h1>My Services</h1>
          <img src="/underline.png" />
        </header>
        <main>
          {itemsList.map((items, itemsIndex) => (
            <ul key={itemsIndex}>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <ServiceItem
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              ))}
            </ul>
          ))}
        </main>
      </section>
    </Container>
  );
};

export default ServicesGrid;

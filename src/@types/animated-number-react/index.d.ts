declare module "animated-number-react" {
  import React from "react";

  interface Props {
    value: number | string;
    duration?: number;
    delay?: number;
    className?: string;
    easing?: string;
    formatValue?: (value: number) => any;
  }

  const AnimatedNumber: React.FC<Props>;

  export = AnimatedNumber;
}

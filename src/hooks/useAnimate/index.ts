import React, { useEffect, useState, useRef } from "react";

interface Props {
  isInView: boolean;
}

const useAnimate = (props: Props) => {
  const [animate, setAnimate] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!props.isInView || animated) {
      return;
    }

    setAnimate(!!props.isInView);
    setAnimated(true);
  }, [props.isInView, animated]);

  return [animate];
};

export default useAnimate;

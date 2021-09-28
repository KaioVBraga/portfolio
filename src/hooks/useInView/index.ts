//@ts-nocheck

import React, { useEffect, useState, useRef } from "react";

interface Props {
  options?: any;
  ref?: any;
}

const useInView = (
  props: Props | null = null
): Array<HTMLDivElement | boolean> => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if ((!props?.ref || !props?.ref?.current) && (!ref || !ref?.current)) {
      return;
    }

    const options = props?.options || {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px 0px 0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      setIsInView(!!entries[0].isIntersecting);
    }, options);

    if (props?.ref) {
      observer.observe(props?.ref.current);

      return () => {
        observer.disconnect();
      };
    }

    if (ref?.current) {
      observer.observe(ref?.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [props]);

  return [ref, isInView];
};

export default useInView;

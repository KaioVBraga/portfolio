import React, { useEffect, useState, useRef } from "react";

interface Props {
  options?: any;
}

const useInView = (
  props: Props | null = null
): Array<HTMLDivElement | boolean> => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref || !ref?.current) {
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

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [props]);

  return [ref, isInView];
};

export default useInView;

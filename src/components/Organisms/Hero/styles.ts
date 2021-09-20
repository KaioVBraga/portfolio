import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* min-height: 120vh; */
  min-height: calc(100vh + 128px);
  padding: 24px;
  color: #fff;
  width: 100%;
  transform-style: inherit;

  > main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100%;
    /* padding-bottom: 98px; */
    padding-bottom: 118px;
    z-index: 2;

    > section {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 640px;
      align-items: center;
      justify-content: center;

      > h1 {
        position: relative;
        font-size: 80px;
        /* margin-bottom: 22px; */
        margin-bottom: 21px;

        /* ::before {
          content: "";
          display: block;
          height: 110px;
          width: 0%;
          position: absolute;
          top: 0;
          background-color: #d63447;
          animation: expand 2s normal;

          @keyframes expand {
            0% {
              left: 0;
              width: 0%;
            }
            40% {
              left: 0;
              width: 100%;
            }
            60% {
              right: 0;
              width: 100%;
            }
            100% {
              right: 0;
              width: 0%;
            }
          }
        } */
      }

      > p {
        position: relative;
        font-size: 33px;
        text-align: center;
        line-height: 1.5;
        /* margin-bottom: 3px; */
      }
    }
  }

  :before {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: block;

    background-image: url("https://preview.colorlib.com/theme/unfold/images/xcover_bg_2.jpg.pagespeed.ic.80gbjoZ17c.webp");
    background-size: cover;
    background-position: 50% 49%;
    background-repeat: repeat;

    position: absolute;
    top: 0;
    left: -3%;
    right: 0;
    bottom: 0;

    content: "";

    z-index: -1;
    transform-origin: center center 0;
    /* transform: translateZ(-5px) scale(6); */
    transform: translate3d(0px, 0px, -5px) scale(5.95);

    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  }
`;

export const Finger = styled.div`
  position: relative;
  height: 42px;
  width: 22px;
  border-radius: 15px;
  background-color: transparent;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  top: 60px;

  :after {
    content: "SCROLL";
    display: block;
    position: absolute;
    top: 100%;
    left: -50%;
    margin-top: 10px;
    font-weight: 700;
    font-size: 10px;
  }

  > span {
    width: min-content;
    height: min-content;
    display: block;
    background-color: #fff;
    border-radius: 50%;
    height: 3px;
    width: 3px;
    animation: finger 2s infinite;
    margin-left: -1px;
    transform: translate(0px, 8px);
  }

  @keyframes finger {
    from {
      transform: translate(0px, 8px);
      opacity: 0.75;
    }
    to {
      transform: translate(0px, 24px);
      opacity: 0.25;
    }
  }
`;

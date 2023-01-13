/* eslint-disable default-case */
import styled, { css, keyframes } from 'styled-components';

const defaultLoaderSize = 96;
const defaultBallSize = 16;
const defaultAnimationSpace = defaultBallSize * 2;

const animationTime = '1.5s';

const sizes = {
  small: {
    ballSize: 4,
    loaderSize: 16,
    animationSpace: 8,
  },
  large: {
    ballSize: 16,
    loaderSize: 96,
    animationSpace: 32,
  },
};

const defaultStyles = css`
  display: block;
  position: absolute;
  margin: auto;
`;

const ballStyles = css`
  width: ${({ size }) => `${(sizes[size]?.ballSize || defaultBallSize)}px`};
  height: ${({ size }) => `${(sizes[size]?.ballSize || defaultBallSize)}px`};
  background: #5061FC;
  border-radius: 50%;
`;

const spinnerStyles = css`
  height: ${({ size }) => `${(sizes[size]?.loaderSize || defaultLoaderSize)}px`};
  width: ${({ size }) => `${(sizes[size]?.loaderSize || defaultLoaderSize)}px`};
`;

const roundAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

function animation({ size }, type) {
  const animationSpace = `${sizes[size]?.animationSpace || defaultAnimationSpace}px`;
  let transform;

  switch (type) {
    case 1:
      transform = `translate3d(${animationSpace}, 0, 0) scale(.5)`;
      break;
    case 2:
      transform = `translate3d(-${animationSpace}, 0, 0) scale(.5)`;
      break;
    case 3:
      transform = `translate3d(0, ${animationSpace}, 0) scale(.5)`;
      break;
    case 4:
      transform = `translate3d(0, -${animationSpace}, 0) scale(.5)`;
      break;
  }

  return () => (keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: ${transform};
  }

  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  `);
}

export const StyledSpinner = styled.div`
  ${spinnerStyles}
  -webkit-animation: ${roundAnimation} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  animation: ${roundAnimation} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;

  span {
    ${defaultStyles}
    ${spinnerStyles}
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  ::before {
    content: "";
    ${defaultStyles}
    ${ballStyles}
    top: 0;
    left: 0;
    bottom: 0;
    right: auto;
    -webkit-animation: ${(props) => animation(props, 1)} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    animation: ${(props) => animation(props, 1)} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  }

  ::after {
    content: "";
    ${defaultStyles}
    ${ballStyles}
    top: 0;
    left: auto;
    bottom: 0;
    right: 0;
    -webkit-animation: ${(props) => animation(props, 2)} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    animation: ${(props) => animation(props, 2)} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  }

  span::before {
    content: "";
    ${defaultStyles}
    ${ballStyles}
    top: 0;
    left: 0;
    bottom: auto;
    right: 0;
    -webkit-animation: ${(props) => animation(props, 3)} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    animation: ${(props) => animation(props, 3)} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  }

  span::after {
    content: "";
    ${defaultStyles}
    ${ballStyles}
    top: auto;
    left: 0;
    bottom: 0;
    right: 0;
    -webkit-animation: ${(props) => animation(props, 4)} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    animation: ${(props) => animation(props, 4)} ${animationTime} cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  }
`;

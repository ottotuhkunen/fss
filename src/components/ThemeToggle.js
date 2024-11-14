import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(420deg); /* Overshoot */
  }
  70% {
    transform: rotate(390deg); /* Back to less overshoot */
  }
  100% {
    transform: rotate(360deg); /* Finish at the original position */
  }
`;

const wobble = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(15deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(5deg); }
  60% { transform: rotate(-5deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
`;

const ToggleContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 26px;
  color: ${({ theme }) => theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  background-color: ${({ theme }) => theme.titleText};
  backdrop-filter: blur(6px);
  border-radius: 50%;
  padding: 10px;
  z-index: 1000;
  display: none;

  svg {
    transition: transform 0.6s ease;
    ${({ isAnimating }) =>
      isAnimating &&
      css`
        animation: ${rotate} 0.8s ease-out;
      `}
  }

  &:hover {
    animation: ${wobble} 1s ease-in-out;
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800); // Reset animation state after animation duration
    toggleTheme();
  };

  return (
    <ToggleContainer isAnimating={isAnimating} onClick={handleClick}>
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </ToggleContainer>
  );
};

export default ThemeToggle;

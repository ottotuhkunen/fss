import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  text-align: center;
  padding: 150px 20px;
  background-image: ${({ theme }) => theme.headerImage};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.headerBackground};
  user-select: none;
`;

const Title = styled(motion.h1)`
  font-size: 3.4rem;
  margin-bottom: 1rem;
  color: #dc4d40;
  text-shadow: ${({ theme }) => theme.headerShadow};
  font-family: "landa", sans-serif;
`;

// title color: ${({ theme }) => theme.titleText}
// (to be used if light-mode is activated)

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

const LogoImage = styled.img`
  max-width: 140px;
  margin-top: 20px;
`;

const Header = ({ theme }) => {
  const [key, setKey] = useState(0);

  // Reset animation key on theme change
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [theme]);

  return (
    <HeroSection>
      <Title
        key={`title-${key}`} // Ensure animation resets on theme change
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Fly and See Santa
      </Title>
      <Subtitle
        key={`subtitle-${key}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        14th December 17:00z - 23:00z
      </Subtitle>
      <a href="https://vatsim-scandinavia.org/" target="_blank" rel="noopener noreferrer">
        <LogoImage src={'images/logo.png'} alt="VATSIM Scandinavia" />
      </a>
    </HeroSection>
  );
};

export default Header;

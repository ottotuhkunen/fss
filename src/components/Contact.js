import React, { useState } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { FaDiscord, FaGlobe, FaComment, FaLink, FaTwitch, FaMapMarked } from 'react-icons/fa';

// Keyframes for wobble effect
const wobble = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(15deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(5deg); }
  60% { transform: rotate(-5deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
`;

const ContactSection = styled.section`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 100px 20px;
  background: ${({ theme }) => theme.contactBackground};

  h2 {
    color: ${({ theme }) => theme.sectionTitle};
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-top: 20px;
`;

const IconWrapper = styled.a`
  color: ${({ theme }) => theme.iconColor};
  font-size: 2.2rem;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  line-height: 0;

  &:hover {
    animation: ${wobble} 1s ease-in-out;
    color: ${({ theme }) => theme.iconHoverColor};
  }
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
  height: 20px;
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

const Contact = () => {
  const theme = useTheme();

  const [hoveredIcon, setHoveredIcon] = useState('');

  const handleMouseEnter = (mediaName) => {
    setHoveredIcon(
      <>
        <FaLink /> {mediaName}
      </>
    );
  };

  const handleMouseLeave = () => {
    setHoveredIcon('');
  };

  return (
    <ContactSection id="contact">
      <p>Happy Holidays, wishes from</p>
      <a href="https://vatsim-scandinavia.org/" target="_blank" rel="noopener noreferrer">
        <LogoImage src={theme.logoImage} alt="VATSIM Scandinavia" />
      </a>
      <IconContainer>
        <IconWrapper
          href="https://vatsim-scandinavia.org/"
          target="_blank"
          aria-label="Website"
          onMouseEnter={() => handleMouseEnter('Website')}
          onMouseLeave={handleMouseLeave}
        >
          <FaGlobe />
        </IconWrapper>

        <IconWrapper
          href="https://fss-map.lusep.fi/"
          target="_blank"
          aria-label="FSS 2024 Map"
          onMouseEnter={() => handleMouseEnter('Fly and See Santa Map')}
          onMouseLeave={handleMouseLeave}
        >
          <FaMapMarked />
        </IconWrapper>

        <IconWrapper
          href="http://discord.vatsim-scandinavia.org/"
          target="_blank"
          aria-label="Discord"
          onMouseEnter={() => handleMouseEnter('Discord')}
          onMouseLeave={handleMouseLeave}
        >
          <FaDiscord />
        </IconWrapper>

        <IconWrapper
          href="https://www.twitch.tv/vatsimscandinavia"
          target="_blank"
          aria-label="Twitch"
          onMouseEnter={() => handleMouseEnter('Twitch')}
          onMouseLeave={handleMouseLeave}
        >
          <FaTwitch />
        </IconWrapper>

        <IconWrapper
          href="https://cc.vatsim-scandinavia.org/feedback"
          target="_blank"
          aria-label="Feedback"
          onMouseEnter={() => handleMouseEnter('Leave us Feedback')}
          onMouseLeave={handleMouseLeave}
        >
          <FaComment />
        </IconWrapper>

      </IconContainer>

      <InfoText>{hoveredIcon}</InfoText>
    </ContactSection>
  );
};

export default Contact;

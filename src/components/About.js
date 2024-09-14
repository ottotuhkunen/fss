import React from 'react';
import styled from 'styled-components';
import fssImage from './images/fss.png';
import { FaExternalLinkAlt } from 'react-icons/fa';

const AboutSection = styled.section`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
    padding: 40px 100px;
  }

  .about-content {
    flex: 1;
    padding: 0px;
    text-align: center;

    @media(min-width: 768px) {
      text-align: left;
    }

    h2 {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.sectionTitle};
      margin-bottom: 20px;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 15px;
    }
  }

  .banner-image {
    flex: 1;
    text-align: center;

    @media(min-width: 768px) {
      text-align: right;
      padding-right: 50px;
      margin-bottom: 0px;
    }

    img {
      width: 100%;
      max-width: 540px;
      height: auto;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      margin-bottom: 40px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
  padding: 0px;
  padding-top: 0px;
  padding-bottom: 20px;
  text-align: center;
`;

const SelectionCard = styled.a`
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.text};
  padding: 12px 10px;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 0px;
  transition: all 0.3s ease;
  border-radius: 0;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.titleText};
    background-color: ${({ theme }) => theme.tagBackground};
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`;

const About = ({ theme, scrollToSection }) => {
  return (
    <div>

      <ButtonContainer>
        <SelectionCard
          href="https://booking.vatsim-scandinavia.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bookings <FaExternalLinkAlt style={{ fontSize: '12px', marginLeft: '6px' }} />
        </SelectionCard>
        <SelectionCard as="button" onClick={() => scrollToSection('Routes')}>
          Routes
        </SelectionCard>
        <SelectionCard as="button" onClick={() => scrollToSection('Notes')}>
          Pilot Briefing
        </SelectionCard>
        <SelectionCard as="button" onClick={() => scrollToSection('Sceneries')}>
          Sceneries
        </SelectionCard>
      </ButtonContainer>

      <AboutSection id="about">
        <div className="banner-image">
          <img src={fssImage} alt="Event banner" />
        </div>
        <div className="about-content">
          <p>
            VATSIM Scandinavia invites you to take part in a journey to the home of the original Santa Claus, just in time for the Christmas holiday.
          </p>
          <p>
            Fly and See Santa, the largest annual Christmas event in VATSIM skies, takes place at three airports in the northernmost reaches of Europe. Experience the magic of snow-covered landscapes and icy runways as you arrive at Rovaniemi, Tromsø, and Kiruna—airports nestled in the stunning wilderness of northern Europe. Throughout December, the airspace buzzes with flights full of passengers eager to visit Santa's winter wonderland. We hope you’ll join us for this unforgettable event!
          </p>
        </div>
      </AboutSection>

    </div>
  );
};

export default About;

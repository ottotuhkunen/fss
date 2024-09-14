import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import CountdownTimer from './Countdown';

const ProjectsSection = styled.section`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 100px 20px;
  background: ${({ theme }) => theme.airportsBackground};

  h2 {
    color: ${({ theme }) => theme.sectionTitle};
  }
  h3 {
    margin-top: 12px;
    color: ${({ theme }) => theme.sectionSubTitle};
  }
  p {
    margin-top: 8px;
  }
  .credit {
    font-size: 12px;
    color: gray;
    margin-top: 4px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  justify-content: center;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.projectCard};
  padding: 0px;
  border-radius: 0px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;  /* Center align content */
  justify-content: space-between; /* Distribute space between items */
  min-height: 480px; /* Ensure a minimum height for consistent appearance */

  &:hover {
    transform: translateY(-5px);
  }
  p {
    padding: 20px;
    margin: 0;
  }
  img {
    width: 100%;
    border-radius: 0px;
  }
`;

const TechTags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.tagText};
  padding: 5px 10px;
  border-radius: 0px;
  font-size: 14px;
  white-space: nowrap;
`;

const BookingButton = styled.a`
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.text};
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 20px;
  transition: all 0.3s ease;
  border-radius: 0;
  width: 200px;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

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

const ChartsButton = styled.a`
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.text};
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin: 20px;
  transition: all 0.3s ease;
  border-radius: 0;
  width: 180px;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
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

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const TimerTitle = styled.p`
    margin-top: 20px !important;
`;

const AirportInformation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Airports = () => {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <h2>Airports</h2>
        <ProjectGrid>
          <ProjectCard>
            <img src={'/images/efro-title.jpg'} alt="EFRO" />
            <span className='credit'>Alexander - stock.adobe.com</span>
            <h3>Rovaniemi</h3>
            <TechTags>
              <TechTag>EFRO</TechTag>
              <TechTag>Finland</TechTag>
            </TechTags>
            <AirportInformation>
              <p>
                As the gateway to the Arctic, Rovaniemi offers a thrilling approach
                with snow and low visibility challenges. Known as Santa's official
                home, it's one of Finland’s busiest airports during December,
                perfect for honing your winter flying skills.
              </p>
            </AirportInformation>
            <ChartsButton href="https://chartfox.org/EFRO" target="_blank">
              Charts <FaExternalLinkAlt style={{ fontSize: '14px', marginLeft: '6px' }} />
            </ChartsButton>
          </ProjectCard>
          <ProjectCard>
            <img src={'/images/esnq-title.jpg'} alt="ESNQ" />
            <span className='credit'>Henk Vrieselaar - stock.adobe.com</span>
            <h3>Kiruna</h3>
            <TechTags>
              <TechTag>ESNQ</TechTag>
              <TechTag>Sweden</TechTag>
            </TechTags>
            <AirportInformation>
              <p>
                Sweden's northernmost airport provides icy, narrow runways and
                limited daylight, testing your precision flying. The surrounding
                snow-covered wilderness adds to the Arctic adventure.
              </p>
            </AirportInformation>
            <ChartsButton href="https://chartfox.org/ESNQ" target="_blank">
              Charts <FaExternalLinkAlt style={{ fontSize: '14px', marginLeft: '6px' }} />
            </ChartsButton>
          </ProjectCard>
          <ProjectCard>
            <img src={'/images/entc-title.jpg'} alt="ENTC" />
            <span className='credit'>johnkruger1 - stock.adobe.com</span>
            <h3>Tromsø</h3>
            <TechTags>
              <TechTag>ENTC</TechTag>
              <TechTag>Norway</TechTag>
            </TechTags>
            <AirportInformation>
              <p>
                Nestled between rugged mountains and fjords, Tromsø Airport offers
                dramatic terrain and unpredictable weather, ideal for mastering
                complex approaches in extreme winter conditions.
              </p>
            </AirportInformation>
            <ChartsButton href="https://chartfox.org/ENTC" target="_blank">
                Charts <FaExternalLinkAlt style={{ fontSize: '14px', marginLeft: '6px' }} />
            </ChartsButton>
          </ProjectCard>
        </ProjectGrid>

        <h2 style={{ marginTop: '20px' }}>Book your Slot</h2>
        <p>
          Book an arrival slot into any of the event airports, departing from
          anywhere on the planet.
        </p>
        <p>
          Pilots with no slots may expect indefinite delays.
        </p>

        <BookingButton href="https://booking.vatsim-scandinavia.org/" target="_blank">
          Bookings <FaExternalLinkAlt style={{ fontSize: '14px', marginLeft: '6px' }} />
        </BookingButton>

        <CountdownTimer />
      </div>
    </ProjectsSection>
  );
};

export default Airports;

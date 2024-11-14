import React, { useEffect, useState } from 'react';
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
  height: 48px;

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
  height:45px;

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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  justify-content: center;
  margin-bottom: 40px;

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
  align-items: center;  
  justify-content: space-between;
  min-height: 480px;

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

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  user-select: none;

  /* Group 1: Icon and Temperature */
  .weather-details {
    display: flex;
    align-items: center;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .temperature {
    font-size: 12pt;
    font-weight: bold;
    margin-left: 4px;
  }

  /* Group 2: Wind direction and speed */
  .wind {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: 20px;

    .arrow {
      width: 26px;
      height: 26px;
      transition: transform 0.3s;
    }
  }
`;

// Function to convert mps to knots
const convertMpsToKnots = (mps) => (mps * 1.94384).toFixed(0) + ' kts';

// Fetch weather data
const fetchWeather = async ({ fmisid, place }) => {
  let url = '';
  
  if (fmisid) {
    url = `https://opendata.fmi.fi/timeseries?fmisid=${fmisid}&param=smartsymbol,temperature,winddirection,WindSpeedMS&lang=en`;
  } else if (place) {
    url = `https://opendata.fmi.fi/timeseries?place=${place}&param=smartsymbol,temperature,winddirection,WindSpeedMS&lang=en`;
  }

  try {
    const response = await fetch(url);
    const data = await response.text();
    const lines = data.trim().split('\n');
    const weatherData = lines[0].split(' ').map(Number);
    return {
      symbol: weatherData[0], // Weather symbol
      temperature: weatherData[1], // Temperature
      windDirection: weatherData[2], // Wind direction
      windSpeed: convertMpsToKnots(weatherData[3]), // Wind speed converted to knots
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const Airports = () => {
  const [rovaniemiWeather, setRovaniemiWeather] = useState(null);
  const [kirunaWeather, setKirunaWeather] = useState(null);
  const [tromsoWeather, setTromsoWeather] = useState(null);

  useEffect(() => {
    const fetchAllWeather = async () => {
      const rovaniemi = await fetchWeather({ fmisid: 137190 });
      const kiruna = await fetchWeather({ place: 'Kiruna' });
      const tromso = await fetchWeather({ place: 'Tromsø' });
      setRovaniemiWeather(rovaniemi);
      setKirunaWeather(kiruna);
      setTromsoWeather(tromso);
    };
  
    fetchAllWeather();
    const intervalId = setInterval(fetchAllWeather, 600000); // update every 10 minutes
  
    return () => clearInterval(intervalId);
  }, []);
  
  

  const renderWeather = (weather) => (
    <WeatherInfo>
      <img src={`/images/fmi/${weather.symbol}.svg`} alt="Weather Symbol" />
      <span className="temperature">{weather.temperature} °C</span>
      <div className="wind">
        <img
          src={`/images/fmi/arrow.svg`}
          alt="Wind Direction"
          className="arrow"
          style={{ transform: `rotate(${weather.windDirection + 90}deg)` }}
        />
        <span>{weather.windSpeed}</span>
      </div>
    </WeatherInfo>
  );

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
              <p>Welcome to the official airport of Santa Claus! Experience the magic of flying into the heart of the Arctic Circle, where holiday spirit and snowy landscapes await. Land at Rovaniemi and bring your Christmas flight sim adventure to life!</p>
            </AirportInformation>
            {rovaniemiWeather && renderWeather(rovaniemiWeather)}
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
              <p>As Sweden’s northernmost airport, Kiruna offers a gateway to the vast wilderness and the stunning Icehotel. Fly above the scenic snow-covered mountains and explore the adventure capital of Swedish Lapland, where reindeer and nature are right at your feet!</p>
            </AirportInformation>
            {kirunaWeather && renderWeather(kirunaWeather)}
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
              <p>Touch down in Tromsø, the gateway to the Arctic! Nestled among dramatic fjords and mountains, this airport delivers stunning views and the chance to catch the aurora borealis as you fly in. The ultimate winter flying challenge!</p>
            </AirportInformation>
            {tromsoWeather && renderWeather(tromsoWeather)}
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

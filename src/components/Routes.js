import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Styled Components
const RoutesSection = styled.section`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 100px 20px;

  h2 {
    color: ${({ theme }) => theme.sectionTitle};
  }
  h3 {
    padding-top: 20px;
    color: ${({ theme }) => theme.sectionSubTitle};
  }
  p {
    margin-top: 8px;
  }
`;

const SelectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 10px;
`;

const SelectionCard = styled.div`
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.text};
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 20px;
  transition: all 0.3s ease;
  border-radius: 0;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

  ${({ isSelected, theme }) =>
    isSelected &&
    `
    border-bottom: 3px solid #b63f3f;
  `}

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

const RouteTags = styled.div`
  display: block;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  padding: 0px 20px;
`;

const RouteTag = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.projectCard};
  color: ${({ theme }) => theme.tagText};
  padding: 5px 20px;
  border-radius: 0px;
  font-size: 14px;
  width: 100%; 
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const DropdownsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  padding: 10px 20px;
`;

const Dropdown = styled.select`
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.text};
  padding: 12px;
  border-radius: 0px;
  font-size: 16px;
  cursor: pointer;
  width: 50%;
  max-width: 300px;

  option {
    background-color: ${({ theme }) => theme.tagBackground};
    color: ${({ theme }) => theme.text};
  }
`;

// Component
const Routes = () => {
  const [routesData, setRoutesData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedAirport, setSelectedAirport] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [route, setRoute] = useState('');

  // Lookup for destination ICAO codes
  const destinationICAO = {
    Rovaniemi: 'EFRO',
    Kiruna: 'ESNQ',
    Tromsø: 'ENTC'
  };

  useEffect(() => {
    fetch('../data/routes.json')
      .then(response => response.json())
      .then(data => setRoutesData(data))
      .catch(error => console.error('Error fetching routes data:', error));
  }, []);

  useEffect(() => {
    if (selectedCountry && selectedAirport && selectedDestination) {
      const airportRoutes = routesData[selectedCountry]?.[selectedAirport];
      if (airportRoutes) {
        setRoute(airportRoutes[selectedDestination] || '');
      }
    }
  }, [selectedCountry, selectedAirport, selectedDestination, routesData]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedAirport(''); // Reset airport selection when country changes
  };

  const handleAirportChange = (e) => {
    setSelectedAirport(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setSelectedDestination(e.target.value);
  };

  const destinations = ['Rovaniemi', 'Kiruna', 'Tromsø'];

  const renderDropdownOptions = (data) => {
    return Object.keys(data).map(key => <option key={key} value={key}>{key}</option>);
  };

  const airports = selectedCountry ? Object.keys(routesData[selectedCountry] || {}) : [];

  // Update the routesUrl to include departure and arrival ICAO codes
  const routesUrl = route && selectedAirport && selectedDestination
    ? `https://skyvector.com/?fpl=${selectedAirport} ${route.replace(/\s+/g, '%20')} ${destinationICAO[selectedDestination]}`
    : '';

  return (
    <RoutesSection id="routes">
      <h2>Routes</h2>
      <p>To help us better facilitate traffic flow, we recommend using our route planner.</p>
      <h3>Select your destination</h3>

      <SelectionsGrid>
        {destinations.map(destination => (
          <SelectionCard
            key={destination}
            isSelected={selectedDestination === destination}
            onClick={() => setSelectedDestination(destination)}
          >
            {destination}
          </SelectionCard>
        ))}
      </SelectionsGrid>

      {selectedDestination && (
        <>
          <h3>Departure location</h3>

          <p>If your airport or country is not listed, don't worry!</p>
          <p>Plan your flight normally and be prepared for a possible reroute issued during your flight.</p>

          <DropdownsContainer>
            <Dropdown 
              value={selectedCountry} 
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              {Object.keys(routesData).map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </Dropdown>

            <Dropdown 
              value={selectedAirport} 
              onChange={(e) => setSelectedAirport(e.target.value)}
              disabled={!selectedCountry}
            >
              <option value="">Select Airport</option>
              {selectedCountry && Object.keys(routesData[selectedCountry]).map(airport => (
                <option key={airport} value={airport}>{airport}</option>
              ))}
            </Dropdown>
          </DropdownsContainer>

          {selectedCountry && selectedAirport && (
            <>
              <h3>Your route to {selectedDestination}</h3>
              <RouteTags>
                <RouteTag>{route}</RouteTag>
              </RouteTags>

              <a target='_blank' href={routesUrl}>
                  Open Route in SkyVector <FaExternalLinkAlt style={{ fontSize: '14px' }} />
              </a>
            </>
          )}
        </>
      )}
    </RoutesSection>
  );
};

export default Routes;

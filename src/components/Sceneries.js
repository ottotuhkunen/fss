import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Scenery Section Styling
const ScenerySection = styled.section`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 100px 40px;
  background: ${({ theme }) => theme.sceneriesBackground};

  h2 {
    color: ${({ theme }) => theme.sectionTitle};
    margin-bottom: 40px;
  }

  h3 {
    margin-top: 40px;
    color: ${({ theme }) => theme.sectionSubTitle};
  }
`;

// Scenery Grid Styling
const SceneryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

// Individual Scenery Card
const SceneryCard = styled.div`
  background-color: ${({ theme }) => theme.projectCard};
  padding: 0px;
  border-radius: 0px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;

  p {
    padding: 20px;
  }

  h3 {
    margin-top: 12px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

// Scenery Image
const SceneryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Scenery Info
const SceneryInfo = styled.div`
  padding: 20px;
  text-align: center;

  h4 {
    color: ${({ theme }) => theme.titleText};
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  .price {
    margin-bottom: 10px;
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

// Unified Button Styling
const SceneryButton = styled.a`
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.text};
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
  border-radius: 0px;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 48px;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.titleText};
    background-color: ${({ theme }) => theme.tagBackgroundHover};
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`;

const Sceneries = () => {
  // Sample data for the sceneries
  const sceneryData = [
    {
      airport: 'Rovaniemi',
      sceneries: [
        {
          sim: 'Scenery by Tatu',
          name: 'Rovaniemi EFRO',
          image: '/images/efro1.png',
          providerUrl: 'https://fi.flightsim.to/file/20910/efro-rovaniemi-finland',
          price: 'Freeware',
          icao: 'EFRO',
          type: 'MSFS'
        },
        {
          sim: 'Scenery by MK-Studios',
          name: 'Rovaniemi EFRO',
          image: '/images/efro2.png',
          providerUrl: 'https://orbxdirect.com/product/mkstudios-efro-msfs',
          price: 'Payware',
          type: 'MSFS'
        },
        {
          sim: 'Scenery by Tatu',
          name: 'Rovaniemi EFRO',
          image: '/images/efro3.png',
          providerUrl: 'https://files.fsnordic.net/rovaniemi-efro-revisited-version-3',
          price: 'Freeware',
          type: 'P3D, FSX'
        },
        {
          sim: 'Scenery by MK-Studios',
          name: 'Rovaniemi EFRO',
          image: '/images/efro4.png',
          providerUrl: 'https://orbxdirect.com/product/mkstudios-efro',
          price: 'Payware',
          type: 'P3D v4+'
        },
        {
          sim: 'Scenery by FLY X Simulations',
          name: 'Rovaniemi EFRO',
          image: '/images/efro5.png',
          providerUrl: 'https://store.x-plane.org/EFRO--Rovaniemi-Rebooted-_p_1097.html',
          price: 'Payware',
          type: 'X-Plane 11'
        },
      ],
    },
    {
      airport: 'Kiruna',
      sceneries: [
        {
          sim: 'Scenery by Orbx',
          name: 'Kiruna ESNQ',
          image: '/images/esnq0.jpg',
          providerUrl: 'https://orbxdirect.com/product/orbx-scandinavian-airports-msfs?sqid=accfb43c70c56ae282b61af30a95f173-3',
          price: 'Payware',
          type: 'MSFS'
        },
        {
          sim: 'Scenery by Orbx',
          name: 'Kiruna ESNQ',
          image: '/images/esnq1.jpg',
          providerUrl: 'https://orbxdirect.com/product/esnq?srsltid=AfmBOoqglBH9Wn-sc2RofM4N4iWsj_QPBozI8aeTxhk7DpzOKRVlKcQ1',
          price: 'Payware',
          type: 'P3D, FSX'
        },
        {
          sim: 'Scenery by Jodrim',
          name: 'Kiruna ESNQ',
          image: '/images/esnq2.png',
          providerUrl: 'https://forums.x-plane.org/index.php?/files/file/43733-esnq-kiruna-airport/',
          price: 'Freeware',
          type: 'X-Plane 11'
        },
      ],
    },
    {
      airport: 'Tromsø',
      sceneries: [
        {
          sim: 'Scenery by MM Simulations',
          name: 'Tromsø ENTC',
          image: '/images/entc1.jpg',
          providerUrl: 'https://orbxdirect.com/product/mmsimulations-entc-msfs?srsltid=AfmBOopK8hn26SFFccesfxBvjnjsTXFvQX8PN9z5fKdK_mGA2Ge0qbLw',
          price: 'Payware',
          type: 'MSFS'
        },
        {
          sim: 'Scenery by artogsta',
          name: 'Tromsø ENTC',
          image: '/images/entc2.png',
          providerUrl: 'https://fi.flightsim.to/file/62060/entc-troms-airport-langnes',
          price: 'Freeware',
          type: 'MSFS'
        },
        {
          sim: 'Scenery by Aerosoft',
          name: 'Tromsø ENTC',
          image: '/images/entc3.jpg',
          providerUrl: 'https://www.aerosoft.com/en/shop/flight/p3d-fsx/flight-simulator-x/sceneries/fsx-europe/1084/tromsoe-x',
          price: 'Payware',
          type: 'P3D v4+, FSX'
        },
        {
          sim: 'Scenery by Airports of Norway',
          name: 'Tromsø ENTC',
          image: '/images/entc4.jpeg',
          providerUrl: 'https://www.flightsimnorway.com/addons/default.php?funct=dl&pack=aon',
          price: 'Freeware',
          type: 'P3D v4'
        },
        {
          sim: 'Scenery by Aerosoft',
          name: 'Tromsø ENTC',
          image: '/images/entc5.jpg',
          providerUrl: 'https://www.aerosoft.com/en/shop/flight/x-plane/x-plane-11/sceneries/xp-europe/2475/tromsoe-xp',
          price: 'Payware',
          type: 'X-Plane 11 & 12'
        },
        {
          sim: 'Scenery by tdg',
          name: 'Tromsø ENTC',
          image: '/images/entc6.jpg',
          providerUrl: 'https://forums.x-plane.org/index.php?/files/file/53438-entc-tromso-airport-norway-xp11/',
          price: 'Freeware',
          type: 'X-Plane 11'
        },
      ],
    },
  ];

  return (
    <ScenerySection id="sceneries">
      <div className="container">
        <h2>Sceneries</h2>

        {sceneryData.map((airportData, index) => (
          <div key={index}>
            <h3>{airportData.airport} Airport</h3>
            <SceneryGrid>
              {airportData.sceneries.map((scenery, idx) => (
                <SceneryCard key={idx}>
                  <SceneryImage src={scenery.image} alt={scenery.name} />
                  <SceneryInfo>
                    <h3>{scenery.name}</h3>
                    <TechTags>
                      <TechTag>{scenery.type}</TechTag>
                    </TechTags>
                    <p>{scenery.sim}</p>
                    <div className="price">{scenery.price}</div>
                    <SceneryButton href={scenery.providerUrl} target="_blank" rel="noopener noreferrer">
                      Visit site <FaExternalLinkAlt style={{ fontSize: '14px', marginLeft: '6px' }} />
                    </SceneryButton>
                  </SceneryInfo>
                </SceneryCard>
              ))}
            </SceneryGrid>
          </div>
        ))}
      </div>
    </ScenerySection>
  );
};

export default Sceneries;

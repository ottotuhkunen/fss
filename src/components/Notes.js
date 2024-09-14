import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaCheckCircle, FaBroadcastTower } from 'react-icons/fa';

const RoutesSection = styled.section`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 100px 20px;
  background: ${({ theme }) => theme.airportsBackground};

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

const SelectionCard = styled.a`
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.text};
  padding: 12px 24px;
  border: none;
  cursor: pointer !important;
  display: inline-block;
  margin-top: 20px;
  transition: all 0.3s ease;
  border-radius: 0;
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

const Checklist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 60px 30px;
  text-align: left;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 16px;

    svg {
      margin-right: 16px;
      color: ${({ theme }) => theme.text};
      flex-shrink: 0;
    }
  }
`;

const AtisList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 60px 30px;
  text-align: left;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 16px;

    svg {
      margin-right: 16px;
      color: ${({ theme }) => theme.text};
      flex-shrink: 0;
    }
  }
`;

const Notes = () => {
  const [atisData, setAtisData] = useState({ EFRO: 'Loading EFRO ATIS...', ESNQ: 'Loading ESNQ ATIS...', ENTC: 'Loading ENTC ATIS...' });

  useEffect(() => {
    const fetchAtisData = async () => {
      try {
        const response = await fetch('https://data.vatsim.net/v3/vatsim-data.json');
        const data = await response.json();

        const efroAtis = data.atis.find(a => a.callsign === 'EFRO_ATIS');
        const esnqAtis = data.atis.find(a => a.callsign === 'ESNQ_ATIS');
        const entcAtis = data.atis.find(a => a.callsign === 'ENTC_ATIS');

        setAtisData({
          EFRO: efroAtis ? efroAtis.text_atis.join(' ') : 'EFRO ATIS NIL',
          ESNQ: esnqAtis ? esnqAtis.text_atis.join(' ') : 'ESNQ ATIS NIL',
          ENTC: entcAtis ? entcAtis.text_atis.join(' ') : 'ENTC ATIS NIL'
        });
      } catch (error) {
        console.error('Error fetching ATIS data:', error);
        setAtisData({ EFRO: 'EFRO ATIS NIL', ESNQ: 'ESNQ ATIS NIL', ENTC: 'ENTC ATIS NIL' });
      }
    };

    fetchAtisData();
    const intervalId = setInterval(fetchAtisData, 90000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <RoutesSection id="skills">
      <div className="container">
        <h2>Pilot Briefing</h2>
        <p>We would greatly appreciate it if you could take a few minutes to read our pilot briefing.</p>

        <SelectionsGrid>
          <SelectionCard href="https://wiki.vatsim-scandinavia.org/books/finnish-airports-charts/page/efro-rovaniemi" target='_blank'>
            Rovaniemi <FaExternalLinkAlt style={{ fontSize: '14px', marginLeft: '6px' }} />
          </SelectionCard>
          <SelectionCard href="https://wiki.vatsim-scandinavia.org/books/swedish-airports-charts/page/esnq-kiruna" target='_blank'>
            Kiruna <FaExternalLinkAlt style={{ fontSize: '14px', marginLeft: '6px' }} />
          </SelectionCard>
          <SelectionCard href="https://wiki.vatsim-scandinavia.org/books/norwegian-airports-charts/page/entc-tromso-langnes" target='_blank'>
            Tromsø <FaExternalLinkAlt style={{ fontSize: '14px', marginLeft: '6px' }} />
          </SelectionCard>
        </SelectionsGrid>

        <Checklist>
          <li>
            <h3>Checklist</h3>
          </li>
          <li>
            <FaCheckCircle /> Ensure Navigation Data and all flight charts are up-to-date
          </li>
          <li>
            <FaCheckCircle /> Verify slot booking and calculate your departure time
          </li>
          <li>
            <FaCheckCircle /> Prepare for Speed Control and possible Holding during the flight
          </li>
          <li>
            <FaCheckCircle /> Listen on the frequency and comply to ATC instructions
          </li>
          <li>
            <FaCheckCircle /> Expedite vacating the runway after landing
          </li>
          <li>
            <FaCheckCircle /> Enjoy the event! ❤️
          </li>
        </Checklist>

        <AtisList>
          <li>
            <h3>Current ATIS</h3>
          </li>
          <li><FaBroadcastTower /> {atisData.EFRO}</li>
          <li><FaBroadcastTower /> {atisData.ESNQ}</li>
          <li><FaBroadcastTower /> {atisData.ENTC}</li>
        </AtisList>
      </div>
    </RoutesSection>
  );
};

export default Notes;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the booking open date/time here
const bookingOpenDate = new Date('2024-12-01T00:00:00');

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
  margin-top: 26px !important;
`;

const TimeBlock = styled.div`
  background-color: ${({ theme }) => theme.projectCard}; 
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 80px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
`;

const TimeValue = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

const TimeLabel = styled.span`
  font-size: 12px;
  font-weight: normal;
  margin-top: 5px;
`;

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = +bookingOpenDate - +now;
      
      if (difference <= 0) {
        setHasPassed(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {hasPassed ? (
        <TimerTitle>Bookings are open!</TimerTitle>
      ) : (
        <>
          <TimerTitle>Bookings will open in</TimerTitle>
          <CountdownWrapper>
            <TimeBlock>
              <TimeValue>{timeLeft.days || '0'}</TimeValue>
              <TimeLabel>Days</TimeLabel>
            </TimeBlock>
            <TimeBlock>
              <TimeValue>{timeLeft.hours || '0'}</TimeValue>
              <TimeLabel>Hours</TimeLabel>
            </TimeBlock>
            <TimeBlock>
              <TimeValue>{timeLeft.minutes || '0'}</TimeValue>
              <TimeLabel>Minutes</TimeLabel>
            </TimeBlock>
            <TimeBlock>
              <TimeValue>{timeLeft.seconds || '0'}</TimeValue>
              <TimeLabel>Seconds</TimeLabel>
            </TimeBlock>
          </CountdownWrapper>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;

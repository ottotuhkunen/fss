// src/components/Contact.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const LiveSection = styled.section`
  color: white;
  padding: 100px 40px;

  background-image: url('/images/santa.png');
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.santaBackground};

  h2 {
    color: ${({ theme }) => theme.liveTitle};
  }
`;


const TwitchEmbedWrapper = styled.div`
  margin-top: 20px;
  
  iframe {
    border: none;
    width: 100%;
    max-width: 600px;
    height: 338px;
    border-radius: 0px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Contact = () => {

  return (
    <LiveSection id="live">
      <h2>Follow us Live</h2>
      <p>Our Finnish controllers are hosting a live event which will be streamed!</p>

      <TwitchEmbedWrapper>
        <iframe
          src="https://player.twitch.tv/?channel=vatsimscandinavia&parent=localhost&parent=fss.lusep.fi"
          allowFullScreen={true}
        ></iframe>
      </TwitchEmbedWrapper>

    </LiveSection>
  );
};

export default Contact;

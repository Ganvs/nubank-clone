import React from 'react';

import QRCode from 'react-native-qrcode-svg';

import {Container, Code} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://github.com/Ganvs"
          size={80}
          color="#8b10ae"
          backgroundColor="#fff"
        />
      </Code>
    </Container>
  );
}

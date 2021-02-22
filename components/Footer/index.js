import React from 'react';
import {  Container,
          Content,
          Text,
          Line,
          ContactFooter,
          Links,
          EmailIcon,
          InstagramIcon,
          LinkedinIcon,
          TwitterIcon } from './styles';

const Footer = () => {
  return (
    <Container>
      <Container>
        <Content>
          <Text>Lucas da Silva Leoncio - Engenharia Mecatrônica</Text>
        </Content>
        <Line/>
        <ContactFooter>
          <Links href="mailto: lucas.leoncio.silva@gmail.com" target="_blank"><EmailIcon/></Links>
          <Links href="https://www.instagram.com/lucas.ccac/" target="_blank"><InstagramIcon/></Links>
          <Links href="https://www.linkedin.com/in/lucas-silva-464b45164" target="_blank"><LinkedinIcon/></Links>
          <Links href="https://twitter.com/Lucasda24527132" target="_blank"><TwitterIcon/></Links>
        </ContactFooter>
      </Container>
    </Container>
  );
};

export default Footer;

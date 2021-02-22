import React from 'react';
import {  Container, 
          ContentTitle, 
          TitleMainName,
          TitleName, 
          ContentIcons,
          EmailIcon,
          InstagramIcon,
          LinkedinIcon,
          TwitterIcon,
          Link } from './styles';

const Header = () => {
  return (
    <Container>
      <ContentIcons>
        <Link href="mailto: lucas.leoncio.silva@gmail.com" target="_blank"><EmailIcon/></Link>
        <Link href="https://www.instagram.com/lucas.ccac/" target="_blank"><InstagramIcon/></Link>
        <Link href="https://www.linkedin.com/in/lucas-silva-464b45164" target="_blank"><LinkedinIcon/></Link>
        <Link href="https://twitter.com/Lucasda24527132" target="_blank"><TwitterIcon/></Link>
      </ContentIcons>
      <ContentTitle>
        <TitleMainName
          initial={{
            y: "-1000px",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: [0, 0.5, 1]
          }}
          transition={{
            delay: 5,
            mass: 10,
            stiffness: 120,
          }}
        >
          Lucas da Silva Leoncio
        </TitleMainName>
      </ContentTitle>
      <ContentTitle>
        <TitleName>
          Engenharia Mecatrônica - UFRN
        </TitleName>
      </ContentTitle>
    </Container>
  );
};

export default Header;

import React from 'react';
import Image from 'next/image';
import {  Container,
          Text,
          Title, } from './styles';

const Main = () => {
  return (
    <Container>
      <Title>Arduino</Title>
      <Text>
      O Arduino foi criado em 2005 por um grupo de 5 pesquisadores : Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino e David Mellis. O objetivo era elaborar um dispositivo que fosse ao mesmo tempo barato, funcional e fácil de programar, sendo dessa forma acessível a estudantes e projetistas amadores. Além disso, foi adotado o conceito de hardware livre, o que significa que qualquer um pode montar, modificar, melhorar e personalizar o Arduino, partindo do mesmo hardware básico.

Assim, foi criada uma placa composta por um microcontrolador Atmel, circuitos de entrada/saída e que pode ser facilmente conectada à um computador e programada via IDE (Integrated Development Environment, ou Ambiente de Desenvolvimento Integrado) utilizando uma linguagem baseada em C/C++, sem a necessidade de equipamentos extras além de um cabo USB.
      </Text>
      <Image
        src="/Arduino.png"
        layout="fixed"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <Title>Possibilidades com Arduino</Title>
      <Text>
      A lista de possibilidades é praticamente infinita. Você pode automatizar sua casa, seu carro, seu escritório, criar um novo brinquedo, um novo equipamento ou melhorar um já existente. Tudo vai depender da sua criatividade.

Para isso, o Arduino possui uma quantidade enorme de sensores e componentes que você pode utilizar nos seus projetos. Grande parte do material utilizado está disponível em módulos, que são pequenas placas que contém os sensores e outros componentes auxiliares como resistores, capacitores e leds.
Existem também os chamados Shields, que são placas que você encaixa no Arduino para expandir suas funcionalidades. A imagem abaixo mostra um Arduino Ethernet Shield encaixado no Arduino Mega 2560. Ao mesmo tempo que permite o acesso à uma rede ou até mesmo à internet, mantém os demais pinos disponíveis para utilização, assim você consegue, por exemplo, utilizar os pinos para receber dados de temperatura e umidade de um ambiente, e consultar esses dados de qualquer lugar do planeta:
      </Text>
    </Container>
  );
};

export default Main;

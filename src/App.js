import React from 'react';
import {Container, Image, ContainerItems, H1, InputLabel, Input, Button} from './styles.js';

export default function App() {

  return(
    <Container>
      <Image></Image>

      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome completo...'></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Nome completo...'></Input>

        <Button>Cadastrar</Button>
      </ContainerItems>
    </Container>
  )

}
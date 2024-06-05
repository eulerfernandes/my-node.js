import React from "react";

import Usuario1 from './assets/usuario1.png'
import Seta from './assets/seta.png'

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from "./style";

function App(){

  return (
    <Container>
      <Image alt="usuario1" src={Usuario1}/>
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idades</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="seta" src={Seta}/></Button>

        </ContainerItens>
      
    </Container>
  );
}

export default App;
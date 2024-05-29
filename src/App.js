import React from "react";

import { Container, Img, ContainerItens, H1, InputLabel, Input, Button } from "./style";

function App(){

  return (
    <Container>
      <Image />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idades</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar</Button>
        
        </ContainerItens>
      
    </Container>
  );
}

export default App;
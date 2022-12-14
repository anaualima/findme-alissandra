import React, { useState } from 'react';
import {
  Label,
  Form,
  Input,
  Button,
  FormGroup,
} from "reactstrap";

function Collaborator() {

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <Form>
        <h1>Cadastro da pessoa colaboradora</h1>
        <FormGroup>
          <Label>
            Nome:
          </Label>
          <Input
            type="text"
            id="nome"
            placeholder="Nome da pessoa colaboradora"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Nome:
          </Label>
          <Input
            type="text"
            id="senha"
            placeholder="Senha da pessoa colaboradora"
            value={senha}
            onChange={({ target }) => setSenha(target.value)}
          />
        </FormGroup>
        <Button
          type="submit"
          color="primary"
        >
          Cadastrar
        </Button>
      </Form>
    </div>
  )
}

export default Collaborator;
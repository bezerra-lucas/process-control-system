import React, { useEffect, useState } from "react";

import {
  Container,
  SubmitButton,
  InputGroup,
  Form,
  Wrapper,
} from "./../../../../global-styles";

import { database } from "./../../../../firebase";

import { addDoc, collection } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const Create: React.FC = () => {
  const navigate = useNavigate();

  type inputsInterface = {
    name: string;
    description: string;
  };

  const [inputs, setInputs] = useState<inputsInterface>({
    name: "",
    description: "",
  });

  const [errorState, setErrorState] = useState(false);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const categoriesCollectionRef = collection(database, "categories");

  const handleSubmit = async () => {
    await addDoc(categoriesCollectionRef, {
      name: inputs.name,
      description: inputs.description,
    });
    navigate("/");
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  return (
    <Container>
      <Wrapper>
        <h1>Cadastrar Categoria</h1>

        <Form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Categoria"
              value={inputs.name || ""}
              onChange={handleChange}
              className={errorState ? "error" : ""}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              id="description"
              placeholder="Esta categoria é responsável por..."
              value={inputs.description || ""}
              onChange={handleChange}
              className={errorState ? "error" : ""}
            ></textarea>
          </InputGroup>

          {errorState ? (
            <span>
              Ocorreu um erro ao criar a categoria, por favor tente novamente ou
              comunique o responsável pelo sistema
            </span>
          ) : (
            ""
          )}

          <SubmitButton type="button" onClick={() => handleSubmit()}>
            CADASTRAR
          </SubmitButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Create;

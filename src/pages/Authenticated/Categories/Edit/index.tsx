import React, { useEffect, useState } from "react";

import {
  Container,
  SubmitButton,
  InputGroup,
  Form,
  Wrapper,
  DeleteButton,
} from "./../../../../global-styles";
import {} from "./styles";

import { getDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { database } from "./../../../../firebase";
import { useNavigate } from "react-router-dom";

async function asyncGetSnapshot(docRef: any) {
  return await getDoc(docRef);
}

const Edit: React.FC = () => {
  const { paramId } = useParams();

  const navigate = useNavigate();

  const docRef = doc(database, "categories", paramId || "");

  const [inputs, setInputs] = useState<any>({
    name: "",
    description: "",
  });

  useEffect(() => {
    asyncGetSnapshot(docRef)
      .then((res) => {
        if (res.data != undefined) {
          setInputs(res.data());
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    await setDoc(docRef, {
      name: inputs.name,
      description: inputs.description,
    });

    navigate("/");
  };

  const handleDelete = async () => {
    await deleteDoc(docRef);
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <h1>Editar Categoria</h1>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <InputGroup>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              value={inputs.name}
              onChange={handleChange}
              name="name"
              id="name"
              placeholder="Nenhum nome definido para esta categoria..."
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="description">Descrição</label>
            <textarea
              value={inputs.description}
              onChange={handleChange}
              name="description"
              id="description"
              placeholder="Nenhuma descrição definida para esta categoria..."
            ></textarea>
          </InputGroup>
          <SubmitButton type="button" onClick={handleSubmit}>
            EDITAR
          </SubmitButton>
          <DeleteButton onClick={handleDelete} type="button">
            APAGAR
          </DeleteButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Edit;

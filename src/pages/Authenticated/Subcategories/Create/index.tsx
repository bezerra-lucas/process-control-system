import React, { useState } from "react";

import {
  Container,
  SubmitButton,
  InputGroup,
  Form,
  Wrapper,
} from "./../../../../global-styles";

import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseApp, database, storage } from "./../../../../firebase";

import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

import FilesForm from "./../../../../components/FilesForm";

const Create: React.FC = () => {
  const navigate = useNavigate();

  const [categoriesValue, categoriesLoading, categoriesError] = useCollection(
    collection(getFirestore(firebaseApp), "categories"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [files, setFiles] = useState([]);

  type inputsInterface = {
    name: string;
    description: string;
    category_reference: string;
  };

  const [inputs, setInputs] = useState<inputsInterface>({
    name: "",
    description: "",
    category_reference: "",
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const subcategoriesCollectionRef = collection(database, "subcategories");

  const handleSubmit = async () => {
    const fileReferenceDatabase: any = [];

    files.map((file: any) => {
      fileReferenceDatabase.push({
        id: file.id,
        name: file.name,
        lastModifiedDate: file.lastModifiedDate,
        size: file.size,
        type: file.type,
      });

      const fileRef = ref(storage, file.id);
      uploadBytes(fileRef, file).then((res) => {});
    });

    await addDoc(subcategoriesCollectionRef, {
      name: inputs.name,
      description: inputs.description,
      category_reference: inputs.category_reference,
      files: fileReferenceDatabase,
    });

    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <h1>Cadastrar Subcategoria</h1>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <InputGroup>
            <label>Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome da Subcategoria"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label>Descrição</label>
            <textarea
              name="description"
              id="description"
              placeholder="Esta subcategoria é responsável por..."
              value={inputs.description || ""}
              onChange={handleChange}
            ></textarea>
          </InputGroup>

          <InputGroup>
            <label>Categoria</label>
            <select
              onChange={handleChange}
              name="category_reference"
              id="category_reference"
              defaultValue="null"
            >
              <option value="null" disabled>
                Selecione uma categoria
              </option>
              {categoriesLoading || !categoriesValue
                ? "loading"
                : categoriesValue?.docs.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.data().name}
                      </option>
                    );
                  })}
            </select>
          </InputGroup>

          <FilesForm
            handleFileList={(filesFromComponent: any) => {
              setFiles(filesFromComponent);
              console.log("files state: ", files);
            }}
          />

          <SubmitButton type="submit">CADASTRAR</SubmitButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Create;

import React, { useEffect, useState } from "react";

import { Container } from "./../../../../global-styles";

import {
  Breadcrumb,
  Title,
  Information,
  Description,
  Author,
  Files,
  FilesHeader,
  CardName,
  Helper,
  FilesBody,
  Left,
  Right,
  Wrapper,
  VisualizationText,
  RightHeader,
  DownloadButton,
  Preview,
  Buttons,
  AddButton,
  RemoveButton,
  AddFile,
} from "./styles";

import { FiPlus, FiDownload } from "react-icons/fi";

import { FiTrash2 } from "react-icons/fi";

import { doc, getDoc, DocumentData } from "firebase/firestore";
import { firebaseApp, database, storage } from "./../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { Button } from "./../../../../global-styles";

import { v4 } from "uuid";

import { useParams } from "react-router-dom";

const View: React.FC = () => {
  const { id } = useParams();

  const [preview, setPreview] = useState<string | null>(null);

  const [category, setCategory] = useState<DocumentData>();
  const [subcategory, setSubcategory] = useState<DocumentData>();
  const [files, setFiles] = useState<any>([]);

  const getSubcategory = async () => {
    let subcategoryDocumentReference = doc(database, "subcategories", id || "");
    return await getDoc(subcategoryDocumentReference);
  };

  useEffect(() => {
    let filesWithIsChecked: any = [];

    subcategory?.data().files.map((file: any) => {
      file.isChecked = false;
      filesWithIsChecked.push(file);
    });

    setFiles(filesWithIsChecked);
  }, [subcategory]);

  useEffect(() => {
    getSubcategory()
      .then((result) => {
        setSubcategory(result);
        console.log(subcategory);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      let categoryDocumentReference = doc(
        database,
        "categories",
        subcategory?.data().category_reference
      );
      return await getDoc(categoryDocumentReference);
    };

    getCategory()
      .then((result) => {
        setCategory(result);
      })
      .catch((err) => console.log(err));
  }, [subcategory]);

  const handleFileChange = async (e: any) => {
    let file: any = e.target.files[0];
    file.id = v4();
    setFiles((prevFiles: any) => [...prevFiles, file]);
  };

  const handleDeleteFileState = (id: any) => {
    setFiles((current: any) =>
      current.filter((file: any) => {
        return file.id != id;
      })
    );

    console.log(files);
  };

  const handleSelectFile = (id: any) => {
    let filesVar = [...files];

    let res = filesVar.find((elem) => {
      if (elem.id == id) {
        return elem.id;
      }
    });

    setFiles((current: any) =>
      current.filter((file: any) => {
        if (file.id == res.id) {
          file.isChecked = true;
          getDownloadURL(ref(storage, res.id))
            .then((url) => {
              setPreview(url);
              file.url = url;
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          file.isChecked = false;
          file.url = "";
        }
        return file;
      })
    );
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Information>
            <Breadcrumb>
              <a href={"/categorias/editar/" + category?.id}>
                {category?.data().name}
              </a>
            </Breadcrumb>
            <Title>{subcategory?.data().name}</Title>
            <Description>{subcategory?.data().description}</Description>
            {/* <Author href="#">Autor: João da Silva</Author> */}
          </Information>

          <Files>
            <FilesHeader>
              <CardName>Arquivos</CardName>
              <Helper>・(Clique para visualizar o conteúdo.)</Helper>
            </FilesHeader>
            <FilesBody>
              {files ? (
                files.length ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Tamanho</th>
                      </tr>
                    </thead>
                    <tbody>
                      {files?.map((file: any) => (
                        <tr
                          key={file?.id}
                          id={file?.id}
                          onClick={() => {
                            handleSelectFile(file?.id);
                          }}
                          className={file.isChecked ? "checked" : "not_checked"}
                        >
                          <td>{file?.name}</td>
                          <td>{Math.trunc(file?.size / 1000)} kb</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  "Nenhum arquivo selecionado até o momento, por favor clique no ícone + acima."
                )
              ) : (
                "Nenhum arquivo selecionado até o momento, por favor clique no ícone + acima."
              )}
            </FilesBody>
          </Files>
          {preview ? (
            <DownloadButton href={preview} target="_blank">
              <button>
                <FiDownload />
                <span>Download</span>
              </button>
            </DownloadButton>
          ) : (
            ""
          )}
        </Left>

        <Right>
          <RightHeader>
            <VisualizationText>Visualização</VisualizationText>
          </RightHeader>
          <Preview>
            {preview ? (
              <img
                src={preview}
                alt="Pré-visualização não disponível para este formato de arquivo."
              />
            ) : (
              ""
            )}
          </Preview>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default View;

import React, { useEffect, useState } from "react";

import {
  Files,
  FilesHeader,
  CardName,
  FilesBody,
  Helper,
  AddFile,
} from "./styles";

import { Button } from "./../../global-styles";

import { FiPlus, FiDownload } from "react-icons/fi";

import { v4 } from "uuid";
import { FiTrash2 } from "react-icons/fi";

type TypeProps = {
  viewOnly?: boolean;
  handleFileList: Function;
  setFileList?: Array<any>;
};

const FilesForm: React.FC<TypeProps> = ({
  handleFileList,
  setFileList,
  viewOnly,
}) => {
  const [files, setFiles] = useState<any>([]);

  useEffect(() => {
    if (setFileList) {
      setFiles(setFileList);
    }
  }, [setFileList]);

  useEffect(() => {
    handleFileList(files);
  }),
    [files];

  const handleFileChange = async (e: any) => {
    let file: any = e.target.files[0];
    file.id = file.name;
    setFiles((prevFiles: any) => [...prevFiles, file]);
  };

  const handleDeleteFileState = (id: any) => {
    setFiles((current: any) =>
      current.filter((file: any) => {
        return file.id != id;
      })
    );
  };

  return (
    <Files>
      <FilesHeader>
        <CardName>Arquivos</CardName>
        <Helper>・(Clique para visualizar o conteúdo.)</Helper>

        {!viewOnly ? (
          <AddFile>
            <input
              name="fileUpload"
              id="fileUpload"
              type="file"
              onChange={(e) => handleFileChange(e)}
              style={{ display: "none" }}
              multiple
            />
            <label htmlFor="fileUpload">
              <FiPlus />
            </label>
          </AddFile>
        ) : null}
      </FilesHeader>
      <FilesBody>
        {files.length ? (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tamanho</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file: any) => (
                <tr key={file.id} id={file.id}>
                  <td>{file.name}</td>
                  <td>{Math.trunc(file.size / 1000)} kb</td>
                  <td>
                    <Button
                      action="delete"
                      type="button"
                      onClick={() => handleDeleteFileState(file.id)}
                    >
                      <FiTrash2 />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "Nenhum arquivo selecionado até o momento, por favor clique no ícone + acima."
        )}
      </FilesBody>
    </Files>
  );
};

export default FilesForm;

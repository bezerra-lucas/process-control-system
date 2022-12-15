import React, { useEffect, useState } from "react";

import { Container, Card } from "./../../../../global-styles";
import { Table, CardTitle, Name, Desc } from "./styles";
import { Button } from "./../../../../global-styles";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";

import { useCollection } from "react-firebase-hooks/firestore";
import {
  getFirestore,
  collection,
  DocumentData,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseApp, database } from "./../../../../firebase";

const View: React.FC = () => {
  const [categories] = useCollection(
    collection(getFirestore(firebaseApp), "categories")
  );

  const [subcategories] = useCollection(
    collection(getFirestore(firebaseApp), "subcategories")
  );

  const [categoriesWithSubcategories, setCategoriesWithSubcategories] =
    useState<DocumentData[]>([]);

  useEffect(() => {
    let categoriesArray: any = [];

    categories?.docs.map((category) => {
      let categoryWithSubcategory = category.data();
      categoryWithSubcategory.id = category.id;
      categoryWithSubcategory.subcategory = [];

      subcategories?.docs.map((subcategory) => {
        if (subcategory?.data().category_reference == category.id) {
          let processedSubcategory = subcategory.data();
          processedSubcategory.id = subcategory.id;

          categoryWithSubcategory.subcategory.push(processedSubcategory);
        }
      });

      categoriesArray.push(categoryWithSubcategory);
    });

    setCategoriesWithSubcategories(categoriesArray);
  }, [categories, subcategories]);

  const handleDelete = async (id: string) => {
    const subcategoriesDocumentReference = doc(database, "subcategories", id);
    await deleteDoc(subcategoriesDocumentReference);
    console.log(subcategoriesDocumentReference);
  };

  return (
    <>
      <Container>
        <h1 className="text-align-center">Visualização de Categorias</h1>

        {categoriesWithSubcategories?.map((doc) => (
          <Card key={doc.id}>
            <CardTitle>
              <Name>
                <h2>{doc.name}</h2>
                <a href={"/categorias/editar/" + doc.id}>
                  <Button action="edit">
                    <FiEdit />
                  </Button>
                </a>
              </Name>
              <Desc>
                <p>{doc.description}</p>
              </Desc>
            </CardTitle>

            {doc.subcategory.length != 0 ? (
              <Table>
                <thead>
                  <tr>
                    <th>Nome da Subcategoria</th>
                    <th>Descrição do Processo</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {doc.subcategory?.map((subc: any) => (
                    <tr key={subc.id}>
                      <td>
                        <a href={"/subcategorias/visualizar/" + subc.id}>
                          {subc.name}
                        </a>
                      </td>
                      <td>{subc.description}</td>
                      <td>
                        <a href={"/subcategorias/editar/" + subc.id}>
                          <Button action="edit">
                            <FiEdit />
                          </Button>
                        </a>
                        <a href={"/subcategorias/visualizar/" + subc.id}>
                          <Button action="view">
                            <FiEye />
                          </Button>
                        </a>
                        <a onClick={() => handleDelete(subc.id)}>
                          <Button action="delete">
                            <FiTrash2 />
                          </Button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              "Nenhuma subcategoria cadastrada para esta categoria"
            )}
          </Card>
        ))}
      </Container>
    </>
  );
};

export default View;

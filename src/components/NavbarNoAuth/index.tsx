import React, { useState, useEffect } from "react";

import { LoginButton } from "./styles";

import Login from "./../Login";

import { Background } from "./../Sidebar/styles";

import { Container, Logo, Search, Content, Results } from "./../Navbar/styles";

import logo from "./../../assets/images/logo-branco.png";
import { FaSearch } from "react-icons/fa";

import { useSidebarContext } from "./../../contexts/SidebarContext";

import { useCollection } from "react-firebase-hooks/firestore";
import {
  getFirestore,
  collection,
  DocumentData,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseApp, database } from "./../../firebase";

const NavbarNoAuth: React.FC = () => {
  const [login, updateLogin] = useState(false);

  const sidebarContext = useSidebarContext();

  const [searchState, updateSearchState] = useState("");

  const [results, setResults] = useState([]);

  const [data, setData] = useState([]);

  const [inputLeft, setInputLeft] = useState<any>([]);

  const [categories] = useCollection(
    collection(getFirestore(firebaseApp), "categories")
  );

  const [subcategories] = useCollection(
    collection(getFirestore(firebaseApp), "subcategories")
  );

  const handleSearchChange = (event: any) => {
    updateSearchState(event.target.value);
  };

  useEffect(() => {
    function trimString(s: string) {
      var l = 0,
        r = s.length - 1;
      while (l < s.length && s[l] == " ") l++;
      while (r > l && s[r] == " ") r -= 1;
      return s.substring(l, r + 1);
    }

    function compareObjects(o1: any, o2: any) {
      var k = "";
      for (k in o1) if (o1[k] != o2[k]) return false;
      for (k in o2) if (o1[k] != o2[k]) return false;
      return true;
    }

    function itemExists(haystack: any, needle: any) {
      for (var i = 0; i < haystack.length; i++)
        if (compareObjects(haystack[i], needle)) return true;
      return false;
    }

    function searchFor(toSearch: any) {
      var results: any = [];
      toSearch = trimString(toSearch); // trim it
      for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
          var comparedData = data[i][key];
          if (typeof comparedData == typeof "") {
            var stringComparedData = comparedData as string;

            stringComparedData = stringComparedData.toLowerCase();

            if (stringComparedData.indexOf(toSearch) != -1) {
              if (!itemExists(results, data[i])) results.push(data[i]);
            }
          } else {
            console.log("not string: ", comparedData);
          }
        }
      }
      return results;
    }

    setResults(searchFor(searchState));
  }, [searchState]);

  useEffect(() => {
    if (subcategories?.docs) {
      let categoriesArray = categories?.docs;
      let mergedArraysEdited: any = [];

      if (categoriesArray) {
        let mergedArrays: any = categoriesArray.concat(subcategories?.docs);

        mergedArrays?.map((arr: any) => {
          if (arr.data().category_reference) {
            arr.type = "subcategoria";
          } else {
            arr.type = "categoria";
          }

          mergedArraysEdited.push({
            ...arr.data(),
            id: arr.id,
            type: arr.type,
          });
        });
      }

      setData(mergedArraysEdited);
    }
  }, [categories, subcategories]);

  const resultsList = () => {
    if (searchState.length == 0 || results.length == 0) {
      return "";
    } else {
      function returnClickLink(type: any, id: any) {
        if (type == "subcategoria") {
          window.location.href = "/subcategorias/visualizar/" + id;
        }
      }

      return (
        <Results id="result_list" left={inputLeft}>
          <ul>
            {results.map((res: any) => (
              <li
                key={res.id}
                onClick={() => returnClickLink(res.type, res.id)}
              >
                <span className="name">{res.name}</span>
                <span className="type">{res.type}</span>
              </li>
            ))}
          </ul>
        </Results>
      );
    }
  };

  useEffect(() => {
    const search_input = document.getElementById("search_input");

    if (search_input) {
      setInputLeft(search_input.getBoundingClientRect().left);
    }
  });

  return (
    <>
      <Login isOpen={login} />
      <Background
        className={login ? "visible" : "invisible"}
        onClick={() => {
          updateLogin(false);
        }}
      />

      <Container
        style={{
          zIndex: 1,
        }}
      >
        <Content>
          <a href="/" style={{ margin: "0 auto 0 0" }}>
            <Logo src={logo} />
          </a>
          <Search autoComplete="off">
            <FaSearch />
            <input
              type="text"
              placeholder="Procure pelo nome do processo / categoria / subcategoria"
              value={searchState || ""}
              onChange={handleSearchChange}
              id="search_input"
            />
          </Search>
          <LoginButton onClick={() => updateLogin(true)}>LOGIN</LoginButton>
        </Content>
      </Container>
      {resultsList()}
    </>
  );
};

export default NavbarNoAuth;

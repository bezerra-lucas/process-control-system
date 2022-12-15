import React, { FormEvent, useState } from "react";

import { Card, Password, Wrapper } from "./styles";
import logo from "./../../assets/images/logo.png";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { firebaseApp } from "./../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const auth = getAuth(firebaseApp);

import { useAuthContext } from "../../contexts/AuthContext";

type LoginProps = {
  isOpen: boolean;
};

const Login: React.FC<LoginProps> = ({ isOpen }: LoginProps) => {
  const authContext = useAuthContext();

  type inputsInterface = {
    email: string;
    password: string;
  };

  const [inputs, setInputs] = useState<inputsInterface>({
    email: "",
    password: "",
  });

  const [errorState, setErrorState] = useState(false);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = () => {
    signInWithEmailAndPassword(inputs.email, inputs.password);

    if (!loading) {
      if (error) {
        console.log(error);
        setErrorState(true);
      } else if (user) {
        signOut(auth);
      }
    }
  };

  return (
    <Wrapper className={isOpen ? "visible" : "invisible"}>
      <Card>
        <form onSubmit={(e) => e.preventDefault()}>
          <img src={logo} alt="" />

          <h1>Login</h1>

          <div className="text_inputs">
            <div>
              <FaEnvelope />
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                className={errorState ? "error" : ""}
              />
            </div>

            <div>
              <FaLock />
              <input
                type="password"
                placeholder="Senha"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                className={errorState ? "error" : ""}
              />
            </div>

            {errorState ? (
              <span>Email ou senha errados, verifique seus dados.</span>
            ) : (
              ""
            )}
          </div>

          <button type="button" onClick={() => handleSubmit()}>
            ENTRAR
          </button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Login;

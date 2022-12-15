import styled from "styled-components";

export const Container = styled.div`
  background-color: #343434;

  width: 15vw;

  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  * {
    width: 100%;
    max-width: 100%;
  }
`;

export const ContainerContent = styled.div`
  margin: 50px 0 auto 0;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  background-color: white;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #5c5c5c;
    width: 60px;
    height: 60px;
  }
`;

export const Name = styled.span`
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 17.8241px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 4px;
`;

export const Email = styled.span`
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 12.2362px;
  line-height: 14px;
  text-align: center;
`;

export const Navmenu = styled.div`
  margin-top: 120px;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    height: 43px;
    max-width: 100%;
    background-color: #202020;
    color: white;

    color: #ffffff;
  }
`;

export const NavUp = styled.div`
  li {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    span {
      margin: 0 auto 0 auto;
      width: 85%;
    }
  }
`;

export const NavDown = styled.div`
  margin-top: 80px;
  li {
    justify-content: center;
  }
`;

export const ToogleSidebar = styled.div`
  position: fixed;
  left: 15vw;
  top: 50vh;
`;

export const IconToogleSidebar = styled.div`
  cursor: pointer;

  width: 25px;
  height: 50px;
  border-radius: 0 100% 100% 0;

  background-color: #777;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Navbar = styled.div`
  background-color: var(--primary);
  height: 65px;
  display: flex;
  align-items: center;

  position: fixed;
  width: 85vw;

  top: 0;
  right: 0;

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14.0717px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;

    margin: 0 0 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  width: 100%;
  margin: auto;
`;

export const Logo = styled.img`
  height: 58px;

  margin: 0 auto 0 0;
`;

export const Search = styled.form`
  display: flex;
  align-items: center;
  margin: 0 20px 0 20px;

  button {
    height: 38px;
    width: 38px;

    outline: none;
    border: none;

    border-radius: 3px;

    background-color: #1c521a;

    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0 3px 3px 0;
  }

  button:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }

  input {
    border: none !important;
    outline: none;

    width: 500px;
    height: 38px;
    left: 528px;
    top: 12px;

    padding: 0 0 0 16px !important;

    background: #f7f7f7;
    border: 1px solid #939393;
    border-radius: 3px 0 0 3px;
  }

  input:after,
  input:focus {
    border: none;
    outline: none;
  }
`;

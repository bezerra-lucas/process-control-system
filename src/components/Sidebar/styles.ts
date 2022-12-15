import styled from "styled-components";

export const Container = styled.div`
  background-color: #343434;

  width: 15vw;

  height: 100vh;
  position: fixed;

  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  animation: normal;
  transition: 0.7s;

  z-index: 0;

  * {
    width: 100%;
    max-width: 100%;
  }

  &.active {
    left: 0;
  }

  &.inactive {
    left: -15vw;
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

    animation: normal;
    transition: 0.4s;

    cursor: pointer;

    &:hover {
      background-color: #111;
    }
  }
`;

export const NavUp = styled.div`
  li {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    animation: normal;
    transition: 0.4s;

    &:hover {
      font-weight: 500;
      border-left: solid 10px white;
    }

    a {
      color: #dedede;
      margin: 0 auto 0 auto;
      width: 85%;
      text-decoration: none;

      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      padding: 0 0 0 20px;
    }
  }
`;

export const NavDown = styled.div`
  margin-top: 80px;
  li {
    justify-content: center;

    a {
      color: #dedede;
      width: 85%;
      text-decoration: none;
      text-align: center;

      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ToogleSidebar = styled.div`
  position: fixed;
  left: 15vw;
  top: 50vh;

  animation: normal;
  transition: 0.7s;

  z-index: -2;

  &.active {
    left: 15vw;
  }

  &.inactive {
    left: 0vw;
  }
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
    animation: normal;
    transition: 0.7s;

    &.inactive {
      rotate: 180deg;
    }
  }
`;

export const Background = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0%;

  z-index: 10;

  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.8);

  &.visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 1000ms;
  }

  &.invisible {
    visibility: hidden;
    opacity: 0;
    transition: opacity 1000ms;
  }
`;

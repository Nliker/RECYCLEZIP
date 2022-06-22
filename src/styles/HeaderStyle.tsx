import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

//navbar style
export const Nav = styled.div<{ isToggled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1rem;
  height: 2rem;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
`;

export const Logo = styled.img`
  height: 80%;
  cursor: pointer;
`;

export const Menu = styled.div<{ isToggled: boolean }>`
  display: ${(props) => (props.isToggled ? "flex" : "none")};
  flex-direction: column;
  background-color: white;
  height: 100%;
  margin-top: 2.6rem;
  width: 30%;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  //애니메이션
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(2rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  animation: fadeIn 0.3s ease-in-out;

  @media (min-width: 1065px) {
    all: unset;
    display: flex;
    flex-direction: row;
  }
`;

export const Link = styled(RouterLink)<{ border?: string }>`
  all: unset;
  font-size: 0.6rem;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  margin: 0 0.5rem;
  text-align: left;
  border-bottom: ${(props) => props.border};
  @media (min-width: 1065px) {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin: 0 1rem;
    padding: 0;
    border: none;
  }
`;

export const IconMenu = styled.div`
  @media (min-width: 1065px) {
    display: none;
  }
`;

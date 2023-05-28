import styled from "styled-components";
import { Colors } from "../../GlobalStyle/global";

export const NavbarStyled = styled.nav`
  width: 100%;
  padding: 1.8rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
    font-family: "Roboto Flex", sans-serif;
    color: ${Colors.LightGray};
  }

  button {
    min-width: 200px;
    padding: 0.8rem;

    font-size: 1rem;
    font-weight: 700;
    font-family: "Roboto Flex", sans-serif;
    color: #ffff;

    border-radius: 10px;

    background-color: transparent;

    border: 2px solid #ffffff;

    transition: all 0.3s ease-out;

    &:hover {
      cursor: pointer;
      transform: scale(0.9);
      background-color: #ffffff;
      color: ${Colors.DarkGray};
      opacity: 0.8;
    }
  }
`;

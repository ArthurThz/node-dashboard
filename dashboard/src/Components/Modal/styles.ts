import styled, { keyframes } from "styled-components";

import { CloseOutline } from "@styled-icons/evaicons-outline";
import { Colors } from "../../GlobalStyle/global";

const openModal = keyframes`

    0%{
        opacity:0;
    }
    25%{
        opacity:.5
    }
    75%{
        opacity:.8;
    }
    100%{
        opacity:1;
    }

`;
export const Background = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  padding: 2rem 1rem;

  overflow: hidden;

  background-color: #1c1c1cfb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  animation: ${openModal} 0.4s linear;
`;

export const HeaderArea = styled.div`
  width: 70%;
  display: Flex;
  justify-content: space-between;

  h2 {
    color: #ffff;
    font-family: "Roboto Flex", sans-serif;
  }
`;

export const CloseIcon = styled(CloseOutline)`
  color: #a10909;
  height: 40px;
  width: 50px;
  opacity: 0.8;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const NewEmployeeContainer = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 10px;

  box-shadow: 0 0 6px 0 #d4d3d3;
  background-color: ${Colors.LightGray};
`;

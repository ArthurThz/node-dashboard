import styled from "styled-components";
import { Colors } from "../../GlobalStyle/global";

export const InputContainer = styled.div`
  width: 400px;
  height: 64px;

  position: relative;

  label {
    position: absolute;
    top: 5px;
    left: 10px;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 600;
    color: ${Colors.DarkGray};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;

  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  background-color: #fffafaef;
  border: 1px solid ${Colors.DarkGray};

  font-size: 1.1rem;
  font-family: "Roboto Flex", sans-serif;

  outline: 0;

  &:focus {
    outline: 1px solid ${Colors.TextGray};

    box-shadow: 0 0 10px 0 ${Colors.LightGray};
  }
`;

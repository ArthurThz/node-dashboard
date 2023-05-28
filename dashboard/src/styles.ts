import styled from "styled-components";
import { Colors } from "./GlobalStyle/global";
import { Trash } from "@styled-icons/boxicons-solid";
import { PencilSquare } from "@styled-icons/bootstrap";
import background from "../src/assets/wave.svg";
export const Container = styled.main`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${background});

  background-size: cover;
`;

export const DashBoard = styled.div`
  display: flex;
  width: 80%;
  min-height: 420px;
  height: 100%;
  border: 2px solid ${Colors.DarkGray};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 ${Colors.DarkGray};

  background-color: ${Colors.LightGray};
`;

export const EmployeesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem 2rem;

  overflow: auto;
`;
export const Employee = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${Colors.DarkGray};
  flex: none;

  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Roboto Flex", sans-serif;
  color: ${Colors.DarkGray};

  margin-bottom: 15px;

  transition: all 1s ease-in;

  &:first-child {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .options {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
  }
`;

export const TrashIcon = styled(Trash)`
  height: 20px;
  width: 20px;
  color: ${Colors.TextGray};

  opacity: 0.8;
  transition: all 0.2s ease-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
    color: #000000;
  }
`;

export const PencilIcon = styled(PencilSquare)`
  height: 20px;
  width: 20px;

  color: ${Colors.TextGray};

  opacity: 0.8;
  transition: all 0.2s ease-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
    color: #000000;
  }
`;

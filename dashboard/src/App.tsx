import { useState } from "react";

import Navbar from "./Components/Navbar";
import {
  Container,
  DashBoard,
  EmployeesContainer,
  Employee,
  TrashIcon,
  PencilIcon,
} from "./styles";

import Modal from "./Components/Modal";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const openModal = () => {
    toggleModal === false ? setToggleModal(true) : setToggleModal(false);
  };
  return (
    <>
      <Navbar onClick={openModal} />
      <Container>
        <DashBoard>
          <EmployeesContainer>
            <Employee>
              <span>Nome</span>
              <span>Cargo</span>
              <span>Salario</span>
              <span>Sexo</span>
              <span>Opções</span>
            </Employee>
            <Employee>
              <span>Arthur</span>
              <span>Front-end Dev</span>
              <span>R$ 3000,00</span>
              <span>Masculino</span>
              <div className="options">
                <TrashIcon />
                <PencilIcon />
              </div>
            </Employee>

            <Employee>
              <span>Arthur</span>
              <span>Front-end Dev</span>
              <span>R$ 3000,00</span>
              <span>Masculino</span>
              <div className="options">
                <TrashIcon />
                <PencilIcon />
              </div>
            </Employee>

            <Employee>
              <span>Arthur</span>
              <span>Front-end Dev</span>
              <span>R$ 3000,00</span>
              <span>Masculino</span>
              <div className="options">
                <TrashIcon />
                <PencilIcon />
              </div>
            </Employee>

            <Employee>
              <span>Arthur</span>
              <span>Front-end Dev</span>
              <span>R$ 3000,00</span>
              <span>Masculino</span>
              <div className="options">
                <TrashIcon />
                <PencilIcon />
              </div>
            </Employee>

            <Employee>
              <span>Arthur</span>
              <span>Front-end Dev</span>
              <span>R$ 3000,00</span>
              <span>Masculino</span>
              <div className="options">
                <TrashIcon />
                <PencilIcon />
              </div>
            </Employee>

            <Employee>
              <span>Arthur</span>
              <span>Front-end Dev</span>
              <span>R$ 3000,00</span>
              <span>Masculino</span>
              <div className="options">
                <TrashIcon />
                <PencilIcon />
              </div>
            </Employee>

            <Employee>
              <span>Arthur</span>
              <span>Front-end Dev</span>
              <span>R$ 3000,00</span>
              <span>Masculino</span>
              <div className="options">
                <TrashIcon />
                <PencilIcon />
              </div>
            </Employee>

            <Employee>
              <span>Arthur</span>
              <span>Front-end Dev</span>
              <span>R$ 3000,00</span>
              <span>Masculino</span>
              <div className="options">
                <TrashIcon />
                <PencilIcon />
              </div>
            </Employee>

            <Employee>
              <span>Arthur</span>
              <span>Front-end Dev</span>
              <span>R$ 3000,00</span>
              <span>Masculino</span>
              <div className="options">
                <TrashIcon />
                <PencilIcon />
              </div>
            </Employee>
          </EmployeesContainer>
        </DashBoard>
        {toggleModal === true ? <Modal onClick={openModal} /> : ""}
      </Container>
    </>
  );
}

export default App;

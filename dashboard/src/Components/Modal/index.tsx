import Input from "../Input";
import {
  Background,
  HeaderArea,
  CloseIcon,
  NewEmployeeContainer,
  RadioContainer,
  Row,
  StyledButton,
} from "./styles";

interface IProps {
  onClick: () => void;
}

function Modal({ onClick }: IProps) {
  return (
    <>
      <Background>
        <HeaderArea>
          <h2>New Employee</h2>
          <CloseIcon onClick={onClick} />
        </HeaderArea>
        <NewEmployeeContainer>
          <Row>
            <Input type="text" title="Nome" />
            <Input type="text" title="Cargo" />
          </Row>
          <Row>
            <Input type="text" title="Salário" />
            <RadioContainer>
              <h2>Sexo</h2>
              <div>
                <label htmlFor="masculino">Masculino</label>
                <input type="radio" name="masculino" value={"Masculino"} />
              </div>
              <div>
                <label htmlFor="feminino">Feminino</label>
                <input type="radio" name="feminino" value={"Feminino"} />
              </div>
            </RadioContainer>
          </Row>
          <Row>
            <StyledButton>Confirmar</StyledButton>
          </Row>
        </NewEmployeeContainer>
      </Background>
    </>
  );
}

export default Modal;

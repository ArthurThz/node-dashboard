import {
  Background,
  HeaderArea,
  CloseIcon,
  NewEmployeeContainer,
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
        <NewEmployeeContainer />
      </Background>
    </>
  );
}

export default Modal;

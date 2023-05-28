import { NavbarStyled } from "./styles";

interface IButton {
  onClick: () => void;
}

function Navbar({ onClick }: IButton) {
  return (
    <NavbarStyled>
      <h2>Employees Dashboard</h2>
      <button onClick={onClick}>New Employee</button>
    </NavbarStyled>
  );
}

export default Navbar;

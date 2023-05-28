import { createGlobalStyle } from "styled-components";
export const Colors = {
  DarkGray: "#1c1c1c",
  LightGray: "#bebebe",
  TextGray: "#414144",
};
export const GlobalStyle = createGlobalStyle`
* {
  padding:0;
  margin:0;
  box-sizing:border-box;
}
    body{
        background-color:${Colors.DarkGray}
    }
`;

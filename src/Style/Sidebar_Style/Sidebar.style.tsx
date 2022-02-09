import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const IconsDiv = styled.div`
  display: flex;
  height: 60px;
  width: 50px;
  svg {
    color: black;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    svg {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

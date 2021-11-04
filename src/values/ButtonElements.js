import styled from "styled-components";
import { colours } from "./Colours";
import { Link as LinkR } from "react-router-dom";
import { fontSizes } from "./FontSizes";

export const Button = styled.button`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? colours.YELLOW : colours.PEACH)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "8px 30px")};
  color: ${({ primary }) => (primary ? colours.GRAY2 : colours.WHITE)};
  text-decoration: none;
  font-size: ${({ fontBig }) =>
    fontBig ? fontSizes.CONTENT : fontSizes.SUBTEXT};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: "Roboto", sans-serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? colours.VIOLET : "#e3f7ef")};
    color: ${({ primary }) => (primary ? colours.GRAY7 : colours.GRAY2)};
  }
`;

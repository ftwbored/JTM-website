import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#4169e1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;
  font-family: "Mukta", sans-serif;

  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? "#4169e1" : "#fff")};
  }
`;

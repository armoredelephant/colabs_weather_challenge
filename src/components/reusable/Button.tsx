import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  padding: 0.2em 0.8em;
  text-transform: uppercase;
  text-align: center;
`;

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({ text, type }) => {
  return (
    <StyledButton className="button" data-testid="_Button_" type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;

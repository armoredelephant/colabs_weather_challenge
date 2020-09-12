import React from "react";
import styled from "styled-components";
import { ForecastButtonElement } from "../_types";

interface Props {
  active: boolean;
  handleForecast: (e: React.MouseEvent<ForecastButtonElement>) => void;
  text: string;
}

const Button = styled.button<Props>`
  display: flex;
  flex: 1;
  text-align: center;
  color: ${(props: Props) => (props.active ? "black" : "white")};
`;

const ForecastButton: React.FC<Props> = (props) => {
  const { handleForecast, text } = props;
  return (
    <Button
      data-testid="_ForecastButton_"
      onClick={(e) => handleForecast(e)}
      type="button"
      name={text}
      {...props}
    >
      {text}
    </Button>
  );
};

export default ForecastButton;

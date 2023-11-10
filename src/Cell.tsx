/* eslint-disable @typescript-eslint/no-use-before-define,no-unexpected-multiline */
import React from "react";
import styled, { css } from "styled-components";

import { Char } from "./types/char";

interface Props {
  hintNumber?: number;
  correctCharacter: Char;
  showCorrectness: boolean;
}

export const Cell: React.FC<Props> = ({
  hintNumber,
  showCorrectness,
  correctCharacter,
}) => {
  const [actualCharacter, setActualCharacter] = React.useState<Char>(" ");
  const error = actualCharacter !== correctCharacter;

  if (correctCharacter === " ") {
    return <EmptyWrapper />;
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key.match(/^[a-zA-A]$/)) {
      setActualCharacter(e.key.toUpperCase() as Char);
    } else if (e.key === "Backspace") {
      setActualCharacter(" ");
    }
  };

  return (
    <Wrapper>
      <Input
        error={error}
        correct={!error}
        showCorrectness={showCorrectness}
        onKeyDown={onKeyDown}
        value={actualCharacter}
      />
      {hintNumber && <HintNumber>{hintNumber}</HintNumber>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 18px;
`;
const EmptyWrapper = styled(Wrapper)`
  background: black;
`;
const Input = styled.input<{
  showCorrectness: boolean;
  error: boolean;
  correct: boolean;
}>`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  margin: 0;
  text-align: center;
  outline: none;
  color: transparent;
  text-shadow: 0px 0px 1px black;
  background: #eee;

  &:focus {
    background: #ccf;
  }

  ${(p) =>
    p.showCorrectness &&
    p.error &&
    css`
      background: #fcc;
    `}

  ${(p) =>
    p.showCorrectness &&
    p.correct &&
    css`
      background: #cfc;
    `}
`;
const HintNumber = styled.div`
  position: absolute;
  left: 1px;
  top: 1px;
  font-size: 11px;
`;

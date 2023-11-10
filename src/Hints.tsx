/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import styled from "styled-components";

import { hints, Hint } from "./data";

interface HintEntry {
  number: number;
  text: string;
}

export const Hints: React.FC = () => {
  const verticalHints = Object.values<Hint>(hints)
    .filter((hint) => hint.vertical)
    .map(({ number, vertical }) => ({ number, text: vertical })) as HintEntry[];
  const horizontalHints = Object.values<Hint>(hints)
    .filter((hint) => hint.horizontal)
    .map(({ number, horizontal }) => ({
      number,
      text: horizontal,
    })) as HintEntry[];

  return (
    <Wrapper>
      <h1>CrossWord Game</h1>
      <h2>Mendatar</h2>
      {horizontalHints.map((hint) => (
        <div key={hint.text}>
          {hint.number}. {hint.text}
        </div>
      ))}
      <h2>Menurun</h2>
      {verticalHints.map((hint) => (
        <div key={hint.text}>
          {hint.number}. {hint.text}
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
`;

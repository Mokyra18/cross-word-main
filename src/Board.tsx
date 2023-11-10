/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import styled from "styled-components";

import { Cell } from "./Cell";
import { board, hints } from "./data";

export const Board: React.FC = () => {
  const [showCorrectness, setShowCorrectness] = React.useState(false);

  return (
    <Wrapper>
      <BoardWrapper>
        {board.map((row, y) => (
          <Row>
            {row.map((letter, x) => {
              const hint = hints[`${y},${x}`];
              return (
                <Cell
                  key={x}
                  showCorrectness={showCorrectness}
                  hintNumber={hint && hint.number}
                  correctCharacter={letter}
                />
              );
            })}
          </Row>
        ))}
      </BoardWrapper>
      <button onClick={() => setShowCorrectness(true)}>Check errors</button>
      <button onClick={() => setShowCorrectness(false)}>Hide errors</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 8px;
`;
const BoardWrapper = styled.div`
  padding: 8px 0;
`;
const Row = styled.div`
  display: flex;
`;

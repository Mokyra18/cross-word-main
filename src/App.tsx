/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Board } from "./Board";
import { Hints } from "./Hints";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Board />
        <Hints />
      </Wrapper>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eee;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

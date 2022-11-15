import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`;

function App() {
  return (
      <>
          <GlobalStyle />
          <TodoTemplate>
              <TodoSearch />
              <TodoList />
              <TodoCreate />
          </TodoTemplate>
      </>
  );
}

export default App;

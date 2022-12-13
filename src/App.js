import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from './TodoContext';
const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`;

function App() {
  return (
      <TodoProvider>
          <GlobalStyle />
          <TodoTemplate>
              <TodoSearch />
              <TodoList />
              <TodoCreate />
          </TodoTemplate>
      </TodoProvider>
  );
}

export default App;

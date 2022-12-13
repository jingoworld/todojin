import React from 'react';
import styled from 'styled-components';
import TodoContent  from "./TodoContent";
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    flex: 1;
  padding: 16px 16px;
  padding-bottom: 40px;
  overflow-y: auto;
`;

function TodoList() {
    const todos = useTodoState()
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoContent
                id={todo.id}
                text={todo.text}
                done={todo.done}
                key={todo.id}
                />
            ))}
        </TodoListBlock>
        );
}

export default TodoList;
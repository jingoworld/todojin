import React from 'react';
import styled from 'styled-components';
import TodoContent  from "./TodoContent";

const TodoListBlock = styled.div`
    flex: 1;
  padding: 16px 16px;
  padding-bottom: 40px;
  overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoContent text="산책하기" done={true} />
            <TodoContent text="화장실 청소" done={true} />
            <TodoContent text="승급전" done={false} />
            <TodoContent text="코플릿 문제 풀기" done={false} />
        </TodoListBlock>
        );
}

export default TodoList;
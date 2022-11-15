import React from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

const TodoSearchBlock = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid white;
`;

const TodoSearchInput = styled.input`
    width: -webkit-fill-available;
  height: 1.5rem;
  border: 1px solid white;
  border-radius: 5px;
  padding-left: 30px;
`;

function TodoSearch() {
    return (
        <TodoSearchBlock>
            <IoIosSearch style={{marginLeft: "5px", marginTop: "5px", position: "absolute"}}/>
            <TodoSearchInput type="text" placeholder="Search"></TodoSearchInput>
        </TodoSearchBlock>
    );
}

export default TodoSearch;

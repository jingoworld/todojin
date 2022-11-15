import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  color: lightslategray;
  &:hover {
    color: darkgray;
  }
  display: none;
`;

const Delete = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: lightslategray;
  &:hover {
    color: darkgray;
  }
  display: none;
`;

const TodoContentBlock = styled.div`
    display: flex;
  align-items: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 10px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 10px;
  &:hover {
    ${Delete} {
      display: initial;
    }
    ${Edit} {
      display: initial;
    }
  }
  ${props =>
          props.done &&
          css`
    background-color: #50555C;
    color: #B7B7B9;
    `}
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  border-radius: 16px;
  border: 1px solid #0C79FE;
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;
  ${props => 
    props.done &&
    css`
    background-color: black;
    color: #D1D3D9;
    `}
`;

const TodoText = styled.div`
    flex: 1;
    font-size: 17px;
    color: black;
    ${props =>
      props.done &&
      css`
        color: #D1D3D9 ;
      `}
`;



function TodoContent({id, done, text}) {
    return (
        <TodoContentBlock done={done}>
            <Checkbox done={done}>{done && <MdDone />}</Checkbox>
            <TodoText done={done}>{text}</TodoText>
            <Edit>
                <MdEdit />
            </Edit>
            <Delete>
                <MdDelete />
            </Delete>
        </TodoContentBlock>
    );
}

export default TodoContent;


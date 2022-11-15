import React from 'react';
import styled from 'styled-components';

const CreateWrapper = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const CreateForm = styled.form`
  background: #D1D3D9;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid white;
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
`;

const TodoCreateButton = styled.button`
  margin-right: 20px;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  color: white;
  cursor: pointer;
  background: ${(props) => props.color || "#0C79FE"};
`;

const CreateInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
  flex: 1;
    font-size: 17px;
`;

function TodoCreate() {
    return (
        <>
            <CreateWrapper>
                <CreateForm>
                <TodoContentBlock>
                    <TodoCreateButton>+</TodoCreateButton><CreateInput placeholder="작업 추가" />
                </TodoContentBlock>
                </CreateForm>
            </CreateWrapper>
        </>
    );
}

export default TodoCreate;

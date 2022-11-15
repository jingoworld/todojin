import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 375px;
    height: 612px;
    position: relative;
    background-color: #D1D3D9;
    border-radius: 10px;
    bax-shadow: 0 0 8px 8px rgba(0, 0, 0,);
  
    margin: 0 auto;
    margin-bottom: 100px;
    margin-top: 100px;
    display: flex;        
    flex-direction: column;
`;

function TodoTemplate({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default TodoTemplate;

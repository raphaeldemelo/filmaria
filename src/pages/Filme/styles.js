import { hover } from '@testing-library/user-event/dist/hover';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 900px;
`;

export const Titulo = styled.h1`

`;

export const Imagem = styled.img`
width: 900px;
max-width: 900px;
border-radius: 10px;
`;

export const AreaBotao = styled.div`
display: flex;
justify-content: space-around;
`;

export const Botao = styled.button`
margin - right: 10px;
margin - top: 10px;
cursor: pointer;
border: 0;
font - size: 20px;
outline: none;
padding: 12px;
transition: all 0.5s;
width: 300px;
border-radius: 20px;

&:hover:hover {
    background-color: red;
    color: #fff;
}
    `;
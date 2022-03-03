import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
`;

export const Titulo = styled.h1`

`;

export const Lista = styled.ul`
padding: 0;
`;

export const ItemLista = styled.li`
padding: 0;
list-style: none;
min-width: 600px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const TituloFilme = styled.h2`

`;

export const AreaBotao = styled.div`
`;

export const Botao = styled.button`
margin-left: 10px;
background-color: red;
border: 0;
padding: 10px;
border-radius: 5px;
color: white;
font-weight: bold;
cursor: pointer;
`;
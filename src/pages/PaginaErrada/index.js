import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function PaginaErrada() {
    return (
        <Container>
            <h1>404</h1>
            <h2>Página não encontrada</h2>

            <Link 
            style={{
                display: 'flex',
                width: 140,
                height: 50,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                borderRadius: 5,
                padding: 5,
            
            }}
            to='/'>Voltar para Home</Link>
        </Container>
    );
}
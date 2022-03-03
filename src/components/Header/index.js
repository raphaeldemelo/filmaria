import React from 'react';
import { Link } from 'react-router-dom';

import { Container, } from './styles';

export default function Header() {
    return (
        <Container>
            <Link style={{
                textDecoration: 'none',
                fontSize: 30,
                color: '#fff',
                cursor: 'pointer',
            }} to='/'>
                Filmaria
            </Link>

            <Link style={{
                textDecoration: 'none',
                fontSize: 20,
                color: '#000',
                cursor: 'pointer',
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 5,
                fontWeight: 'bold',

            }} to='/favoritos'> Salvos
            </Link>
        </Container >
    );
}
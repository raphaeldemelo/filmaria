import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    Container,
    Titulo,
    Lista,
    ItemLista,
    TituloFilme,
    AreaBotao,
    Botao,
} from './styles';


export default function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    function handleDeletar(id) {

        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.success('Filme excluído com sucesso')
    }

    return (
        <Container>
            <Titulo>Meus Filmes</Titulo>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo.</span>}

            <Lista>
                {filmes.map((item) => {
                    return (
                        <ItemLista key={item.id}>
                            <TituloFilme>{item.nome}</TituloFilme>

                            <AreaBotao>
                                <Link
                                    style={{ textDecoration: 'none', color: '#000' }}
                                    to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <Botao onClick={() => handleDeletar(item.id)}>Excluir</Botao>
                            </AreaBotao>
                        </ItemLista>
                    )
                })}
            </Lista>
        </Container>
    );
}
import React, { useEffect, useState } from 'react';
import {
    Container,
    Titulo,
    AreaBotao,
    Botao,
    Imagem,
} from './styles';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Filme() {

    const { id } = useParams();
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function carregaFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if (response.data.length === 0) {
                //tentou acessar com um ID que não existe, então navego ele para HOME
                history.replace('/')
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        carregaFilme();

        return () => {

        }

    }, [history, id]);

    function salvaFilme() {
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        // se tiver algum filme salvo com o mesmo id , precisa ignorar...

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if (hasFilme) {
            toast.error('Você já possui esse filme salvo')
            return;
            //para a execução do código aqui...
        }
        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso')
    }

    if (loading) {
        return (
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <Container>
            <Titulo>{filme.nome}</Titulo>
            <Imagem
                src={filme.foto} alt={filme.nome}
            />

            <h2>Sinopse</h2>
            {filme.sinopse}

            <AreaBotao>
                <Botao onClick={salvaFilme}>Salvar</Botao>
                <Botao>
                    <a
                        style={{ textDecoration: 'none', color: '#000' }}
                        target="blank"
                        href={`https://youtube.com.br/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </Botao>
            </AreaBotao>
        </Container >
    );
}
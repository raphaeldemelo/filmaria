import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import {
  Container,
  ListaFilmes,
} from './styles';

export default function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregaFilmes() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data);
    }

    carregaFilmes();
  }, [])

  return (
    <Container>
      <ListaFilmes>
        {filmes.map((filme) => {
          return (
            <article style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              margin: 15,
              padding: 15,
              borderRadius: 5,
            }} key={filme.id}>

              <strong
                style={{ paddingBottom: 15, fontSize: 20 }}
              >{filme.nome}
              </strong>

              <img
                style={{
                  width: 900,
                  maxHeight: 350,
                }}
                src={filme.foto} alt={filme.nome} />


              <Link
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  backgroundColor: 'red',
                  textAlign: 'center',
                  padding: 10,
                  borderRadius: 5,
                  margin: 15,
                }}
                to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </ListaFilmes>
    </Container>
  );
}

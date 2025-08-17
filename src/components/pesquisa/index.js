import Input from '../input'
import styled from 'styled-components'
import { useMemo, useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
  /* Fundo com gradiente azul sem “corte” */
  background-image: linear-gradient(
    135deg,
    #001f33 0%,
    #002f52 35%,
    #1e4a70 70%,
  );
  color: #fff;
  width: 100%;
  padding: clamp(40px, 6vw, 96px) 16px;
`

const Conteudo = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`

const Titulo = styled.h2`
  color: #fff;
  font-size: clamp(24px, 4.2vw, 40px);
  line-height: 1.15;
  margin: 0 0 8px;
`

const Subtitulo = styled.h3`
  font-size: clamp(14px, 2.2vw, 18px);
  font-weight: 500;
  opacity: 0.9;
  margin: 0 0 28px;
`

const InputWrap = styled.div`
  max-width: 720px;
  margin: 0 auto 28px;
  /* se seu <Input/> aceitar className, dá pra estilizar por aqui */
  & input {
    width: 100%;
    padding: 14px 16px;
    border-radius: 12px;
    border: none;
    outline: none;
    box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  }
`

const GridResultados = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 8px;
`

const CardResultado = styled.button`
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
  align-items: center;
  text-align: left;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 14px;
  padding: 12px;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease;
  color: #fff;

  &:hover,
  &:focus-visible {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.28);
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.25);
  }

  img {
    width: 88px;
    height: 88px;
    object-fit: cover;
    border-radius: 10px;
    background: rgba(255,255,255,0.18);
  }

  p {
    font-size: clamp(14px, 2.2vw, 16px);
    margin: 0;
  }

  @media (max-width: 420px) {
    grid-template-columns: 64px 1fr;
    img {
      width: 64px;
      height: 64px;
    }
  }
`

const EstadoVazio = styled.p`
  opacity: 0.85;
  font-size: 14px;
  margin-top: 8px;
`

function Pesquisa() {
  const [termo, setTermo] = useState('')

  const livrosPesquisados = useMemo(() => {
    const q = termo.trim().toLowerCase()
    if (!q) return []
    return livros.filter(livro =>
      (livro.nome || '').toLowerCase().includes(q)
    )
  }, [termo])

  return (
    <PesquisaContainer>
      <Conteudo>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>

        <InputWrap>
          <Input
            placeholder="Escreva sua próxima leitura"
            aria-label="Pesquisar livros"
            onChange={(e) => setTermo(e.target.value)}
          />
        </InputWrap>

        {termo && livrosPesquisados.length === 0 && (
          <EstadoVazio>Nenhum resultado para “{termo}”.</EstadoVazio>
        )}

        <GridResultados role="list">
          {livrosPesquisados.map((livro, idx) => (
            <CardResultado
              key={livro.id || livro.nome || idx}
              role="listitem"
              onClick={() => {
              }}
            >
              <img
                src={livro.src}
                alt={`Capa do livro ${livro.nome}`}
                loading="lazy"
              />
              <p>{livro.nome}</p>
            </CardResultado>
          ))}
        </GridResultados>
      </Conteudo>
    </PesquisaContainer>
  )
}

export default Pesquisa

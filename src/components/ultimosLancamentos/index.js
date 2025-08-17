import { livros } from "../ultimosLancamentos/dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../titulo";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;   /* quebra linha quando necessário */
  gap: 16px;         /* espaço entre as capas */
  cursor: pointer;
`;

const LivroImagem = styled.img`
  width: 110px;      /* tamanho menor */
  height: auto;      /* mantém proporção */
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  transition: transform 0.15s ease;
  object-fit: cover;

  &:hover {
    transform: translateY(-2px);
  }

  /* responsivo: um pouco maior em telas médias/grandes */
  @media (min-width: 768px) {
    width: 140px;
  }
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00" tamanhoFonte="36px">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <LivroImagem
            key={livro.id}
            src={livro.src}
            alt={livro.nome}
            loading="lazy"
            draggable="false"
          />
        ))}
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;

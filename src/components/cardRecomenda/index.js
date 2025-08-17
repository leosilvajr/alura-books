import styled from "styled-components";

const Wrap = styled.section`
  --card: #ffffffcc;
  --border: #e2e8f0;
  --text: #0f172a;
  --muted: #475569;


  width: min(1200px, 100%);
  margin: 10px auto 0;
  padding: 16px;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr auto;
  align-items: center;
  gap: 16px;

  border: 1px solid var(--border);
  background: var(--card);
  backdrop-filter: saturate(140%) blur(6px);
  border-radius: 18px;
  padding: 16px 18px;

  @media (max-width: 640px) {
    grid-template-columns: 72px 1fr;
    grid-auto-rows: auto;
  }
`;

const Thumb = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 640px) {
    width: 72px;
    height: 72px;
  }
`;

const Info = styled.div`
  display: grid;
  gap: 6px;

  h3 {
    margin: 0;
    font-size: 1.05rem;
    letter-spacing: -0.01em;
    color: var(--text);
  }

  p {
    margin: 0;
    color: var(--muted);
    font-size: 0.95rem;
  }

  small {
    color: var(--muted);
  }
`;

const CTA = styled.button`
  appearance: none;
  border: 0;
  border-radius: 12px;
  padding: 10px 14px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  color: white;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: transform 140ms ease, box-shadow 140ms ease, opacity 140ms ease;

  &:hover { transform: translateY(-2px); }
  &:active { transform: translateY(0); opacity: 0.9; }

  @media (max-width: 640px) {
    grid-column: 1 / -1;
    width: 100%;
  }
`;

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
  return (
    <Wrap>
      <Card>
        <Thumb src={img} alt={subtitulo} loading="lazy" />
        <Info>
          <small>{titulo}</small>
          <h3>{subtitulo}</h3>
          <p>{descricao}</p>
        </Info>
        <CTA type="button" aria-label={`Ver mais sobre ${subtitulo}`}>
          Ver detalhes
        </CTA>
      </Card>
    </Wrap>
  );
}

export default CardRecomenda;

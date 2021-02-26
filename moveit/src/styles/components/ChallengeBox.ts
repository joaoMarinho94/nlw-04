import styled from 'styled-components'

export const Container = styled.div`
  height: 91%;
  margin-top: 50px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  .not-active {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .not-active strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .not-active p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  .not-active img {
    margin-bottom: 1rem;
  }

  .challenge-active {
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .challenge-active header {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
  }

  .challenge-active main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .challenge-active main strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
    margin: 1.5rem 0 1rem;
  }

  .challenge-active main p {
    line-height: 1.5;
  }

  .challenge-active footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .challenge-active footer button {
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
  }

  .challenge-active footer button.failed-button {
    background: ${({ theme }) => theme.colors.red};
  }

  .challenge-active footer button.succeeded-button {
    background: ${({ theme }) => theme.colors.green};
  }

  .challenge-active footer button:hover {
    filter: brightness(0.9);
  }
`

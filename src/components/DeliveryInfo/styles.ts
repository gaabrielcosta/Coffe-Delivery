import styled from 'styled-components'

export const Title = styled.div`
  span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme['base-800']};
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  width: 40rem;
  margin-top: 15px;
  margin-right: 2rem;

  background: ${(props) => props.theme['base-200']};
  border-radius: 6px;

  .SubTitle {
    display: flex;
  }

  .iconmap {
    margin-right: 0.5rem;
    color: ${(props) => props.theme['yellow-700']};
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme['base-800']};
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: ${(props) => props.theme['base-700']};
  }

  .cep {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 200px;
    height: 42px;

    color: ${(props) => props.theme['base-800']};
    background: ${(props) => props.theme['base-300']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }

  .rua {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 560px;
    height: 42px;

    color: ${(props) => props.theme['base-800']};
    background: ${(props) => props.theme['base-300']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }

  .inputtest {
    display: flex;
    gap: 12px;
  }

  .number {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 200px;
    height: 42px;

    color: ${(props) => props.theme['base-800']};
    background: ${(props) => props.theme['base-300']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }

  .complemento {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 348px;
    height: 42px;

    color: ${(props) => props.theme['base-800']};
    background: ${(props) => props.theme['base-300']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }

  .bairro {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 200px;
    height: 42px;

    color: ${(props) => props.theme['base-800']};
    background: ${(props) => props.theme['base-300']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }

  .cidade {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 276px;
    height: 42px;

    color: ${(props) => props.theme['base-800']};
    background: ${(props) => props.theme['base-300']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }

  .uf {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 60px;
    height: 42px;

    color: ${(props) => props.theme['base-800']};
    background: ${(props) => props.theme['base-300']};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  margin-top: 15px;
  margin-right: 2rem;

  background: ${(props) => props.theme['base-200']};
  border-radius: 6px;

  .PayTitle {
    display: flex;
  }

  .iconpay {
    margin-right: 0.5rem;
    color: ${(props) => props.theme['purple-500']};
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme['base-800']};
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: ${(props) => props.theme['base-700']};
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 12px;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    padding: 16px;
    gap: 12px;
    width: 178.67px;
    height: 51px;

    border-radius: 6px;
    border: none;
    background: ${(props) => props.theme['base-400']};
    color: ${(props) => props.theme['base-700']};
  }

  .iconcredit {
    color: ${(props) => props.theme['purple-500']};
  }

  .iconbank {
    color: ${(props) => props.theme['purple-500']};
  }

  .iconmoney {
    color: ${(props) => props.theme['purple-500']};
  }
`

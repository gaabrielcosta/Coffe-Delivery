import styled from 'styled-components'

export const Title = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: ${(props) => props.theme['base-800']};
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  gap: 1.5rem;

  width: 28rem;
  margin-top: 15px;

  background: ${(props) => props.theme['base-200']};
  border-radius: 6px 44px;

  .title1 {
    display: flex;
    padding: 8px 4px;
    gap: 20px;

    width: 23rem;
    height: 5rem;
  }

  .title2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 171px;
    height: 61px;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme['base-900']};
  }

  .title3 {
    display: flex;
    margin-top: 0.5rem;
  }

  input {
    margin-right: 0.5rem;

    width: 4.5rem;
    height: 2rem;

    border-radius: 6px;
    border: none;
    background: ${(props) => props.theme['base-400']};
  }

  .remove {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    color: ${(props) => props.theme['base-700']};

    width: 91px;
    height: 2rem;

    border-radius: 6px;
    border: none;
    background: ${(props) => props.theme['base-400']};
  }

  .thash {
    color: ${(props) => props.theme['purple-500']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-700']};

    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }

  .divider {
    border: 1px solid;
    width: 100%;

    color: ${(props) => props.theme['base-400']};
  }

  .prices {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    width: 368px;
    height: 92px;
  }

  .itens {
    display: flex;
    justify-content: space-between;

    width: 23rem;
  }

  .totalitens {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  .price {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  .total {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

  .confirm {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;

    width: 368px;
    height: 46px;

    border-radius: 6px;
    border: none;
    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
  }
`

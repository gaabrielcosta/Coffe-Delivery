import styled from 'styled-components'

export const Card = styled.div`
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};
`
export const Specs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -16px;
  }

  .tag {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    margin-top: 12px;

    width: 81px;
    height: 21px;

    border-radius: 100px;
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
  }

  .tags {
    display: flex;
    gap: 0.25rem;
  }

  .title {
    display: flex;
    align-items: flex-end;
    text-align: center;
    margin-top: 1rem;

    height: 26px;
    left: 20px;
    right: 20px;
    top: 149px;

    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-800']};
  }

  .description {
    width: 13.5rem;
    height: 36px;
    left: 20px;
    right: 20px;
    top: 183px;
    margin-top: 0.5rem;

    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: ${(props) => props.theme['base-600']};
  }
`
export const Buy = styled.div`
  /* display: flex; */
  gap: 20px;
  width: 16rem;
  margin-top: 33px;
  margin-bottom: 400px;

  .test {
    width: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 29px;
  }

  span {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: ${(props) => props.theme['base-800']};
  }

  span + span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${(props) => props.theme['base-800']};
  }

  .actions {
    display: flex;
    gap: 8px;
  }

  input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 72px;
    height: 38px;

    background: ${(props) => props.theme['base-400']};
    color: ${(props) => props.theme['base-900']};
    border: 0px solid;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 38px;
    height: 38px;

    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    border: 0px solid;
  }
`

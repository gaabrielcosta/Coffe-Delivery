import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  height: 1645px;
  gap: 20px;
  height: 1.25rem;
  align-items: space-between;
  margin-top: 2rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme['base-800']};
  }

  .coffeeList {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 2rem;
    margin-top: 3.5rem;
  }
`

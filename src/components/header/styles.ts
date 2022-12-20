import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    gap: 0.75rem;
    .iconmap {
      color: ${(props) => props.theme['purple-500']};
    }
    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      gap: 4px;
      background: ${(props) => props.theme['purple-300']};
      color: ${(props) => props.theme['purple-700']};
      border-radius: 6px;
      font-weight: 400;
      font-family: Roboto, sans-serif;
      font-size: 14px;
      text-decoration: none;
    }
    a + a {
      background: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme['yellow-700']};
    }
  }
`

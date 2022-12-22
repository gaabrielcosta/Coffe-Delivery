import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme['base-900']};
  }
  h2 {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => props.theme['base-800']};
    margin-top: 1rem;
    width: 36.75rem;
  }
  img {
    margin-top: 5.875rem;
  }
`
export const Option = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: row;
  justify-content: start;
  gap: 8px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme['base-700']};

  .iconshop {
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-700']};
    border: 6px solid ${(props) => props.theme['yellow-700']};
  }

  .iconpack {
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['base-700']};
    border: 6px solid ${(props) => props.theme['base-700']};
  }

  .icontimer {
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-500']};
    border: 6px solid ${(props) => props.theme['yellow-500']};
  }

  .iconcoffee {
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['purple-500']};
    border: 6px solid ${(props) => props.theme['purple-500']};
  }
`

export const Row = styled.div<{ width: number }>`
  display: flex;
  width: ${(p) => p.width + 'px'};
  flex-direction: column;
  gap: 20px;
  height: 1.25rem;
  align-items: space-between;
  margin-left: ${(p) => (p.width === 294 ? '40px' : 0)};
`
export const DivContainer = styled.div`
  display: flex;
  width: 567px;
  margin-top: 66px;
`

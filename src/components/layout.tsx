import styled from 'styled-components'

export const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FlexLayoutItem = styled.div``

export const Inline = styled.div<{height?: number}>`
  display: flex;
  flex-direction: row;
  height: ${p => p.height ? `${p.height}rem` : ''};
`

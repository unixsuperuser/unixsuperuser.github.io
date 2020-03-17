import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{solarized?:boolean}>`
html {
    oveflow: none;
}
  body {
    background: ${props => (props.solarized ? props.theme.colors.base3 : props.theme.colors.base03)};
  }
`

export const Solarized = {
    colors: {
        base00: '#657b83',
        base01: '#586e75',
        base02: '#073642',
        base03: '#002b36',
        base0: '#839496',
        base1: '#93a1a1',
        base2: '#eee8d5',
        base3: '#fdf6e3',
    }
}
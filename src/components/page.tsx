import React from "react"
import styled, { ThemeProvider } from 'styled-components'

import { FlexLayout } from "../components/layout"
import Header from "../components/header"
import { GlobalStyle } from '../utils/style'
import {Solarized} from '../utils/style'

export const Page = ({children}) => {
  return (
    <ThemeProvider theme={Solarized}>
        <Header siteTitle="Hello world" />
        <FlexLayout>
          <GlobalStyle solarized />
          {children}
        </FlexLayout> 
    </ThemeProvider>
  )
}
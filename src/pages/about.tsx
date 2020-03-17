import React from 'react'
import styled from 'styled-components'
import { DiJsBadge, DiLinux, DiUnitySmall, DiReact } from 'react-icons/di'

import {Heading, Heading4} from '../components/heading'
import { FlexLayout, Inline } from "../components/layout"
import { Page } from "../components/page"

const JS = styled(DiJsBadge)`
  color: #657b83;
  width: 2rem;
  height: 2rem;
`

const TUX = styled(DiLinux)`
  color: #657b83;
  width: 2rem;
  height: 2rem;
`

const UNITY = styled(DiUnitySmall)`
  color: #657b83;
  width: 2rem;
  height: 2rem;
`

const REACT = styled(DiReact)`
  color: #657b83;
  width: 2rem;
  height: 2rem;
`

const About = () => {
  return (
    <Page>
      <Heading>About me</Heading>
      <Heading4>Aspiring indie game developer & professional web developer</Heading4>
      <Inline height={2}><JS /><REACT /><UNITY /><TUX /></Inline>
    </Page>
  )
}

export default About
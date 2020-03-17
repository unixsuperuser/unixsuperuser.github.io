import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaGithubSquare } from 'react-icons/fa'

import { ExternalLink } from './link'
import { Heading } from './heading'

const GH = styled(FaGithubSquare)`
  color: #657b83;
  width: 2rem;
  height: 2rem;
`

const StyledHeader = styled.div`
  background: #073642;
  display: flex;
  width: 100vw;
`

const Center = styled.div`
  display: flex;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <Center>
        <Heading>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
      </Center>
    <ExternalLink href="https://github.com/unixsuperuser"><GH /></ExternalLink>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

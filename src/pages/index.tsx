import React from "react"
import { Link } from "gatsby"

import { Page } from "../components/page"
import SEO from "../components/seo"

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <Link to="/about/">About</Link>
  </Page>
)

export default IndexPage

import React from "react"

import { FlexLayout } from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <FlexLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </FlexLayout>
)

export default NotFoundPage

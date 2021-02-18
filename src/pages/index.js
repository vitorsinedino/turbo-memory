import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World</h1>
    <p>this is vitor on gatsby.</p>
    <p>Now go build something great.</p>
    <button>test</button>
    <Button></Button>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

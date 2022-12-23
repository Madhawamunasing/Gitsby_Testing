import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from 'react-helmet'

import Header from "../components/header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)
  return <>
  <Helmet title={data.site.siteMetadata.title} meta={[
    { name: 'description', content: data.site.siteMetadata.description },
    { name: 'keywords', content: data.site.siteMetadata.keywords }
    ]} />
  <Header/>
  {children}
  <Footer data={data}/>
  </>
}

export default Layout
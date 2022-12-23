import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

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
      allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)
  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: data.site.siteMetadata.description },
          { name: "keywords", content: data.site.siteMetadata.keywords },
        ]}
      />
      <Header />
      {children}
      <Footer data={data}>
        Backgrounds made in Cinema 4D, iOS app in Swift, site in React.{" "}
        <a href="mailto:madhawaprageeth86@gmail.com">Email us</a> to ask anything. ©
        2018
      </Footer>
    </>
  )
}

export default Layout

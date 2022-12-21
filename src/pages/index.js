import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/Wave"
// import Seo from "../components/seo"

//logos
import logoSketch from "../images/logo-sketch.png"
import logoFigma from "../images/logo-figma.png"
import logoStudio from "../images/logo-studio.png"
import logoFramer from "../images/logo-framer.png"
import logoReact from "../images/logo-react.png"
import logoSwift from "../images/logo-swift.png"
//Card Wallpapers
import wallpaper from "../images/wallpaper.jpg"
import wallpaper2 from "../images/wallpaper2.jpg"
import wallpaper3 from "../images/wallpaper3.jpg"
import wallpaper4 from "../images/wallpaper4.jpg"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br />
          Design and code React apps
        </h1>
        <p>
          Complete cources about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="../">Watch the video</Link>
        <div className="Logos">
          <img src={logoSketch} width="50" />
          <img src={logoFigma} width="50" />
          <img src={logoStudio} width="50" />
          <img src={logoFramer} width="50" />
          <img src={logoReact} width="50" />
          <img src={logoSwift} width="50" />
        </div>
        <Wave/>
      </div>
    </div>
    <div className="Cards">
      <h2>11 cources, more coming</h2>
      <div className="CardGroup">
        <Card title="Design Systems " text="10 sections" image={wallpaper} />
        <Card
          title="React for designers"
          text="12 sections"
          image={wallpaper2}
        />
        <Card title="Sound Design" text="5 sections" image={wallpaper3} />
        <Card title="APKit 2" text="10 sections" image={wallpaper4} />
      </div>
    </div>
    <Section image={wallpaper2} logo={logoReact} title="React for Designers" text="Learn hoe to build a modern site using React and the most efficent libraries to get your site/product online. Get familier with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."/>
  </Layout>
)

// export const Head = () => <Seo title="Home" />

export default IndexPage

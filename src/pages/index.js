import * as React from "react"
import { graphql } from 'gatsby'



import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reusable/HeroSection";
import Infoblock from "../components/reusable/infoblock";
import Dualinfoblock from "../components/reusable/dualinfoblock";


const IndexPage = ({data}) => (
  <Layout>
   <Seo title="Home" />
   <HeroSection
   img={data.img.childImageSharp.fluid}
title="I write Code"
subtitle="Learncode"
heroclass="hero-background"


   />
    <Infoblock heading="About Us" />
    <Dualinfoblock heading="Our Team"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage

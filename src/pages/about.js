import * as React from "react"
import { graphql } from 'gatsby'



import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reusable/HeroSection";
import Infoblock from "../components/reusable/infoblock";
import Dualinfoblock from "../components/reusable/dualinfoblock";
import TeamSection from "../components/About/teamsection";


const AboutPage = ({data}) => (
  <Layout>
   <Seo title="Home" />
   <HeroSection
   img={data.img.childImageSharp.fluid}
title="About Skills"
subtitle=""
heroclass="about-background"


   />
    <Dualinfoblock heading="A message from CEO"/>
    <Infoblock heading="Our Vision" />
    <TeamSection/>
   
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
      ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage

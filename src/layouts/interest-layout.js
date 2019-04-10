/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import Fade from "react-reveal/Fade"

const InterestLayout = ({ children }) => (
    <div className="container interest-layout-container">
        <Fade duration={1000}>{children}</Fade>
    </div>
)

export default InterestLayout

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import FadeIn from "../components/Animations/FadeIn.js"
import "./layout.css"

const layout_style = {
    margin: `0 auto`,
    maxWidth: `60rem`,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
}

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query TitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <div className="layout" style={layout_style}>
                    <main>{children}</main>
                    <FadeIn timeout={3000} fadeTime={500}>
                        <footer>
                            © {new Date().getFullYear()}, Built with
                            {` `}
                            <a
                                className="link-animation"
                                href="https://www.gatsbyjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Gatsby
                            </a>
                        </footer>
                    </FadeIn>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

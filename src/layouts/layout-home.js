/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 

import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import Banner from "./Banner/Banner.js"
import Selection from "./Selection/Selection.js"
import PageTransition from "gatsby-plugin-page-transitions"
import Transition from "react-transition-group/Transition"
import Fade from "react-reveal/Fade"

const layout_style = {
    margin: `0 auto`,
    maxWidth: `60rem`,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
}

const pageTransitionEvent = "gatsby-plugin-page-transition::exit"

const defaultStyle = {
    transition: "opacity 500ms ease",
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

class LayoutHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            in: false,
        }
    }

    componentDidMount() {
        global.window.addEventListener(pageTransitionEvent, this.listenHandler)
        this.setState({
            in: true,
        })
    }

    listenHandler = () => {
        console.log("asdf")
        this.setState({
            in: false,
        })
    }

    componentWillUnmount() {
        global.window.removeEventListener(
            pageTransitionEvent,
            this.listenHandler
        )
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query SiteTitleQuery {
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
                            <main>
                                <Banner />
                                <Selection />
                                <PageTransition transitionTime={500}>
                                    <Transition
                                        in={this.state.in}
                                        timeout={500}
                                    >
                                        {state => (
                                            <div
                                                style={{
                                                    ...defaultStyle,
                                                    ...transitionStyles[state],
                                                }}
                                            >
                                                <Fade>
                                                    {this.props.children}
                                                </Fade>
                                            </div>
                                        )}
                                    </Transition>
                                </PageTransition>
                            </main>
                            <footer>
                                © {new Date().getFullYear()}, Built with
                                {` `}
                                <a href="https://www.gatsbyjs.org">Gatsby</a>
                            </footer>
                        </div>
                    </>
                )}
            />
        )
    }
}

export default LayoutHome
*/

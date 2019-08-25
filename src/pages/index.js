import React, { Component } from "react"

import Layout from "../layouts/layout.js"
import "./normalize.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import SEO from "../components/seo"
import Banner from "../components/Banner/Banner.js"
import Selection from "../components/Selection/Selection.js"
import InterestLoader from "../components/InterestLoader.js"
import FadeIn from "../components/Animations/FadeIn.js"

const interests = {
    "data-science": "Data Science",
    "computer-science": "Computer Science",
    engineering: "Engineering",
    hobbies: "Hobbies",
}

class IndexPage extends Component {
    state = {
        selected: null,
        Interests: InterestLoader(interests),
    }

    onSelect = id => {
        if (id) {
            this.setState({ selected: id })
        }
    }

    generateComponent = () => {
        const ComponentToRender = this.state.Interests[this.state.selected]
        if (ComponentToRender) {
            return <ComponentToRender />
        }
    }

    render() {
        return (
            <Layout>
                <SEO title=" " />
                <Banner />
                <FadeIn timeout={2000} fadeTime={700}>
                    <Selection
                        items={interests}
                        onSelect={this.onSelect}
                        selected={this.state.selected}
                    />
                    {this.generateComponent()}
                </FadeIn>
            </Layout>
        )
    }
}

export default IndexPage

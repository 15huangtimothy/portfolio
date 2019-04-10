import React, { Component } from "react"

import "./Animations.css"

class FadeIn extends Component {
    state = { didMount: false }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ didMount: true })
        }, this.props.timeout)
    }

    render() {
        return (
            <div
                className={"fade-in " + (this.state.didMount && "visible-1")}
                style={{
                    transition: "opacity " + this.props.fadeTime + "ms ease-in",
                }}
            >
                {this.props.children}
            </div>
        )
    }
}

export default FadeIn

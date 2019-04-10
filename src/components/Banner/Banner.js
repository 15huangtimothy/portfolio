import React, { Component } from "react"
import Typed from "typed.js"

import "./Banner.css"
import FadeIn from "../Animations/FadeIn.js"

const typedOptions = {
    strings: ["Hi, I'm Tim"],
    typeSpeed: 60,
    cursorChar: "&nbsp;",
}

class Banner extends Component {
    componentDidMount() {
        this.typed = new Typed("#typed", typedOptions)
    }

    componentWillUnmount() {
        this.typed.destroy()
    }

    render() {
        return (
            <div className={"container banner"}>
                <h1 id="typed" />
                <FadeIn timeout={1000} fadeTime={700}>
                    <h4>
                        Fourth year engineering student at UC Berkeley with a
                        fancy for creation, innovation, and a cup of coffee.
                        Let's{" "}
                        <a
                            className="link-animation"
                            href="https://www.linkedin.com/in/temhuang/"
                        >
                            connect!
                        </a>
                    </h4>
                </FadeIn>
            </div>
        )
    }
}

export default Banner

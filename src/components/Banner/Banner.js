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
                        Data science M.S. student at Columbia University and UC
                        Berkeley engineering alumni with a love for innovation,
                        creation, and a nice cup of coffee. <br />
                        <br />
                        Let's{" "}
                        <a
                            className="link-animation"
                            href="https://www.linkedin.com/in/temhuang/"
                            target="_blank"
                            rel="noopener noreferrer"
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

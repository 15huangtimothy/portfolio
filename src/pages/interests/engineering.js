import React from "react"

import InterestLayout from "../../layouts/interest-layout.js"
import Project from "../../components/Project/Project.js"

const Engineering = () => (
    <InterestLayout>
        <h3 className="interest-header">Engineering</h3>
        <p className="interest-intro">
            With a major in mechanical engineering at UC Berkeley, I have a
            background in product design and hardware engineering. Check out my
            engineering portfolio{" "}
            <a className="link-animation" href="">
                here
            </a>
            !
        </p>
    </InterestLayout>
)

export default Engineering

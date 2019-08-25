import React from "react"

import InterestLayout from "../../layouts/interest-layout.js"
import Project from "../../components/Project/Project.js"
import photography from "../../images/projects/photography.png"
import music from "../../images/projects/music.png"
import graphic_design from "../../images/projects/graphic_design.png"

const Hobbies = () => (
    <InterestLayout>
        <h3 className="interest-header">Hobbies</h3>
        <p className="interest-intro">
            Outside of school, I spend a lot of my free time picking up new
            skills and pursuing my other creative interests!
        </p>
        <Project title="Photography" image={photography} learn_more="">
            I enjoy playing around with landscape and portrait photography as
            well as learning Photoshop and Lightroom. Photography portfolio
            coming in the future!
        </Project>
        <Project title="Music Production" image={music} learn_more="">
            In addition to playing multiple instruments, I love creating and
            producing music! Currently I focus mainly on electronic music, but
            hoping to try out more genres.
        </Project>
        <Project title="Graphic Design" image={graphic_design} learn_more="">
            While at UC Berkeley, I was a member of publicity committees for
            several student organizations. I helped create graphical assets for
            flyers, events, and marketing purposes.
        </Project>
    </InterestLayout>
)

export default Hobbies

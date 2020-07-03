import React from "react"

import InterestLayout from "../../layouts/interest-layout.js"
import Project from "../../components/Project/Project.js"
import sam_schwartz from "../../images/projects/sam_schwartz.png"
import gitnotes from "../../images/projects/gitnotes.png"
import mello from "../../images/projects/mello.png"
import portfolioLogo from "../../images/projects/th_logo.png"
import dungeon from "../../images/projects/dungeon.png"
import bear_maps from "../../images/projects/bear_maps.png"

const ComputerScience = () => (
    <InterestLayout>
        <h3 className="interest-header">Software Engineering</h3>
        <p className="interest-intro">
            I'm passionate about using technology to improve and streamline the
            lives of everyday people! In addition to completing computer science
            coursework at UC Berkeley and Columbia, my background includes
            frontend and backend work through various internships and projects.
            I'm experienced with developing interactive user interfaces and web
            applications through React, as well as managing backend data
            pipelines and setting up REST API servers. This site showcases some
            of my work from internships and projects.
        </p>
        <Project
            title="Software Engineer Intern | Sam Schwartz"
            image={sam_schwartz}
            learn_more=""
        >
            At Sam Schwartz, a traffic/transportation firm, I worked on creating
            and supporting live dashboards for clients at NYC airports to
            address congestion. This included developing data ingest pipelines
            and setting up Node servers, PostgreSQL databases, and REST APIs to
            support realtime data. I also optimized existing server-side data
            processing logic to improve website load times and responsiveness.
        </Project>
        <Project
            title="GitNotes (WIP)"
            image={gitnotes}
            learn_more="https://github.com/15huangtimothy/gitnotes"
        >
            A browser-based digital markdown notebook with Github-integration .
        </Project>
        <Project
            title="mello"
            image={mello}
            learn_more="https://github.com/15huangtimothy/mello"
        >
            I created a Trello-clone React app that supports advanced
            drag-and-drop features for further user customization and fetches
            data with Trello's API for Trello account integration. More details
            on Github!
        </Project>
        <Project
            title="Portfolio Website"
            image={portfolioLogo}
            learn_more="https://github.com/15huangtimothy/portfolio"
        >
            This site! I designed the site with Figma and created it using
            GatsbyJS, a static progressive web app generator based on React. The
            site is mobile-responsive and developed with modular components to
            for easy future updates.
        </Project>
        <Project
            title="Dungeon Generation Game Engine"
            image={dungeon}
            learn_more="https://sp18.datastructur.es/materials/proj/proj2/proj2"
        >
            As part of my data structures class, I developed the backend for a
            procedurally-generated and interactive dungeon crawler game engine
            using a pseudo-random generation process. The engine would randomly
            generate rooms and hallways that a player can navigate through,
            along with randomly-occuring game objectives.
        </Project>
        <Project
            title="Bear Maps"
            image={bear_maps}
            learn_more="https://sp18.datastructur.es/materials/proj/proj3/proj3"
        >
            For my data structures class, I implemented the backend of a Google
            Maps-clone of the nearby Berkeley area that allows users to pan and
            zoom, as well as provide optimal route navigation information
            through my implementation of the A* search algorithm.
        </Project>
    </InterestLayout>
)

export default ComputerScience

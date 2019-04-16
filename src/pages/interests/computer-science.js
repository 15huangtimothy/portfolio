import React from "react"

import InterestLayout from "../../layouts/interest-layout.js"
import Project from "../../components/Project/Project.js"
import mello from "../../images/projects/mello.png"
import portfolioLogo from "../../images/projects/th_logo.png"
import dungeon from "../../images/projects/dungeon.png"
import bear_maps from "../../images/projects/bear_maps.png"

const ComputerScience = () => (
    <InterestLayout>
        <h3 className="interest-header">Computer Science</h3>
        <p className="interest-intro">
            At UC Berkeley, I've completed computer science coursework in Data
            Structures and Artificial Intelligence. In addition, I'm experienced
            with React web development through various personal side projects.
            This site displays some of my work in both frontend and backend
            development.
        </p>
        <Project
            title="mello"
            image={mello}
            learn_more="https://github.com/15huangtimothy/mello"
        >
            I created a Trello-clone React app that supports advanced
            drag-and-drop features for more customization and fetches data with
            Trello's API for Trello account integration. More information on the
            Github README!
        </Project>
        <Project title="Portfolio Website" image={portfolioLogo} learn_more="">
            This site! I designed the site through Figma and created it using
            GatsbyJS, a static progressive web app generator based on ReactJS.
            The site is mobile-responsive and uses modular components to allow
            for easy future updates.
        </Project>
        <Project
            title="Dungeon Generation Game Engine"
            image={dungeon}
            learn_more=""
        >
            As part of my data structures class, I designed and implemented the
            backend for a procedurally-generated and interactive dungeon crawler
            game engine using a pseudo-random generation process and existing
            graphical assets. The engine would randomly generate rooms and
            hallways that a player can navigate through, along with random game
            objectives.
        </Project>
        <Project title="Bear Maps" image={bear_maps} learn_more="">
            For my data structures class, I implemented the backend of a Google
            Maps-clone for the nearby Berkeley area that allows users to pan and
            zoom, as well as provide optimal route navigation information
            through my implementation of an A* search algorithm.
        </Project>
    </InterestLayout>
)

export default ComputerScience

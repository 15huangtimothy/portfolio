import React from "react"

import InterestLayout from "../../layouts/interest-layout.js"
import Project from "../../components/Project/Project.js"

const Hobbies = () => (
    <InterestLayout>
        <h3 className="interest-header">Hobbies</h3>
        <p className="interest-intro">
            Outside of school, I spend a lot of my free time picking up new
            skills and pursuing my other creative interests!
        </p>
        <Project title="Graphic Design" image="" learn_more="#">
            Developed a model that predicts the ride duration of taxi trips in
            NYC using existing NYC taxi data. Conducted exploratory data
            analysis, feature engineering, and cross-validation to select a
            regularized linear model and create a data processing pipeline.
        </Project>
        <Project title="Music Production" image="" learn_more="">
            Developed a model that predicts the ride duration of taxi trips in
            NYC using existing NYC taxi data. Conducted exploratory data
            analysis, feature engineering, and cross-validation to select a
            regularized linear model and create a data processing pipeline.
        </Project>
        <Project title="Photography" image="" learn_more="#">
            Developed a model that predicts the ride duration of taxi trips in
            NYC using existing NYC taxi data. Conducted exploratory data
            analysis, feature engineering, and cross-validation to select a
            regularized linear model and create a data processing pipeline.
        </Project>
    </InterestLayout>
)

export default Hobbies

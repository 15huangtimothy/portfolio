import React from "react"

import InterestLayout from "../../layouts/interest-layout.js"
import Project from "../../components/Project/Project.js"

const DataScience = () => (
    <InterestLayout>
        <h3 className="interest-header">Data Science</h3>
        <p className="interest-intro">
            At UC Berkeley, I've taken the undergraduate Data Science
            department's flagship course,{" "}
            <a className="link-animation" href="http://www.ds100.org/">
                Data 100: Principles & Techniques of Data Science
            </a>
            . Through this course, I was able to learn and apply exploratory
            data analysis, feature engineering, statistical inference, and
            predictive modeling to multiple projects using real-world data, such
            as the ones listed below.
        </p>
        <Project title="NYC Taxi Ride Model" image="" learn_more="">
            Developed a model that predicts the ride duration of taxi trips in
            NYC using existing NYC taxi data. Conducted exploratory data
            analysis, feature engineering, and cross-validation to select a
            regularized linear model and create a data processing pipeline.
        </Project>
        <Project title="Spam Email Classification" image="" learn_more="">
            Created a spam email classifier using existing email data,
            exploratory data analysis, feature engineering, and machine learning
            to design a logistic classification model.
        </Project>
    </InterestLayout>
)

export default DataScience

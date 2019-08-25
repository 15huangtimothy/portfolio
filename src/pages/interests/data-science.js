import React from "react"

import InterestLayout from "../../layouts/interest-layout.js"
import Project from "../../components/Project/Project.js"
import gptw from "../../images/projects/gptw.png"
import taxi from "../../images/projects/taxi.png"
import spam from "../../images/projects/spam.png"

const DataScience = () => (
    <InterestLayout>
        <h3 className="interest-header">Data Science</h3>
        <p className="interest-intro">
            At UC Berkeley, I took the Data Science department's flagship
            course,{" "}
            <a
                className="link-animation"
                href="http://www.ds100.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Data 100: Principles & Techniques of Data Science
            </a>
            , where learned and applied exploratory data analysis, feature
            engineering, statistical inference, and predictive modeling to
            multiple projects, such as the ones listed below. Additionally, I
            worked at{" "}
            <a
                className="link-animation"
                href="https://www.greatplacetowork.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Great Place to Work
            </a>{" "}
            as a data science intern, where I got the opportunity to apply NLP
            and ML techniques to business analytics and workplace research.
            <br />
            <br />
            I'm currently pursuing an M.S. in Data Science at Columbia
            University to gain a stronger foundation and achieve a better
            understanding of advanced techniques in data science.
        </p>
        <Project
            title="Great Place to Work Internship"
            image={gptw}
            learn_more=""
        >
            Conducted a churn analysis by analyzing behaviours of GPTW customer
            churn and creating a predictive churn model. Presented key findings
            during company-wide meetings, resulting in my analysis receving high
            praise from top executives and being distributed to global affiliate
            companies. Produced research on identifying "belonging" in the
            workplace, using over 10 years of US employee data and applying
            natural language processing methods on employee comments.
        </Project>
        <Project title="NYC Taxi Ride Model" image={taxi} learn_more="">
            Developed a model that predicts the ride duration of taxi trips in
            NYC using existing NYC taxi data. Conducted exploratory data
            analysis, feature engineering, and cross-validation to select a
            regularized linear model and create a data processing pipeline.
        </Project>
        <Project title="Spam Email Classification" image={spam} learn_more="">
            Created a spam email classifier using existing email data,
            exploratory data analysis, feature engineering, and machine learning
            to design a logistic classification model.
        </Project>
    </InterestLayout>
)

export default DataScience

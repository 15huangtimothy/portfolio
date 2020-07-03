import React from "react"

import InterestLayout from "../../layouts/interest-layout.js"
import Project from "../../components/Project/Project.js"
import gptw from "../../images/projects/gptw.png"
import bert from "../../images/projects/bert.png"
import taxi from "../../images/projects/taxi.png"
import twitter from "../../images/projects/twitter.png"
import spam from "../../images/projects/spam.png"

const DataScience = () => (
    <InterestLayout>
        <h3 className="interest-header">Data Science</h3>
        <p className="interest-intro">
            I'm fascinated by the harnessing the power of data and uncovering
            insights in our increasingly data-enabled world. At UC Berkeley, I
            took the Data Science flagship course,{" "}
            <a
                className="link-animation"
                href="http://www.ds100.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Data 100
            </a>
            , where I learned and applied exploratory data analysis, feature
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
            and ML techniques to conduct workplace research and study users.
            <br />
            <br />
            I'm currently pursuing an M.S. in Data Science at Columbia
            University to gain a stronger foundation and achieve a better
            understanding of advanced techniques in data science.
        </p>
        <Project
            title="Data Science Intern | Great Place to Work"
            image={gptw}
            learn_more=""
        >
            Conducted a churn analysis by analyzing of GPTW customer behavior
            and creating a predictive churn model. Presented key findings during
            company-wide meetings, resulting in my analysis receving high praise
            from top executives and global affiliate companies. Additioanlly,
            produced research on identifying "belonging" in the workplace, using
            over 10 years of US employee data and applying NLP methods on
            employee comments.
        </Project>
        <Project
            title="COVID Literature Search"
            image={bert}
            learn_more="https://github.com/jayzern/covid-literature-search"
        >
            A BERT-based search engine built using PyTorch (HuggingFace),
            React.js and Flask trained on the COVID-19 Open Research Dataset by
            the{" "}
            <a
                className="link-animation"
                href="https://allenai.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Allen Institute for AI
            </a>
            , with over 29,000 scholarly articles. Final project for Applied
            Deep Learning taught by Josh Gordon at Columbia.
        </Project>
        <Project
            title="Twitter Sentiment Analysis"
            image={twitter}
            learn_more=""
        >
            Produced a sentiment analysis on a celebrity’s tweet history. Used
            Twitter’s API to study historical tweeting patterns and to
            investigate the relationship between a tweet’s sentiment and its
            public engagement.
        </Project>
        <Project title="NYC Taxi Ride Model" image={taxi} learn_more="">
            Developed a model that predicts the ride duration of taxi trips in
            NYC using existing NYC taxi data. Conducted exploratory data
            analysis, feature engineering, and cross-validation to select a
            regularized linear model and create a data processing pipeline.
        </Project>
        <Project title="Spam Email Classification" image={spam} learn_more="">
            Created a spam email classifier using existing email data to train a
            logistic classification model with 99.6% test accuracy, ranking
            within the top 3% of all class models.
        </Project>
    </InterestLayout>
)

export default DataScience

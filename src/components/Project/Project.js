import React from "react"

import "./Project.css"

const Project = props => {
    const learn_more_button = (
        <a className="btn button-2" href={props.learn_more}>
            Learn More
        </a>
    )

    const divStyle = {
        backgroundImage: "url(" + props.image + ")",
    }

    return (
        <div className="card project">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card-image" style={divStyle} alt="" />
                </div>
                <div className="col-sm-8 card-content">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.children}</p>
                    {props.learn_more && learn_more_button}
                </div>
            </div>
        </div>
    )
}

export default Project

import React, { Component } from "react"

import "./Selection.css"

class Selection extends Component {
    state = { active: null }

    onSelect = e => {
        const id = e.target.id
        if (id) {
            this.setState({ active: id })
            this.props.onSelect(id)
        }
    }

    isActive = id => {
        if (this.state.active === id) {
            return "active"
        }
        return ""
    }

    generateItems = () => {
        return Object.keys(this.props.items).map((id, i) => (
            <button
                className={"btn button-1 " + this.isActive(id)}
                key={i}
                id={id}
            >
                {this.props.items[id]}
            </button>
        ))
    }

    render() {
        return (
            <div className="container selection">
                <h2>Interests</h2>
                <div className="button-grid" onClick={this.onSelect}>
                    {this.generateItems()}
                </div>
            </div>
        )
    }
}

export default Selection

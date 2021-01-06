import React from "react"

function NormanMenu (props) {

    return (
        <div className="project-content-col">
            <ul className="menu-list">
                <li><a onClick={props.handleContentClick}>Overview</a></li>
                <li><a onClick={props.handleContentClick}>Home Site</a></li>
                <li><a onClick={props.handleContentClick}>Architectural Details</a></li>
                <li><a onClick={props.handleContentClick}>Site Plans</a></li>
                <li><a onClick={props.handleContentClick}>Architectural Details</a></li>
                <li><a onClick={props.handleContentClick}>Floorplan Sketch</a></li>
                <li><a onClick={props.handleContentClick}>Color / Materials</a></li>
                <li><a onClick={props.handleContentClick}>Selections By Room</a></li>
            </ul>
        </div>
    )

}

export default NormanMenu
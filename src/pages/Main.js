import { React, useState } from "react"
import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"


function Main() {

const [wakeState, setWakeState] = useState("Wake County")
const [slopeState, setSlopeState] = useState("South Slope")

function handleWakeHover () {
    setWakeState("Coming Soon!")
}

function handleWakeLeave () {
    setWakeState("Wake County")
}

function handleSlopeHover () {
    setSlopeState("Coming Soon!")
}

function handleSlopeLeave () {
    setSlopeState("South Slope")
}

  return (
    <div>
        <Header />
        <div className="container-fluid">
            <div className="row quote-row">
                <div className="col-md-2"></div>
                <div className="col-md-8 quote-col">
                    <p className="quote-script">
                        What finally is beauty? Certainly nothing that can be calculated or measured. It is always something imponderable, something that lies between things.
                    </p>
                    <p className="quote-attribution">- Ludwig Mies van der Rohe</p>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row main-row">
                <div className="col-md-12 section-divider">
                    <p className="wip-txt kw-bkgd">works in progress</p>
                </div>
            </div>
            <div className="row main-row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <Link to="/lakenorman">
                        <div className="btn project-btn project-norman">
                            
                                <p className="project-name">Lake Norman</p>
                            
                        </div>
                    </Link> 
                </div>
                <div className="col-md-4 justify-content-center">
                    <div className="btn project-btn project-wake" onMouseOver={handleWakeHover} onMouseLeave={handleWakeLeave}>
                    <p className="project-name" >{wakeState}</p>
                    </div>
                </div>
                <div className="col-md-2"></div>

            </div>
        <div className="row main-row">
            <div className="col-md-2"></div>
            <div className="col-md-4 justify-content-center">
                <Link to="/quorum">
                    <div className="btn project-btn project-quorum">
                        <p className="project-name">Quorum Center</p>
                    </div>
                </Link>
            </div>
            <div className="col-md-4 justify-content-center">
                <div className="btn project-btn project-southslope" onMouseOver={handleSlopeHover} onMouseLeave={handleSlopeLeave}>
                <p className="project-name" >{slopeState}</p>
                </div>
            </div>
            <div className="col-md-2"></div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Main;
import { React, useState } from "react"

import QuorumContentMain from "../components/Quorum/QuorumContentMain"
import QuorumContentHomeSite from "../components/Quorum/QuorumContentHomeSite"
import QuorumContentPlans from "../components/Quorum/QuorumContentPlans"

import Footer from "../components/Footer"
import Header from "../components/Header"
import WIP from "../components/WIP"


function Quorum() {

    const [pageState, setPageState] = useState("QuorumContentMain")

    function handleContentClick (event) {
        setPageState(event.target.id)
    }

    let column

    switch (pageState) {
        
        case "overview" :
            column = <QuorumContentMain />
            break;
        case "homesite" :
            column = <QuorumContentHomeSite />
            break;
        case "architecture" :
            column = <WIP />
            break;
        case "plans" :
            column = <QuorumContentPlans />
            break;
        case "palette" :
            column = <WIP />
            break;
        case "rooms" :
            column = <WIP />
            break;
        default: 
            column = <QuorumContentMain />
        }
    

    return (
      
    <div>
        <Header />
        <div className="container-fluid content-container">
            <div className="row project-row">
                <div className="col-md-2 project-menu-col">
                    <div className="row menu-spacing-row"></div>
                    <div className="row menu-heading-row">
                        <h4 className="menu-text">Menu</h4>
                    </div>
                        <div className="row menu-row menu-row-top">  
                            <a href="#" id="overview" onClick={handleContentClick}>Overview</a>
                        </div>
                        <div className="row menu-row"> 
                            <a href="#" id="homesite" onClick={handleContentClick}>Home Site</a>
                        </div>
                        <div className="row menu-row"> 
                            <a href="#" id="architecture" onClick={handleContentClick}>Architectural Details</a>
                        </div>
                        <div className="row menu-row"> 
                            <a href="#" id="plans" onClick={handleContentClick}>Site Plans</a>
                        </div>
                        <div className="row menu-row"> 
                            <a href="#" id="palette" onClick={handleContentClick}>Color / Materials</a>
                        </div>
                        <div className="row menu-row menu-row-bottom"> 
                            <a href="#" id="rooms" onClick={handleContentClick}>Selections By Room</a>
                        </div>
                        <div className="row menu-spacing-row-bottom"></div>
                      
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-9 project-content-col">
                <h2 className="content-title">"Howling Forever"</h2>
                <h3 className="content-subtitle">323 W. Jones St, Raleigh, NC</h3>
                    {column}
                </div>
            </div>
        </div>
        <Footer />
    </div>
    
  );
}

export default Quorum;
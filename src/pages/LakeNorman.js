import { React, useState } from "react"

import NormanContentArchitecture from "../components/LakeNorman/NormanContentArchitecture"
import NormanContentHomeSite from "../components/LakeNorman/NormanContentHomeSite"
import NormanContentMain from "../components/LakeNorman/NormanContentMain"
import NormanContentPalette from "../components/LakeNorman/NormanContentPalette"
import NormanContentPlans from "../components/LakeNorman/NormanContentPlans"
import NormanContentRooms from "../components/LakeNorman/NormanContentRooms"
import Footer from "../components/Footer"


import Header from "../components/Header"


function LakeNorman() {

    const [pageState, setPageState] = useState("NormanContentMain")

    function handleContentClick (event) {
        setPageState(event.target.id)
    }

    let column

    switch (pageState) {
        
        case "overview" :
            column = <NormanContentMain />
            break;
        case "homesite" :
            column = <NormanContentHomeSite />
            break;
        case "architecture" :
            column = <NormanContentArchitecture />
            break;
        case "plans" :
            column = <NormanContentPlans />
            break;
        case "palette" :
            column = <NormanContentPalette />
            break;
        case "rooms" :
            column = <NormanContentRooms />
            break;
        default: 
            column = <NormanContentMain />
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
                <h2 className="content-title">"Must Be the Moon"</h2>
                <h3 className="content-subtitle">155 Whitby Ln, Mooresville, NC</h3>
                    {column}
                </div>
            </div>
        </div>
        <Footer />
    </div>
    
  );
}

export default LakeNorman;
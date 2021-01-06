import React, { useState } from "react"

import FloorplanSketch from "../../assets/property/lake-norman/floorplan-detail.png"

import Foyer from "../../assets/property/lake-norman/fp-details/foyer.png"
import Family from "../../assets/property/lake-norman/fp-details/family.png"
import Living from "../../assets/property/lake-norman/fp-details/living.png"
import Lounge from "../../assets/property/lake-norman/fp-details/lounge.png"
import Library from "../../assets/property/lake-norman/fp-details/library.png"
import Utils from "../../assets/property/lake-norman/fp-details/utils.png"
import Kitchen from "../../assets/property/lake-norman/fp-details/kitchen.png"
import Wetbar from "../../assets/property/lake-norman/fp-details/wetbar.png"
import Dining from "../../assets/property/lake-norman/fp-details/dining.png"
import Master from "../../assets/property/lake-norman/fp-details/master.png"
import G1 from "../../assets/property/lake-norman/fp-details/g1.png"
import G2 from "../../assets/property/lake-norman/fp-details/g2.png"
import Kids from "../../assets/property/lake-norman/fp-details/kids.png"
import G3 from "../../assets/property/lake-norman/fp-details/g3.png"
import Bath4 from "../../assets/property/lake-norman/fp-details/bath4.png"

import NormanFoyer from "./RoomDetailComps/NormanFoyer"
import NormanFamily from "./RoomDetailComps/NormanFamily"
import NormanLiving from "./RoomDetailComps/NormanLiving"
import NormanLounge from "./RoomDetailComps/NormanLounge"
import NormanLibrary from "./RoomDetailComps/NormanLibrary"
import NormanMaster from "./RoomDetailComps/NormanMaster"

import WIP from "../WIP"


 

function NormanContentRooms () {

const [roomState, setRoomState] = useState({FloorplanSketch})
const [nameState, setNameState] = useState("Selections will appear here once a room is selected")

function handleHover (event) {
    setRoomState(event.target.id)
}

function changeNameState (event) {
    event.preventDefault()
    setNameState(event.target.innerHTML)
}

// Managing the hover rule that highlights each room on the floorplan

let roomToShow 

switch (roomState) {
        
    case "foyer" :
        roomToShow = Foyer
        break;
    case "family" :
        roomToShow = Family
        break;
    case "living" :
        roomToShow = Living
        break;
    case "dining" :
        roomToShow = Dining
        break;
    case "lounge" :
        roomToShow = Lounge
        break;
    case "library" :
        roomToShow = Library
        break;
    case "master" :
        roomToShow = Master
        break;
    case "utils" :
        roomToShow = Utils
        break;
    case "kitchen" :
        roomToShow = Kitchen
        break;
    case "wetbar" :
        roomToShow = Wetbar
        break;
    case "g1" :
        roomToShow = G1
        break;
        case "g2" :
        roomToShow = G2
        break;
    case "kids" :
        roomToShow = Kids
        break;
    case "g3" :
        roomToShow = G3
        break;
    case "bath4" :
        roomToShow = Bath4
        break;
    default: 
        roomToShow = FloorplanSketch
    }

// Managing the which selection is shown by room on click

let componentToShow

switch (nameState) {
        
    case "Entry" :
        componentToShow = <NormanFoyer />
        break;
    case "Family Room" :
        componentToShow = <NormanFamily />
        break;
    case "Living Room" :
        componentToShow = <NormanLiving />
        break;
    case "Lounge" :
        componentToShow = <NormanLounge />
        break;
    case "Kitchen" :
        componentToShow = <WIP />
        break;
    case "Library" :
        componentToShow = <NormanLibrary />
        break;
    case "Master Suite" :
        componentToShow = <NormanMaster />
        break;
    case "Wet Spaces" :
        componentToShow = <WIP />
        break;
    case "Kitchen" :
        componentToShow = <WIP />
        break;
    case "Wet Bar" :
        componentToShow = <WIP />
        break;
    case "Guest Suite 1" :
        componentToShow = <WIP />
        break;
        case "Guest Suite 2" :
            componentToShow = <WIP />
            break;
    case "Kids' Room" :
        componentToShow = <WIP />
        break;
    case "Bedroom #4" :
        componentToShow = <WIP />
        break;
    case "Shared Bath" :
        componentToShow = <WIP />
        break;
    default: 
        componentToShow = <WIP />
    }
    

    return (
        <div>
            <h3 className="content-heading">Room Details and Selections</h3>
            <div className="row">
                <h4 className="room-selector-heading">Select a room from the list below to view design plan</h4>
            </div>
            <div className="row room-selector-row kw-bkgd">
                <div className="col-md-8 border-right-col">
                    <h5>Ground Floor</h5>
                </div>
                <div className="col-md-4">
                    <h5>Second Floor</h5>
                </div>
            </div>
            <div className="row first-room-row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <a className="room-link" id="foyer" href="#" onMouseOver={handleHover} onClick={changeNameState}>Entry</a>
                </div>
                <div className="col-md-3">
                    <a className="room-link" id="family" href="#" onMouseOver={handleHover} onClick={changeNameState}>Family Room</a>
                </div>
                <div className="col-md-1 border-right-col"></div>
                <div className="col-md-4">
                    <a className="room-link" id="g1" href="#" onMouseOver={handleHover} onClick={changeNameState}>Guest Suite 1</a>
                </div>
            </div>
            <div className="row room-row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <a className="room-link" id="living" href="#" onMouseOver={handleHover} onClick={changeNameState}>Living Room</a>
                </div>
                <div className="col-md-3">
                    <a className="room-link" id="lounge" href="#" onMouseOver={handleHover} onClick={changeNameState}>Lounge</a>
                </div>
                <div className="col-md-1 border-right-col"></div>
                <div className="col-md-4">
                    <a className="room-link" id="g2" href="#" onMouseOver={handleHover} onClick={changeNameState}>Guest Suite 2</a>
                </div>
            </div>
            <div className="row room-row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <a className="room-link" id="kitchen" href="#" onMouseOver={handleHover} onClick={changeNameState}>Kitchen</a>
                </div>
                <div className="col-md-3">
                    <a className="room-link" id="dining" href="#" onMouseOver={handleHover} onClick={changeNameState}>Dining Room</a>
                </div>
                <div className="col-md-1 border-right-col"></div>
                <div className="col-md-4">
                    <a className="room-link" id="kids" href="#" onMouseOver={handleHover} onClick={changeNameState}>Kids' Room</a>
                </div>
            </div>
            <div className="row room-row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <a className="room-link" id="library" href="#" onMouseOver={handleHover} onClick={changeNameState}>Library</a>
                </div>
                <div className="col-md-3">
                    <a className="room-link" id="wetbar" href="#" onMouseOver={handleHover} onClick={changeNameState}>Wet Bar</a>
                </div>
                <div className="col-md-1 border-right-col"></div>
                <div className="col-md-4">
                    <a className="room-link" id="g3" href="#" onMouseOver={handleHover} onClick={changeNameState}>Bedroom #4 </a>
                </div>
            </div>
            <div className="row last-room-row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <a className="room-link" id="master" href="#" onMouseOver={handleHover} onClick={changeNameState}>Master Suite</a>
                </div>
                <div className="col-md-3">
                    <a className="room-link" id="utils" href="#" onMouseOver={handleHover} onClick={changeNameState}>Wet Spaces</a>
                </div>
                <div className="col-md-1 border-right-col"></div>
                <div className="col-md-4">
                    <a className="room-link" id="bath4" href="#" onMouseOver={handleHover} onClick={changeNameState}>Shared Bath</a>
                </div>
            </div>
            <div className="row">
                <img className="fp-sketch" src={roomToShow} alt="Floorplan Sketch" height="50%" width="50%" />
            </div>  
            <div className="row room-selector-row kw-bkgd">
                <h4 className="room-selector-heading">{nameState}</h4>
            </div>  
            {componentToShow}  
        </div>
   
    )
}

export default NormanContentRooms
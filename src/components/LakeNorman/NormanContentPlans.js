import React from "react"

import GroundPlanTech from "../../assets/property/lake-norman/floorplan-ground-tech.png"
import TopPlanTech from "../../assets/property/lake-norman/floorplan-second-tech.png"
import FloorplanSketch from "../../assets/property/lake-norman/front-elevation-sketch.png"


function NormanContentPlansTech () {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="content-heading">Site Plans</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <img src={FloorplanSketch} alt="Property Sketch" height="100%" width="100%" />
                </div>
            </div>
            <h3 className="content-heading">Main Floor</h3>
                <img className="imported-sketch" src={GroundPlanTech} 
                alt="architectural floorplan - main floor" />
                <p className="first-p">For the primary residents, A large garage offers protection from the elements to vehicles.  Whether the home is entered from the front entrance or the garage entrance the entrants are almost immediately routed to the main living area which houses the kitchen, family room (bottom) and dining room (top) of the large great space.</p>
                <p>The center of the home contains two separate living areas to the north and south of the kitchen.  The lounge is intended as an entertaining area, facing the water and offering waterfront views as well as easy access to the dock.  It's separated from the kitchen by a wet bar and powder room for easy access, and has a study/library adjacent to it.  Facing away from the water is a more formal living room, intended for more quiet gatherings.  It offers the same kitchen access as the lounge, but is within closer proximity to the cellar room for more formalized celebrations.</p>
                <p>The master suite comprises the entire right-hand side of the ground floor of the home, offering lake views from two different angles in the bedroom (facing west, this floorplan is reversed from the actual orientation of the property), and wooded views from the generous master bathroom.</p>
                <p className="last-p">The exterior common areas, similar to the two separate living spaces are divided between casual space and a more quiet space.  To the far left of the property sits the pool and spa, with a generously sized covered lounge and wet bar as well as a separate bar area for cooking and eating.  The dock extends several yards into the lake and is symmetrical to the indoor lounge.  Due to the angle of this home it is possible to enjoy a full sunrise and sunset from this dock, and for it to be purely for relaxation in having a separate boat launch area that can be seen to the right of the home.  Adding mass to the pool deck but facing the woods and property entrance is a healthy amount of storage space, the main power/server room for the property, and a large home brewery.</p>
                <h3 className="content-heading">Second Floor</h3>
                <img className="imported-sketch" src={TopPlanTech} alt="architectural floorplan - second floor" />
                <p className="first-p last-p">There are four bedrooms, three bathrooms, and a flex space occupying the second floor.  The two primary guest-rooms are water-facing and each feature their own private bath.  The nursery/kids room sits above the quietest area of the property, what makes up the laundry room and storage area on the first floor.  It's also the closest proximity to the flex area, which would currently be used as a kids play area.  It shares a bath with the fourth bedroom which in this case serves as a guest room but could easily be converted into a large home office.</p>
        </div>
    )
}

export default NormanContentPlansTech
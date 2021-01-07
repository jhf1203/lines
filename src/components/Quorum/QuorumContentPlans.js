import React from "react"

import Original from "../../assets/property/quorum/original-plans.png"
import Revised from "../../assets/property/quorum/revised-plans.png"

function QuorumContentPlans () {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="content-heading">Site Plans</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 selection-col">
                <p>Below you can see the original site plan of a typical floor of the quorum center.  Two different two-bedroom condo plans occupy the top half of the blueprint with a single one, two, and three-bedroom option apiece occupying the bottom half.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 selection-col">
                    
                    <p>You will see shortly in our revision how the bottom half has been transformed, as it was the side of the building that received the worst damage from the adjacent fire over three years ago.  The larger rooms which would typically comprise the home's common areas are all located on the bottom end of the sketch, with the master suite in the top left of the revision and the guest suites taking up basically the entire right side except for the bottom tip.</p>
                    <p>This is important because it creates a more natural-feeling traffic flow to both the homeowner and the guests.  With the horseshoe shape of the revised plan it would not be efficient, for example, to have to travel throughout the entire horseshoe just to go from the living room to the family room, the kitchen to the dining room, etc.</p>
                    <p>Also in mind here is minimizing the utility additions that need to be made.  While one guest room from the original plan does become part of the new kitchen here, the rest of the new kitchen and the pantry is a combination of two old kitchens and a bathroom.  The wine vault was a guest bathroom and a laundry area.  Nothing is a bathroom now that wasn't a bathroom or partial kitchen before.  This means that appropriate plumbing, electrical, and gas connections require little to no revisitation to ensure that the home is functional.</p>
                </div>
                <div className="col-md-6 selection-col"><img className="img-contain" src={Original} alt="original plans" height="90%" width="100%" />
                </div>
                <div className="row">
                    <div className="col-md-12 selection-col">
                        <p>Below we have a colorized sketch of the completed renovation overlaid on top of the original site plan, to gain an understanding of what has been joined versus what are still separate residences.  As we discuss the flow of the home you will see how minimal construction needed to be taken place to combine this space.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default QuorumContentPlans
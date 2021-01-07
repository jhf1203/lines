import React from "react"

import Original from "../../assets/property/quorum/original-plans.png"
import Comparison from "../../assets/property/quorum/revised-plans.png"
import Updated from "../../assets/property/quorum/new-plans.png"

function QuorumContentPlans () {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="content-heading">Site Plans</h3>
                </div>
            </div>
            <div className="row palette-row">
                <div className="col-md-9 selection-col">
                    <p>Here you can see the original site plan of a typical floor of the quorum center.  Two different two-bedroom condo plans occupy the top half of the blueprint with a single one, two, and three-bedroom option apiece occupying the bottom half.</p>
                    <p>You can see in our revision how the bottom half has been transformed.  The larger rooms which would typically comprise the home's common areas are all located on the bottom end of the sketch, with the master suite in the top left of the revision and the guest suites taking up basically the entire right side except for the bottom tip.</p>
                    <p>This is important because it creates a more natural-feeling traffic flow to both the homeowner and the guests.  With the horseshoe shape of the revised plan it would not be efficient, for example, to have to travel throughout the entire horseshoe just to go from the living room to the family room, the kitchen to the dining room, etc.</p>
                    <p>Also in mind here is minimizing the utility additions that need to be made.  While one guest room from the original plan does become part of the new kitchen here, the rest of the new kitchen and the pantry is a combination of two old kitchens and a bathroom.  The wine vault was a guest bathroom and a laundry area.  Almost nothing is a bathroom now that wasn't a bathroom or partial kitchen before.  This means that appropriate plumbing, electrical, and gas connections require little to no revisitation to ensure that the home is functional.</p>
                    <p>Regarding construction, only five wall portions totaling less than 40 linear feet were removed.  As you can see when comparing images, the only amount of wall wider than a doorway that was removed helped a guest room become the middle of the kitchen.  Besides that, a new entry was created into the wine vault which was a guest bathroom on the left, a closet and powder room were turned into a hallway to allow quicker access from the home's entry point to the guest wing, and a wall separating the original one and two-bedroom condos was removed to transform the old one-bedroom into a guest suite, with the former bathrooms becoming office and library nooks.</p>
                </div>
                
                <div className="col-md-3 selection-col mobile-divider">
                    <div className="row double-display">
                        <img className="img-contain fp-dual" src={Original} alt="original plans" height="100%" width="100%" />
                    </div>
                    <div className="row double-display">
                        <img className="img-contain fp-dual" src={Comparison} alt="plan comparison" height="100%" width="100%" />
                    </div>
                </div>
                
            </div>
            <div className="row material-intro-row">
                <div className="col-md-8 selection-col">
                    <img className="img-contain" src={Updated} alt="revised plan" height="100%" width="100%" />
                    </div>
                <div className="col-md-4 selection-col">
                    <p>Here is an enlarged view of the residence's floorplan.  The main entrance to this residence can be seen in the middle of the sketch.  It offers the primary resident quick access to the master suite located in the top left, or the visitor access to the common areas on the bottom or one of the guest suites on the right. </p>
                    <p>A large kitchen divides the two primary common spaces, boasting a 16-foot island/bar and a large pantry converted from an old bathroom.  Facing East, the family room on the bottom right and the dining area on the bottom left both offer 180 degree views of Raleigh's skyline.  A secondary living area next to the master suite is from a converted third bedroom, divided from the dining area by a balcony and a wine vault made from a converted third bath.</p>
                    </div>
                    <p>There are three secondary bedrooms.  On the top left is a full guest suite with its own bath, which is almost the entirety of what was once a one-bedroom condo.  It's situated farthest from everything else in the home for privacy, similar to how the master suite is situated on the top left.</p>
                    <p>Two additional bedrooms divide the family room from the guest suite.  The top one is intended to be a child's room or nursery, offering plenty of open space for recreation and being the closest to the shared bath.  The fourth (spare) bedroom is used the least, hence it sits directly next to the family room.  What was once a dedicated bathroom for this room has been converted into a spacious laundry/utility space.</p>
                    <p>Finally, much functionality was added to the guest bed hallway by simply removing two 54" sections of drywall.  What was once a small bathroom and a utility closet now has 200 square feet of flex space, including 30 linear feet of new wall space.  In this instance, it's the perfect size for an office space and library.</p>
                    <p>Overall the modifications made to create this residence succeeded in making the home spacious enough to break the stigma of a downtown condo, open enough to take in the beautiful city view from almost every room in the property, compartmentalized enough to feel like a cozy home, and most importantly functional enough to feel like it was designed this way from the beginning.</p>
                </div>
            
        </div>
    )
}

export default QuorumContentPlans
import React from "react"  

import SitePlan from "../../assets/property/lake-norman/NMN.png"


function NormanContentHomeSite () {
    return (
        <div>
          <h3 className="content-heading">Home Site</h3>
          <img className="sub-section" src={SitePlan} alt="The overall property" />
          <p>Originally there were two residences occupying the southern side of this tree-covered penninsula at the end of Whitby Ln.  As you can see from the above site plan this has been condensed to be one large family compound.  The remaining trees protect the property's privacy from the street itself, but many not serving as the property border were cleared to maximize usable space and sunlight.</p>
          <p>The positioning of the home itself allows for both sunrise and sunset views, with the opportunity to escape direct light if desired due to the angle of the home.  A beach area will separate the home itself from the water by several yards, and there will be farm/garden/orchard space to the east of the home.  Watercraft are protected by the dock and boathouse being positioned within a cove on the eastern-most side of the property, while panoramic views of the lake can be taken in from a separate dock positioned due south of the home.</p>
        </div>
    )
}

export default NormanContentHomeSite
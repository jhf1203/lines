import React from "react"  

import FrontTech from "../../assets/property/lake-norman/front-elevation-tech.png"
import RearTech from "../../assets/property/lake-norman/rear-elevation-tech.png"
import FrontSketch from "../../assets/property/lake-norman/front-elevation-sketch.png"
import RearSketch from "../../assets/property/lake-norman/rear-elevation-sketch.png"

function NormanContentArchitecture () {
    return (
        <div>
          <h3 className="content-heading">Architectural Details</h3>
          <p>The home is divided into a main living section and a recreation/utility section.  The driveway into the property is the divider, and offers a full view of the lake upon the property's entrance.</p>
          <p>The architectural intention of this home was an inviting and recreational take on the concept of the famouse Farnsworth House by Mies van der Rohe.  The secondary and teritary masses of the main living areas, the formal living and master suite areas, are housed on metal stilts rather than supported by the crawlspace that supports the property's primary mass.  Custom painted panels on both the front and rear of the property support the overall color direction of the home's interior. </p>
          <div className="sub-section content-detail">
              <h4 className="content-subheading">Front Elevations</h4>
              <img className="imported-sketch" src={FrontTech} alt="architectural elevation - front facade" />
              <img className="imported-sketch" src={FrontSketch} alt="elevation sketch - front facade" />
              <p className="first-p last-p">A contrasting mixture of wood and stone highlight the front facade, and help further separate the main living area of the home and the recreational/utility area.  Mid-tone saturated wood paneling for the main living area complement the long-range lake and sky views, where the garage and utility areas are monochromatic, with the intention being to draw the eye to the main living space.</p>
          </div>
          <div className="sub-section content-detail">
              <h4 className="content-subheading">Rear Elevations</h4>
              <img className="imported-sketch" src={RearTech} alt="architectural elevation - rear facade" />
              <img className="imported-sketch" src={RearSketch} alt="elevation sketch - rear facade" />
              <p className="first-p last-p">As would be expected with any lakefront property, the focus on the rear of the home is enabling a water view from each room of the property.  The dining area of the great room on the right-hand-side of the living area of the rear elevation also has a wall of windows on its right side, enabling morning sunrise views.</p>
          </div>
        </div>
    )
}

export default NormanContentArchitecture
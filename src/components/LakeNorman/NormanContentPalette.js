import React from "react"

import ColorPalette from "../../assets/property/lake-norman/palette.png"
import CerusedOak from "../../assets/property/lake-norman/cerused-oak.png";
import Chalk from "../../assets/property/lake-norman/chalk.png"
import A1 from "../../assets/property/lake-norman/material-palette-samples/a-1-clw-dove.jpeg"
import A2 from "../../assets/property/lake-norman/material-palette-samples/a-2-clw-fog.jpeg"
import A3 from "../../assets/property/lake-norman/material-palette-samples/a-3-bblc-graphite.jpeg"
import A4 from "../../assets/property/lake-norman/material-palette-samples/a-4-paint-gunmetal.png"
import A5 from "../../assets/property/lake-norman/material-palette-samples/a-5-bl-slate-blue.jpeg"
import A6 from "../../assets/property/lake-norman/material-palette-samples/a-6-ducalewool-robinsegg.jpeg"
import B1 from "../../assets/property/lake-norman/material-palette-samples/cerused-oak.png"
import B2 from "../../assets/property/lake-norman/material-palette-samples/b-2-ceramic-architectonics-pumice.jpg"
import B3 from "../../assets/property/lake-norman/material-palette-samples/b-3-sherwood-chestnut.jpeg"
import B4 from "../../assets/property/lake-norman/material-palette-samples/b-4-bl-cayenne.jpeg"
import B5 from "../../assets/property/lake-norman/material-palette-samples/b-5-brompton-chestnut.jpeg"
import B6 from "../../assets/property/lake-norman/material-palette-samples/b-6-lbb.jpeg"
import C1 from "../../assets/property/lake-norman/material-palette-samples/c-1-espressobamboo.jpeg"
import C2 from "../../assets/property/lake-norman/material-palette-samples/c-2-wboak.jpeg"
import C3 from "../../assets/property/lake-norman/material-palette-samples/c-3-rro-brown.jpeg"
import C4 from "../../assets/property/lake-norman/material-palette-samples/c-4-agedbronze.jpeg"
import C5 from "../../assets/property/lake-norman/material-palette-samples/c-5-walnut.jpeg"
import C6 from "../../assets/property/lake-norman/material-palette-samples/c-6-boucle-coral.jpeg"

function NormanContentPalette () {
    return (
        <div>
            <h3 className="content-heading">Color Palette</h3>
          <div className="row palette-row">
            <div className="col-md-4">
              <p className="palette-text">The overall palette direction primarily supports neutral warm tones, with varying degrees of reds, oranges, and yellows within the saturation levels of the anchoring colors of brown and grey.  This allows us to use accent pieces from side chairs to artwork to show varying levels of color saturation without standing out too much, and ensuring that the contrast of the interior elements supports and compliments the external environment rather than overtaking it.  Blue and light cool grey in select areas assist in bringing the predominant environmental view color (water and sky) to the interior.</p>
            </div>
            <div className="col-md-8">
              <img src={ColorPalette} alt="Hex Color Palette" width="100%" height="100%" />
            </div>
          </div>
          <div className="row material-intro-row">
            <div className="col-md-6">
              <p className="material-intro-text">
                The materials used for this project's selections reflect the balance in intention of each room, from casual to formal spaces and from functional and durable spaces for primary occupants to intimate relaxation spaces for guests.  The focus on reds, oranges, and yellows backboned by a stark white when needed are supported in the tones of woods, metals, stones, fabrics, and leathers being anchored primarily in the saturation level of the flooring throughout the home's dry areas, which is yet again set to compliment the onslaught of blue taken in from the water and sky of this beautiful location.  To the side you can view samples of the primary flooring and paint selections for the home, which drive the rest of the selections.
                </p>  
                <p className="material-intro-text">
                  Below is not a complete listing of materials, but a representation of how selections support the overall color direction of the property.
              </p>
            </div>
            <div className="col-md-3">
                <div className="row">
                  <img className="sub-section cerused-oak" src={CerusedOak} alt="Cerused Oak" />
                </div>
                <div className="row">
                  <p className="content-subtitle cerused-oak-subtitle"><strong>Flooring | </strong>Cerused Oak</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                <img className="sub-section chalk" src={Chalk} alt="Chalk" />
                </div>
                <div className="row">
                <p className="content-subtitle chalk-subtitle"><strong>Paint | </strong>Chalk</p>
                </div>
              </div>
          </div>
          <div className="row material-row top-material-row">
            <div className="col-md-2">
              <img className="material-img" src={A1} alt="Buff" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={A2} alt="Fog" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={A3} alt="Charcoal" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={A4} alt="Gunmetal" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={A5} alt="French Blue" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={A6} alt="Robin's Egg" height="100%" width="100%" />
            </div>
          </div>
          <div className="row caption-row">
            <div className="col-md-2">
              <p className="content-subtitle">Perennials Acrylic | Dove</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Perennials Acrylic | Fog</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Linen/Cotton | Graphite</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Paint | Gunmetal</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Linen | French Blue</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Ducale Wool | Robin's Egg</p>
            </div>
          </div>
          <div className="row material-row">
            <div className="col-md-2">
              <img className="material-img" src={B1} alt="Cerused Oak" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={B2} alt="Pumice" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={B3} alt="Chestnut (Sherwood)" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={B4} alt="Cayenne" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={B5} alt="Chestnut (Brompton)" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={B6} alt="Lacquered Burnished Brass" height="100%" width="100%" />
            </div>
          </div>
          <div className="row caption-row">
            <div className="col-md-2">
              <p className="content-subtitle">Flooring | Cerused Oak</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Ceramic Tile | Pumice</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Full-Grain Leather | Chestnut</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Linen | Cayenne</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Top-Grain Leather| Chestnut</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Metal | Burnished Brass</p>
            </div>
          </div>
          <div className="row material-row">
            <div className="col-md-2">
              <img className="material-img" src={C1} alt="Espresso Bamboo" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={C2} alt="Weathered Brown Oak" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={C3} alt="Reclaimed Brown Oak" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={C4} alt="Aged Bronze" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={C5} alt="Walnut" height="100%" width="100%" />
            </div>
            <div className="col-md-2">
              <img className="material-img" src={C6} alt="Coral" height="100%" width="100%" />
            </div>
          </div>
          <div className="row caption-row">
            <div className="col-md-2">
              <p className="content-subtitle">Wood | Espresso Bamboo</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Wood | Weathered Brown Oak</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Wood | Reclaimed Brown Oak</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Metal | Aged Bronze</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Wood | Walnut</p>
            </div>
            <div className="col-md-2">
              <p className="content-subtitle">Boucle | Coral</p>
            </div>
          </div>
        </div>
   
    )
}

export default NormanContentPalette
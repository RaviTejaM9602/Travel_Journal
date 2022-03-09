import React from "react"
import Image_1 from "../Images/MountFuji_img.png"
import location from "../Images/location-pin-solid.svg"
import title from "../Images/MountFuji.png"

export default function Travel(){
    return (<section className="travel-frame"> 
         <div className="travel-img">
          <img src={Image_1} alt="MountFuji" />
         </div>
         <div className="travel-info">
           <div className="travel-location">
              <img className="loction-logo" src={location} alt="location"/>
              <h6>JAPAN</h6>
            </div>
            <div class="travel-body">
                <img src={title} alt="title"/>
                <p className="dates">24-Jan-2021 - 28-Jan-2021</p>
                <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
             </div>
         </div>
         
      </section>)
}
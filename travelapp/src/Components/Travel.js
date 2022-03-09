import React from "react"
import location from "../Images/location-pin-solid.svg"
import title from "../Images/MountFuji.png"

export default function Travel(props){
    return (<section className="travel-frame"> 
         <div className="travel-img">
          <img src={`../Images/${props.item.title}.png`} alt="MountFuji" />
         </div>
         <div className="travel-info">
           <div className="travel-location">
              <img className="loction-logo" src={location} alt="location"/>
              <h6 className="location">{props.item.location}</h6>
              <a className="location-link" href={props.item.imageUrl}>View on Google Maps</a>
            </div>
            <div className="travel-body">
                <img src={`../Images/${props.item.titleHead}.png`} alt="title"/>
                <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
             </div>
         </div>
         
      </section>)
}
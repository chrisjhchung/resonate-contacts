import React from 'react'
import '../styles.css'
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
  } from "react-simple-maps";
import {useMediaQuery} from '@react-hook/media-query'

function Details ({contact, mobile, setSelected}) {

    const matches = useMediaQuery('(min-height: 600px) or (min-width: 1170px)')
    const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    return(
        <div className = "full-container">
        {mobile &&
            <div
                onClick = {(e)=>{e.preventDefault(); setSelected(null)}}
                className = "details" style = {{padding:"1em",display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-start", height:"3%", minHeight:"3%", marginTop:"1em", textAlign:"left"}}>
                <div style = {{backgroundColor: "#00A086", width :"10px", height :"100%", borderRadius: "16px", marginRight:"1em"}}/>
                <div style = {{color: "#00A086"}}>
                    Back
                </div>
            </div>
        }
        {contact ?
            <div className = "details-container">

                <div className = "header-container">
                    <div className = "header">
                        <img alt = "avatar" className = "avatar-big" src = {"https://source.unsplash.com/random/500x500/?face-"+contact.id}/>
                        <div>
                            <h1 style = {{fontSize: "2em"}}>{contact.name}</h1>
                            <h2 style = {{fontSize: "1em"}}>{contact.company.name} </h2>
                        </div>
                    </div>
                </div>

                <div className = "details-body">
                    <div className = "details">
                        <div style = {{width:"100%"}}>
                            <h1>Name</h1>
                            <h2>{contact.name}</h2>
                        </div>
                        <div style = {{width:"100%"}}>
                            <h1>Phone Number</h1>
                            <h2>{contact.phone}</h2>
                        </div>
                        <div style = {{width:"100%"}}>
                            <h1>Email</h1>
                            <a href = {"mailto:"+contact.email}>{contact.email}</a>
                        </div>
                        <div style = {{width:"100%"}}>
                            <h1>Website</h1>
                            <a href = {"https://www."+contact.website}>{contact.website}</a>
                        </div>
                    </div>

                    <div className = "map">
                        <ComposableMap
                        height = {!matches? 400:600}
                        projection="geoAzimuthalEqualArea"
                        projectionConfig={{
                            scale: !matches?100:150
                        }}
                        
                        >
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                            geographies.map(geo => <Geography 
                                stroke="#D6D6DA" 
                                fill = {"rgb(234, 234, 236)"} 
                                key={geo.rsmKey} 
                                geography={geo} 
                            />)
                            }
                        </Geographies>
                            <Marker coordinates={[contact.address.geo.lng,contact.address.geo.lat]}>
                            <g
                                fill="none"
                                stroke="#00A086"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="translate(-12, -24)"
                            >
                                <circle cx="12" cy="10" r="3" />
                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                            </g>
                            <text
                                textAnchor="middle"
                                y={-30}
                                style={{ fontFamily: "system-ui", fill: "#00A086" }}
                            >
                                {contact.address.city}
                            </text>
                            </Marker>
                        ))
                        </ComposableMap>
                    </div>
                </div>
            </div>
            :
            <div style = {{color:"#a8a8a8"}}>
                Click a contact on the left!
            </div>
        }
        </div>
    )
}

export default Details;
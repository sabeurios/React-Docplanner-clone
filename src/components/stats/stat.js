import React from "react"

const Stat=(props)=>{
    return <div className="two-bloc">
                <div className="stats-logo-content">
                    <img scr={props.image} srcset={props.imageset}/>
                    <h3>{props.title}</h3>
                    <p>{props.countries}</p>
                </div>
            </div>
}
export default Stat
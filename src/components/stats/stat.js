import React from "react"

const Stat=(props)=>{
    return <div className="two-bloc">{props.infoStats.map(e=>(
                                                                <div className="stats-logo-content" style={{marginTop:e.margin}}>
                                                                    <img scr={e.image} srcset={e.imageset}/>
                                                                    <h3>{e.title}</h3>
                                                                    <p>{e.countries}</p>
                                                                </div>
                                                              ))
                                      }
            </div>
}
export default Stat
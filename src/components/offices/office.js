import React from "react"

const Office=(props)=>{
 return <div className="offices">
                            {props.infosOffice.map (e=>(
                                                        <div className="office">
                                                            <img scr={e.image} srcset={e.imageset}/>
                                                            <div className="btn-office">
                                                                <p>{e.title}</p>
                                                                <button>SEE OPENINGS</button>
                                                            </div>
                                                        </div>
                                                    ))
                             }
       </div>
}
export default Office
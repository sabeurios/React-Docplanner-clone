import React from "react"

const Office=(props)=>{
 return <div class="office">
            <img scr={props.image} srcset={props.imageset}/>
            <div className="btn-office">
                <p>{props.title}</p>
                <button>SEE OPENINGS</button>
            </div>
       </div>
}
export default Office
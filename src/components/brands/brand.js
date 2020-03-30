import React from "react"

const Brand = (props) =>{
    return  <a href="#" target="">
                <div>                    
                {props.path.map(e=>( <svg width="200" height="32" viewBox="0 0 200 32"><path d={e}></path></svg>))}
                </div>
            </a>
}
export default Brand
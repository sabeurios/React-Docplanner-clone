import React from "react"

const Brand = (props) =>{
    return  <a href="#" target="">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="32" viewBox="0 0 200 32">
                    <path d={props.path}></path>
                </svg>
            </a>
}
export default Brand
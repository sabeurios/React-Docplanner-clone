import React from "react"
const NavList = (props) =>
{
    return <div className="dropdown">
                <li>
                    <a style={{color: props.clr ? '#00B3A8':'#ababab'}} href="#">{props.children}</a>
                </li>
           </div>
}

export default NavList
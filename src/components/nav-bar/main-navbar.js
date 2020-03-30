import React from "react"
import NavLogo from "./nav-logo"
import NavList from "./nav-list"
import DropDownMenu from "./dropdown-menu"

function Navbar(){
    return <div className="navbar">
                <div>
                    <NavLogo/>
                </div>
                <div>
                    <ul>
                        <NavList clr={true}>About us</NavList>
                        <NavList>Career</NavList>
                        <NavList>Departements
                            <DropDownMenu/>
                        </NavList>
                    </ul>
                </div>
           </div>
}
export default Navbar
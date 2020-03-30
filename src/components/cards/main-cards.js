import React from "react"
import Card from "./card"

function Cards (){
    return <div class="cards marged">
                <Card h2={"For patients"}
                      h1={"Find a doctor, book a visit and solve any health-related doubt"}
                      image={"https://www.docplanner.com/img/screen-marketplace@2x.png"}
                      showOption={true}
                      color={"#00CCB1"}/>
                      
                <Card h2={"For doctors"}
                      h1={"Save time managing visits and cut no-shows by half"}
                      image={"https://www.docplanner.com/img/screen-saas@2x.png"}
                      showOption={false}
                      color={"#3D83DF"}
                      margin={"1px"}/>
           </div>
}
export default Cards
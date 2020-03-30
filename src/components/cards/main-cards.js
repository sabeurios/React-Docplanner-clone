import React from "react"
import Card from "./card"

let cardList=[ { 
                  title1: "For patients",
                  title2: "Find a doctor, book a visit and solve any health-related doubt",
                  image:"https://www.docplanner.com/img/screen-marketplace@2x.png",
                  showOption: true,
                  color: "#00CCB1",
                  margin:""
            },
            { 
                  title1: "For doctors",
                  title2: "Save time managing visits and cut no-shows by half" ,
                  image: "https://www.docplanner.com/img/screen-saas@2x.png",
                  showOption: false ,
                  color: "#3D83DF",
                  margin:"1px"
                  }
            ]

function Cards (){
    return <div className="cards marged">
                <Card infoCard={cardList} />
           </div>
}
export default Cards
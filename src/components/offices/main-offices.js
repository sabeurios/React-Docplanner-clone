import React from "react"
import Office from "./office"
import Footer from "../footer/footer"

function Offices(){
    return <div className="offices marged">

                <div className="offices-header">
                    <h1>Improve the lives of millions. Change yours forever</h1>
                    <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
                </div>

                <div className="offices-slider">
                   <Office
                   image={"https://www.docplanner.com/images/warsaw.png"}
                   imageset={"https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x"}
                   title={"Warsaw"}
                   /> 
                   <Office
                   image={"create-react-app memory"}
                   imageset={"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x"}
                   title={"Barcelona"}
                   /> 
                   <Office
                   image={"https://www.docplanner.com/images/istanbul.png"}
                   imageset={"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x"}
                   title={"Istanbul"}
                   /> 
                   <Office
                   image={"https://www.docplanner.com/images/rome.png"}
                   imageset={"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x"}
                   title={"Rome"}
                   /> 
                   <Office
                   image={"https://www.docplanner.com/images/mexico-city.png"}
                   imageset={"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x"}
                   title={"Mexico City"}
                   /> 
                   <Office
                   image={"https://www.docplanner.com/images/curitiba.png"}
                   imageset={"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x"}
                   title={"Curitiba"}
                   /> 
                </div>

           </div>
}
export default Offices
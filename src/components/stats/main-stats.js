import React from "react"
import Stat from "./stat"
import logo from "../logo-doc-stats.png"

function Stats (){
    return <div className="stats marged">
                <div className="stats-text">
                    <h1>The world's
                        <br/>biggest healthcare platform</h1>
                    <p>We work from 6 offices all over the world, bringing Docplanner <br/>Group to life in almost 20 countries.</p>
                    <div className="logo-bottom">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="stats-logo">
                    <div className="two-bloc"> 
                        <Stat   image={"https://www.docplanner.com/img/flag.png"}
                                imageset={"https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"}
                                title={"Leader in 10 countries"}
                                countries={"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"}
                        />
                        <Stat   image={"https://www.docplanner.com/img/patients.png"}
                                imageset={"https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"}
                                title={"30 million unique patients"}
                                countries={"visit us every month"}
                        />
                    </div>
                    <div>
                        <Stat   image={"https://www.docplanner.com/img/visits.png"}
                                imageset={"https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"}
                                title={"1.5 million appointments"}
                                countries={"booked last month"}
                        />
                        <Stat   image={"https://www.docplanner.com/img/doctors.png"}
                                imageset={"https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"}
                                title={"2 million active doctors"}
                                countries={"trust in our solutions"}
                        />
                    </div>
                </div>
           </div>
}
export default Stats
import React from "react"
import Logo from "./logo"
import Paragraph from "./paragraph"

function Introduction (){
    return <div className="introduction marged">
                <div className="introduction-logo">
                    <Logo/>
                </div>
                <h1 className="title">
                    Making the healthcare experience more human
                </h1>
                <div className="introduction-text">
                        <Paragraph>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</Paragraph>
                        <Paragraph>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</Paragraph>
                </div>
           </div>
}
export default Introduction
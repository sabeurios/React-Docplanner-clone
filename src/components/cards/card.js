import React from "react"

const Card =(props)=>{
    return <div className="cards">
                {props.infoCard.map(e=>(
                                            <div className="service-card" style={{backgroundColor: e.color}}>
                                                <h2>{e.h2}</h2>
                                                <h1>{e.h1}</h1>
                                                <div>
                                                    <select style={{display: e.showOption ? 'block' : 'none' }} 
                                                            className="service-card-select" data-id="domain-switcher">
                                                        <option>CHOOSE COUNTRY</option>
                                                        <option value="http://www.doctoraliar.com">Argentina</option>
                                                        <option value="http://www.doctoralia.com.au">Australia</option>
                                                        <option value="http://www.doctoralia.com.br">Brazil</option>
                                                        <option value="http://www.doctoralia.cl">Chile</option>
                                                        <option value="http://www.doctoralia.co">Colombia</option>
                                                        <option value="http://www.znamylekar.cz">Czech</option>
                                                        <option value="http://www.doctoralia-fr.com">France</option>
                                                        <option value="http://www.miodottore.it">Italy</option>
                                                        <option value="http://www.doctoralia.com.mx">Mexico</option>
                                                        <option value="http://www.doctoralia.pe">Peru</option>
                                                        <option value="http://www.znanylekarz.pl">Poland</option>
                                                        <option value="http://www.doctoralia.com.pt">Portugal</option>
                                                        <option value="http://www.doctoralia.es">Spain</option>
                                                        <option value="http://www.doktortakvimi.com">Turkey</option>
                                                        <option value="http://www.doctoralia.co.uk">UK</option>
                                                    </select>
                                                    <img className="service-card-image" src={e.image} style={{marginTop: e.margin}}/>  
                                                </div>
                                             </div>
                                            )
                                        )
                }
                
            </div>
}
export default Card
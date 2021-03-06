import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobeAmericas, faClock} from '@fortawesome/free-solid-svg-icons'
export interface CardProps{
    imgSrc:string, 
    title:string, 
    description:string, 
    specialMarker?:string,
    sideContent:Array<any>,
    onClick:Function
}
function Card(props:CardProps){
    return (
        <div className="card-container d-flex align-items-center w-100" onClick={() => props.onClick()}>
            <div className="image-container">
                <img src={props.imgSrc}></img>
            </div>
            <div className="w-100">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <div className="d-flex w-100 justify-content-sbw">
                    <div>
                        {props.specialMarker ? <h5 className="special-marker">{props.specialMarker}</h5> : ''}
                    </div>
                    <div className="side-content d-flex align-items-center">
                        {
                            props.sideContent.map((sideContent, index) => {
                                return <p style={{marginLeft:'15px'}} key={index}>
                                        {
                                            sideContent.icon === 'globe' ?  <FontAwesomeIcon icon={faGlobeAmericas} style={{marginRight:"5px"}}></FontAwesomeIcon> : ''
                                        }
                                                                                {
                                            sideContent.icon === 'time' ?  <FontAwesomeIcon icon={faClock} style={{marginRight:"5px"}}></FontAwesomeIcon> : ''
                                        }
                                        {sideContent.value}
                                        </p>
                            })
                        }
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Card
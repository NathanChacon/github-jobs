import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import './SideFilter.css'
import { useState } from 'react'
function SideFilter(props: {selectedPlace:string}){
    const defaultPlaces:Array<string> = ['London', 'Amsterdam', 'New York', 'Berlin']
    const [selectedCheckbox, setSelectedCheckbox] = useState<string>(props.selectedPlace)
    const onPlaceCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCheckbox(event.target.value)
    }
    return (
        <div className="side-filter-container w-100">
            <label className="checkbox">
                <input type="checkbox"></input>
                Full time
            </label>
            <h4 style={{color:'#B9BDCF'}}>LOCATION</h4>
            <div className="location-filter-container d-flex align-items-center">
                <FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon>
                <input name="filter" placeholder="City, state, zip code or country" className="location-filter"></input>
            </div>
            <form>
                <ul className="locations-check-list">
                    {defaultPlaces.map((place) => {
                        return <li>
                                <label className="checkbox">
                                    <input
                                        name='places'
                                        type="radio"
                                        value={place}
                                        checked={place === selectedCheckbox}
                                        onChange={onPlaceCheckboxChange}
                                    />
                                    {place}
                                </label>
                            </li>
                    })}
                </ul>
            </form>

        </div>
    )
}

export default SideFilter
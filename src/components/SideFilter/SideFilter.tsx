import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import './SideFilter.css'
import { useState } from 'react'
function SideFilter(props: {selectedPlace:string, onCheckboxOfPlacesChange:Function, onFullTimeFilterChange:Function, onFilterByPlace:Function}){
    const defaultPlaces:Array<string> = ['London', 'Amsterdam', 'New York', 'Berlin']
    const [selectedCheckbox, setSelectedCheckbox] = useState<string>(props.selectedPlace)
    const [filterValue, setFilterValue] = useState('')


    const onCheckboxOfPlacesChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue('')
        setSelectedCheckbox(event.target.value)
        props.onCheckboxOfPlacesChange(event.target.value)
    }

    const onFilterChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCheckbox('')
        setFilterValue(event.target.value)
    }

    const onFullTimeFilterChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        props.onFullTimeFilterChange(event.target.checked)
    }

    const onFilterByPlace = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onFilterByPlace(filterValue)
    }

    return (
        <div className="side-filter-container w-100">
            <form onSubmit={(e) => {onFilterByPlace(e)}}>
                <label className="checkbox">
                    <input type="checkbox" onChange={(e) => {onFullTimeFilterChange(e)}}></input> 
                    Full time 
                </label>
                <h4 style={{color:'#B9BDCF'}}>LOCATION</h4>
                <div className="location-filter-container d-flex align-items-center">
                    <FontAwesomeIcon icon={faGlobeAmericas} style={{color:'#B9BDCF', marginLeft:'5px'}}></FontAwesomeIcon>
                    <input name="filter" placeholder="City, state, zip code or country" className="location-filter" value={filterValue} onChange={(e) => {onFilterChange(e)}}></input>
                </div>
                <ul className="locations-check-list">
                    {defaultPlaces.map((place, index) => {
                        return <li key={index}>
                                <label className="checkbox">
                                    <input
                                        name='places'
                                        type="radio"
                                        value={place}
                                        checked={place === selectedCheckbox}
                                        onChange={onCheckboxOfPlacesChange}
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
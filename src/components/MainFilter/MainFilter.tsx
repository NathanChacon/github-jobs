import './MainFilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useState } from 'react'

function MainFilter(props:{onFilter:Function}){
    const [filterValue, setFilterValue] = useState<string>('')
    const onFilterChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value)
    }
    const onClickFilter = () => {
        props.onFilter(filterValue)
    }

    return (
        <div className="main-filter-container d-flex align-items-center">
            <FontAwesomeIcon icon={faBriefcase} style={{color:'#B9BDCF',marginLeft:'5px'}}></FontAwesomeIcon>
            <input name="filter" placeholder="Title, companies, expertise or benefits" className="main-filter" value={filterValue} onChange={onFilterChange}></input>
            <button onClick={() => {onClickFilter()}} className="main-filter-button">Search</button>
        </div>
    )
}


export default MainFilter
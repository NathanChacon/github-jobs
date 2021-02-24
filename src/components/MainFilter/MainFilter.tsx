import './MainFilter.css'
function MainFilter(){
    return (
        <div className="main-filter-container d-flex align-items-center">
            <div className="teste"></div>
            <input name="filter" placeholder="Title, companies, expertise or benefits" className="main-filter"></input>
            <button className="main-filter-button">Search</button>
        </div>
    )
}


export default MainFilter
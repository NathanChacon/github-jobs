import './Home.css'
import MainFilter from '../../components/MainFilter/MainFilter'
import SideFilter from '../../components/SideFilter/SideFilter'
function Home(){
    const defaultPlace:string = "New York"

    const onFilterByJobProps = (string:string) => {
        console.log(string)
    }
    return (
        <section className="main-container">
            <div className="main-search-container d-flex align-items-center justify-content-center">
                <MainFilter onFilter={onFilterByJobProps}></MainFilter>
            </div>
            <div className="d-flex w-100">
                <div style={{width:'30%'}}>
                    <SideFilter selectedPlace={defaultPlace}></SideFilter>
                </div>
                <div style={{width:'70%', backgroundColor:'red'}}>
                    teste
                </div>
            </div>
        </section>
    )
}

export default Home
import './Home.css'
import MainFilter from '../../components/MainFilter/MainFilter'
function Home(){
    return (
        <section className="main-container">
            <div className="main-search-container d-flex align-items-center justify-content-center">
                <MainFilter></MainFilter>
            </div>
        </section>
    )
}

export default Home
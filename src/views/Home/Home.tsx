import './Home.css'
import axios from '../../config/axios'
import MainFilter from '../../components/MainFilter/MainFilter'
import SideFilter from '../../components/SideFilter/SideFilter'
import { useEffect } from 'react'
interface Position {
    company: string,
    company_logo: string
    company_url: string
    created_at: string
    description: string
    how_to_apply: string
    id: string
    location: string
    title: string
    type: string
    url: string   
}
function Home(){
    const defaultPlace:string = "New York"

    useEffect(() => {
        startData()
    }, [])

    const startData = async () => {
        try{
            const positions:Array<Position> = await getPositions()
            console.log(positions)
        }
        catch(error){
            console.log(error)
        }
    }

    const getPositions = ():Promise<Array<Position>> => {
        return new Promise((resolve, reject) => {
            axios.get('/positions.json')
            .then(
                (response) => {
                    response.data ? resolve(response.data) : reject('Not Found')
                },
                (error) => {
                    reject('Not Found')
                }
            )
        })
    }

    const onFilterByJobProps = (string:string) => {
        console.log(string)
    }
 
    const onCheckboxOfPlacesChange = (value:string) => {
        console.log(value)
    }

    const onFullTimeFilterChange = (value:boolean) => {
        console.log(value)
    }

    return (
        <section className="main-container">
            <div className="main-search-container d-flex align-items-center justify-content-center">
                <MainFilter onFilter={onFilterByJobProps}></MainFilter>
            </div>
            <div className="d-flex w-100">
                <div style={{width:'30%'}}>
                    <SideFilter selectedPlace={defaultPlace} onCheckboxOfPlacesChange={onCheckboxOfPlacesChange} onFullTimeFilterChange={onFullTimeFilterChange}></SideFilter>
                </div>
                <div style={{width:'70%', backgroundColor:'red'}}>
                    teste
                </div>
            </div>
        </section>
    )
}

export default Home
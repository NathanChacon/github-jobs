import './Home.css'
import axios from '../../config/axios'
import MainFilter from '../../components/MainFilter/MainFilter'
import SideFilter from '../../components/SideFilter/SideFilter'
import Card from '../../components/Card/Card'
import { useEffect, useState } from 'react'
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

interface CardProps{
    imgSrc:string, 
    title:string, 
    description:string, 
    specialMarker?:string,
    sideContent:Array<any>
}

function Home(){
    const defaultPlace:string = "New York"
    const [cards, setCards] = useState<Array<CardProps>>([])
    useEffect(() => {
        startData()
    }, [])

    const startData = async () => {
        try{
            const positions:Array<Position> = await getPositions()
            console.log(positions)
            const cards:Array<CardProps> = getCards(positions)
            setCards(cards)
        }
        catch(error){
            console.log(error)
        }
    }

    const getCards = (positions:Array<Position>):Array<CardProps> => {
       const cards:Array<CardProps> = positions.map((position) => {
            return {
                imgSrc:position.company_logo, 
                title:position.company, 
                description:position.title, 
                specialMarker:position.type === 'Full Time' ? position.type : '',
                sideContent:[{value:position.location, icon:'globe'}, {value:new Date(position.created_at).toDateString(), icon:'time'}]
            }
        })

        return cards
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
                <div style={{width:'70%'}}>
                    {cards.map((card,index) => {
                        return <Card {...card} key={index}></Card>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home
import './Home.css'
import React from 'react';
import axios from '../../config/axios'
import MainFilter from '../../components/MainFilter/MainFilter'
import SideFilter from '../../components/SideFilter/SideFilter'
import Card, {CardProps} from '../../components/Card/Card'
import {useHistory} from "react-router-dom";
import { useEffect, useState } from 'react'
import {Position} from '../../models/position'
import Loader from "react-loader-spinner";

interface Filter{
  search:string,
  location:string,
  description:string,
  full_time:string
}

function Home(){
    const history = useHistory()
    const defaultPlace:string = "New York"
    const [cards, setCards] = useState<Array<CardProps>>([])
    const [positionsFilter, setPositionsFilter] = useState<Filter>({search:'',location:'',description:'', full_time:''})
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        startData()
    }, [positionsFilter])

    const startData = async () => {
        try{
            setIsLoading(true)
            const positions:Array<Position> = await getPositions(positionsFilter)
            const cards:Array<CardProps> = getCards(positions)
            setCards(cards)
            setIsLoading(false)
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
                sideContent:[
                    {value:position.location, icon:'globe'}, 
                    {value:getFormatedDate(position.created_at), icon:'time'}],
                onClick: () => {onClickPosition(position.id)}
            }
        })

        return cards
    }
    
    const getParams = (filter:Filter):string => {
        const params = new URLSearchParams({...filter})
        let keysForDel:Array<any> = []
        params.forEach((v, k) => {
            if (v == '')
              keysForDel.push(k);
          });
          keysForDel.forEach(k => {
            params.delete(k);
          });
        return params.toString()
    }

    const getPositions = (filter:Filter):Promise<Array<Position>> => {
        const params = getParams(filter)
        return new Promise((resolve, reject) => {
            axios.get(`/positions.json?${params}`)
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
        setPositionsFilter({
            ...positionsFilter,
            search: string
        })
    }

    const onFilterByPlace = (string:string) => {
        setPositionsFilter({
            ...positionsFilter,
            location: string
        })
    }
 
    const onCheckboxOfPlacesChange = (value:string) => {
        setPositionsFilter({
            ...positionsFilter,
            location: value
        })
    }

    const onFullTimeFilterChange = (value:boolean) => {
        setPositionsFilter({
            ...positionsFilter,
            full_time: value ? 'true' :  'false'
        })
    }

    const onClickPosition = (positionId:string) => {
        history.push(`/position/${positionId}`)
    }

    const getFormatedDate = (date:string):string => {
        const formattedDate = new Date(date).toISOString().slice(0,10);
        return formattedDate
    }   

    return (
        <section className="main-container">
            <div className="main-search-container d-flex align-items-center justify-content-center">
                <MainFilter onFilter={onFilterByJobProps}></MainFilter>
            </div>
            <div className="content-wrapper d-flex w-100" style={{marginTop:'20px'}}>
                <div className="side-filter-container">
                    <SideFilter selectedPlace={defaultPlace} onCheckboxOfPlacesChange={onCheckboxOfPlacesChange} onFullTimeFilterChange={onFullTimeFilterChange} onFilterByPlace={onFilterByPlace}></SideFilter>
                </div>
                <div className="cards-container">
                    {
                        !isLoading
                        ?<React.Fragment> 
                            {cards.map((card,index) => {
                                return <Card {...card} key={index}></Card>
                            })}
                        </React.Fragment>
                        :<div className="d-flex align-items-center justify-content-center" style={{width:'100%'}}>
                            <Loader 
                                type="ThreeDots"
                                color="#1E86FF"
                                width={50}
                                height={50}
                            />
                        </div> 

                    }
                </div>
            </div>
        </section>
    )
}

export default Home
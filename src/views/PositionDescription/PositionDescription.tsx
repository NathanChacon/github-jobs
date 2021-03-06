import React, { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom";
import axios from '../../config/axios'
import {Position} from '../../models/position'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'
import Parser from 'html-react-parser';
import Loader from "react-loader-spinner";
import './PositionDescription.css'
function PositionDescription(){
    let params = useParams<{positionId:string}>();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [position, setPosition] = useState<Position>({
        company: '',
        company_logo: '',
        company_url: '',
        created_at: '',
        description: '',
        how_to_apply: '',
        id: '',
        location: '',
        title: '',
        type: '',
        url: '',
    })

    useEffect(() => {
        startData()
    }, [])

   const startData = async () => {
       setIsLoading(true)
       const position = await getPositionById(params.positionId)
       setPosition(position)
       setIsLoading(false)
   }

    const  getPositionById = (id:string):Promise<Position> => {
        return new Promise((resolve, reject) => {
              axios.get(`/positions/${id}.json`)
              .then(
                  (response) => {
                      if(response && response.data){
                        resolve(response.data)
                      }
                      else{
                        reject('NOT FOUND')
                      }
                  },
                  (error) => {
                    reject('NOT FOUND')
                  }
              )
        })
    }
    return(
        <section className="description-container d-flex">
            {
                !isLoading
                ?<React.Fragment>
                    <div className="side-info-container">
                        <Link to="/"><FontAwesomeIcon style={{marginRight:'5px'}} icon={faArrowLeft}></FontAwesomeIcon>Back to search</Link>
                        <h4>HOW TO APPLY</h4>
                        <span>
                            {Parser(position.how_to_apply)}
                        </span>
                    </div>
                    <div className="article-container">
                        <h2 className="title">
                            {position.title}
                            {position.type === "Full Time" ? <span className="full-time-marker">Full time</span>: ''}
                        </h2>
                        <div className="visual-content d-flex"> 
                            <div className="image"> 
                                <img src={position.company_logo}></img>
                            </div>
                            <div className="d-flex col justify-content-sbw"> 
                                <h5>{position.company}</h5>
                                <p><FontAwesomeIcon icon={faGlobeAmericas} style={{marginRight:'5px'}}></FontAwesomeIcon>{position.location}</p>
                            </div>
                        </div>
                        <article className="content">
                            {Parser(position.description)}
                        </article>
                    </div>
            </React.Fragment>
            :<div className="d-flex align-items-center justify-content-center" style={{width:'100%',height:'100vh'}}>
                <Loader 
                    type="ThreeDots"
                    color="#1E86FF"
                    width={100}
                    height={100}
                />
            </div> 
        }
        </section>
    )
}

export default PositionDescription
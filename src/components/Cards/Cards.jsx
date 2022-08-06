import React from 'react'
import  Card  from '../Card/Card'
import './Cards.css'
import {CardsData} from '../../Data/Data'

export const Cards = () => {
  return (
    <div className="Cards">
        {CardsData.map((card,id)=>{
            return(
                <div className='parentContainer'>
                    <Card
                    title={card.titles}
                    color={card.color}
                    barValue={card.barvalue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                    />
                
                </div>
            )
        })}
    </div>
  )
}




import React from 'react'
import cardsStyle from "./Cards.module.scss";

const Cards = ({children}) => {
  return (
    <div className='card-container d-flex flex-column align-items-start justify-content-center gap-3'>
        {children}
    </div>
  )
}

export default Cards
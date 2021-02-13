import React from 'react'
import '../card/card.styles.css'

export const Card = (props) => (
        <div className = 'card-container'>
            <h2> {props.Monster.name}</h2>
        </div>
    
)
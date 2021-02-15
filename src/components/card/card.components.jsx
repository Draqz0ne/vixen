import React from 'react'
import '../card/card.styles.css'

export const Card = (props) => (
        <div className = 'card-container'>
            <img src={`https://robohash.org/${props.Monster.id}?set=set2&size=180x180`} alt="Monster"/>
            <h2> {props.Monster.name}</h2>
            <p> {props.Monster.email}</p>
        </div>
    
)
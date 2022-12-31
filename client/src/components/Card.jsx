import React from "react";
import solid from '../../images/solid.gif'

const Card = (props) => {
    return (
        <div className="border-solid border-1 border-sky-500     text-white w-40 h-50">
            <h1 className="text-white">{props.id}</h1>
            <img src={props.image} className="w-full flex md:justify-center justify-between items-center p-4 w-60 h-55"></img>
        </div>
    )
}

export default Card;
import React from "react";
import Card from "./card";

const CardList = (props)=>{
    return(
        <div>
            {
            props.profiles.map((profile,i)=> <Card key={i} {...profile}/>)}
        </div>
    )
};

export default CardList

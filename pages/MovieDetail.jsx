import React from "react";
import {useLocation, useParams} from 'react-router-dom'

export default function MovieDetail() {
    const {title} = useParams();
    const {state} = useLocation();
    console.log(title);
    console.log(state);

    return(
        <div className = "detail" style={{display: "flex", margin: "100px",}}>
            <img src={state.domain["domain"]+state.poster_path["poster_path"]} alt={title} width="300px"></img>
            <b>{title}</b>
        </div>
    )
}
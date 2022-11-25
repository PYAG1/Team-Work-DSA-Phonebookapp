import React from "react";
import { FaTrash } from 'react-icons/fa';



export default function Main(props){
    return(
<div className="show">
    <div>
    <h3>{props.name} </h3>
    <p>{props.number}</p>
    </div>

    <button><FaTrash/></button>

</div>




    )
}
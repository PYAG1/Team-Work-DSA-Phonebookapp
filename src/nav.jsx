import React from "react";
import { FaPhoneAlt} from 'react-icons/fa';



export default function Nav(){
    return(
        <header className="header flex  border-b-2" >
            <div className="flex items-center p-3">
            <FaPhoneAlt className=" text-lg "/> <h1 className=" pl-2 text-2xl">Phone<span className=" text-gold">Book</span></h1>
</div>


        </header>


    )
}
import React from "react";
import { FaTrash } from "react-icons/fa";
import BasicPopover from "./edit";


      

export default function Main({props, deleteFunction}) {

  return (
    <div className="show mb-2">
      <div>
        <h3>{props.name} </h3>
        <p>{props.number}</p>
      </div>
      <button>
      <BasicPopover setup={() => deleteFunction(props.id)}/>
      </button>
    </div>
  );
}

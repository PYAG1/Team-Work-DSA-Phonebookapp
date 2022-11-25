
import React from "react";
import Main from "./other";


export default function App(){


const [formse,setforms]= React.useState({
name:"",
number:"",

});




function changeV(event){
setforms(prev => {
  return {
    ...prev, [event.target.name] : event.target.value
  }
})
};


const [number, setnumber]= React.useState([]);


console.log(number)



function AddBtn(){
  const Name=document.getElementById("name");
  Name.value= ''
  setnumber(prev =>{
    if(formse.number.length != 10){
      console.log("Wrong Address")
      return[...prev]
    }
    else{
    
      return [ ...prev , formse]
    
      
    }
  }) 
  
   

}








const value=number.map(function(item){
return <Main 
{...item} 
/>
})


function Erase(event){
    
}





return(
  <div>
    <form>
      <label htmlFor="name">Name</label>
      <br></br>
      <input type="text" id="name" name="name" value={formse.name} placeholder="Enter your name" onChange={changeV} />

<br></br>
      <label htmlFor="number">number</label>
      <br></br>
      <input type="number" id="number" name="number" placeholder="Enter your number" value={formse.number} onChange={changeV}/>
      <p></p>
      
      
    </form>
<button onClick={AddBtn}>Add </button>
{value}


  </div>
)



}
<<<<<<< HEAD
import React from "react";
import Main from "./other";


export default function App(){
const [formse,setforms]= React.useState({
name:"",
number:""
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



=======

function App() {
  return (
    <div>
      hello
    </div>
  );
>>>>>>> b857cba1c10c8d60f6aa67e6074d6c0a719d1dbb
}


const value=number.map(function(item){
return <Main 
{...item}
/>
})





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
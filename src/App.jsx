import React, {useState} from "react";
import Main from "./other";

export default function App() {
  // to keep track of name input
  const [contactName, setName] = useState('')

  // keep track of number input
  const [contactNumber, setNumber] = useState('')
  const [contactList, setContactList] = useState([]);

  //Base Code
  // function changeV(event) {
  //   setforms((prev) => {
  //     return {
  //       ...prev,
  //       [event.target.name]: event.target.value,
  //     };
  //   })
  // }

  // const [number, setnumber] = React.useState([]);

  // console.log(number);

  // function AddBtn() {
  //   const Name = document.getElementById("name");
  //   Name.value = "";
  //   setnumber((prev) => {
  //     if (formse.number.length != 10) {
  //       console.log("Wrong Address");
  //       return [...prev];
  //     } else {
  //       return [...prev, formse];
  //     }
  //   });
  // }
function addContact(){
  if(contactName && contactNumber.length === 10){
    setContactList(prev => {
      return [...prev, {
        id: Math.floor(Math.random() * 100000),
        name: contactName, 
        number: contactNumber
      }]
    })
    console.log(contactList);
    setName('')
    setNumber('')
  }
}
//base code
  // const value = contactList.map(function (item) {
  //   return <Main {...item} />;
  // });

  function Erase(id) {
  
    setContactList(prev => {
      return contactList.filter(itm => {
        return itm.id !== id
      })
    })
  }



  return (
    <div className="p-8" >
      <form  className="form" onSubmit={(e) =>{
        e.preventDefault()
        addContact()
      }}>
        <div>
        <label htmlFor="name"  className=" pb-4 text-xl font-bold ">Name</label>
        <br></br>
        <input
          type="text"
          id="name"
          name="name"
          value={contactName}
          placeholder="Enter your name"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        </div>

        <br></br>

        <div>

        <label htmlFor="number" className=" text-xl font-bold ">Number</label>
        <br></br>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="Enter your number"
          value={contactNumber}
          onChange={(e) => setNumber(e.currentTarget.value)}
        />
        </div>
        <br></br>
        <input type="submit" value="Add" />
      </form>


      <div className=" search pt-10">
        <div className=" py-4">
          <input type="text"
          name="search"
          id="search"
          placeholder='search'
          className=" h-10"
         
          />
        </div>
      {
        contactList.length !== 0 && contactList.map((itm, inx) => {
          return(
           <Main props={itm} key={inx} deleteFunction={Erase}/>
          )
        })
      }
      </div>
    </div>
  );
}

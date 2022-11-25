import React, {useState} from "react";
import Main from "./other";

export default function App() {
  // to keep track of name input
  const [contactName, setName] = useState('')

  // keep track of number input
  const [contactNumber, setNumber] = useState('')
  const [contactList, setContactList] = useState([]);

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
  if(contactName && contactNumber){
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
    <div>
      <form onSubmit={(e) =>{
        e.preventDefault()
        addContact()
      }}>
        <label htmlFor="name">Name</label>
        <br></br>
        <input
          type="text"
          id="name"
          name="name"
          value={contactName}
          placeholder="Enter your name"
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <br></br>
        <label htmlFor="number">number</label>
        <br></br>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="Enter your number"
          value={contactNumber}
          onChange={(e) => setNumber(e.currentTarget.value)}
        />
        <input type="submit" value="Add" />
      </form>
      {
        contactList.length !== 0 && contactList.map((itm, inx) => {
          return(
           <Main props={itm} key={inx} deleteFunction={Erase}/>
          )
        })
      }
    </div>
  );
}

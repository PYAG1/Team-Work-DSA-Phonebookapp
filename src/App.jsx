import React, { useState } from "react";
import Main from "./other";
import { Stack,Alert } from "@mui/material";

export default function App() {
  // to keep track of name input
  const [contactName, setName] = useState("");
  // query
  const [query, setQuery] = useState("");
  // keep track of number input
  const [contactNumber, setNumber] = useState("");
  // 
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

  const [show,setshow]= React.useState(false)
  
  function addContact() {
    // && contactNumber.length === 10
    if (contactName && contactNumber.length === 10) {
      setshow(false)
      setContactList((prev) => {
        return [
          ...prev,
          {
            id: Math.floor(Math.random() * 100000),
            name: contactName,
            number: contactNumber,
          },
        ];
      });
      console.log(contactList);
      setName("");
      setNumber("");
    }
    else {
      setshow(true)
     
      
    }
  }

const dis= show === true ?  "contents"  : "none"

console.log(dis);
  //base code
  // const value = contactList.map(function (item) {
  //   return <Main {...item} />;
  // });

  function Erase(id) {
    setContactList((prev) => {
      return contactList.filter((itm) => {
        return itm.id !== id;
      });
    });
  }

  return (
    <div className="container">
    <div className=" maxscreen p-12">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addContact();
        }}
      >
        <div>
          <label htmlFor="name" className=" pb-4 text-xl font-bold ">
            Name
          </label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            value={contactName}
            placeholder="Enter your name"
            onChange={(e) => setName(e.currentTarget.value)}
            className={"bg-slate-50 rounded outline-none w-full px-2 py-2"}
          />
        </div>

        <br></br>

        <div>
          <label htmlFor="number" className=" text-xl font-bold ">
            Number
          </label>
          <br></br>
          <input
            type="number"
            id="number"
            name="number"
            min={0}
            placeholder="Enter your number"
            value={contactNumber}
            className={"bg-slate-50 rounded outline-none w-full px-2 py-2"}
            onChange={(e) => setNumber(e.currentTarget.value)}
         
          />
               <Stack sx={{ width: "100%" }} spacing={2} style={{display:`${dis}`}}>
            <Alert severity="error">Number must be 10 digits</Alert>
          </Stack>
          
        </div>
        <br></br>
        <input
          type="submit"
          value="Add Contact"
          className="bg-slate-100 py-2 rounded-xl hover:bg-black hover:text-white duration-500"
        />
        <br></br>
        
        <small className=" text-center">
               <h3>By Papa Yaw and Frimpong</h3>
            </small>
      </form>

      <div className=" search pt-10">
        <div className=" py-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search"
            className=" h-10"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {contactList.length !== 0 &&
          contactList
            .filter((contact) => {
              if (query === "") {
                return contact;
              } else if (contact.name.toLowerCase().includes(query.toLowerCase()) ||contact.number.includes(query)){
                return contact
              }
            })
            .map((itm, inx) => {
              return <Main props={itm} key={inx} deleteFunction={Erase} />;
            })}
      </div>
    </div>
    
 
    </div>

  );
}

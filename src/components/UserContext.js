import {  createContext, useEffect } from "react";
import React, { useRef, useState } from 'react';
export const userContext=createContext();


export default function UserContext(props){
  
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [identity, setIdentity] = useState('')
    const [birth, setBirth] = useState(new Date())
    const [HMO, setHMO] = useState(0)
    const [gender, setGender] = useState(0);
   
    var childArr=[{name:'',birth:'',id:''}]
    return(
   <userContext.Provider value={{firstName,setFirstName,lastName,setLastName,identity,
   setIdentity,birth,setBirth,HMO,setHMO,gender,setGender,childArr}}>
    {props.children}
   </userContext.Provider>
    )
}
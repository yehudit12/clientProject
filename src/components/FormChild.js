import axios from 'axios';
import react, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { userContext } from './UserContext';


export default function FormChild(props) {
    
    const index = props.index;
    var x = props.x
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const arrCtx = useContext(userContext);



    return (
         <div>
            
                <input input placeholder="שם פרטי" required type="text" onBlur={(e) => {
                 arrCtx.childArr[index].name = e.target.value }} />
                <input placeholder="מספר זהות" required type="text" minLength="9" pattern="[0-9]*" maxLength="9" onBlur={(e) =>
                    arrCtx.childArr[index].id = e.target.value} />
                <input placeholder="תאריך לידה" max={new Date().toISOString().substr(0, 10)} required type="date"
                    onBlur={(e) => { arrCtx.childArr[index].birth = e.target.value }} />
            </div>
    );
}
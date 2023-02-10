import react from 'react'
import { Route, Router } from 'react-router'
import { Routes } from 'react-router-dom'
import InstructionPage from './InstructionPage'
import FormChild from './FormChild'
import FormUser from './FormUser'
import UserContext from './UserContext'
import Succeed from './Succeed'
import Excel from './Excel'

export default function Routers() {
        
    return (
        <div>
        <Routes>        
            <Route path='/' element={<UserContext><FormUser/></UserContext>}></Route>
            <Route path='/instructions' element={<UserContext><InstructionPage /></UserContext>} />
            <Route path='/child' element={<UserContext><FormChild /></UserContext>} />
            <Route path='/form' element={<UserContext><FormUser/></UserContext>} />
            <Route path='/success' element={<UserContext><Succeed/></UserContext>}/>
            <Route path='/Excel' element={<UserContext><Excel/></UserContext>}/>
        </Routes>
        </div>
    )
}
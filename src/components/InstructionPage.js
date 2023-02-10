import react, { useContext } from 'react'
import { useReducer } from 'react'
import { useNavigate } from 'react-router'
import { userContext } from './UserContext'

export default function InstructionPage(){
const ctx=useContext(userContext)
const navigate=useNavigate()
return (
    <div>
      <h1>  {ctx.firstName}  {ctx.lastName} שלום </h1> 
      <h2>אנו שמחים שבחרת באתר שלנו</h2>
    <h3>בעת מילוי הטופס יש להקפיד להזין פרטים מדויקים ועדכניים ע"פ הנדרש</h3>
    <h3>בעת סיום הזנת הפרטים מומלץ לעבור עליהם שוב ולאחר וידוא תקינות ללחוץ על כפתור השליחה</h3>
   <h2>!!!!בהצלחה</h2>
      <button  class="btn btn-secondary btn-sm" style={{backgroundColor:"rgb(52, 109, 165)"}} onClick={()=>{navigate(`/form`)}}>למילוי הטופס</button>
    </div>
)
}
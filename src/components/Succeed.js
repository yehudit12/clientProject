import { useNavigate } from "react-router"
import Excel from "./Excel";

export default function Succeed() {
    const navigate = useNavigate();
    return (
        <div>
            <div> <h1>!!!!!!!הפרטים נכנסו למערכת בהצלחה</h1></div>
             <Excel />
        </div>
    )
}

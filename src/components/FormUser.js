import axios from 'axios';
import react, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import InstructionPage from './InstructionPage';
import Routers from './Routers';
import FormChild from './FormChild';
import { userContext } from './UserContext';
import { useNavigate } from 'react-router';
import FileSaver, { saveAs } from 'file-saver';
import { utils, write, writeFile } from 'xlsx';
import XLSX from 'sheetjs-style'
import Excel from './Excel';



export default function FormUser() {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const ctx = useContext(userContext);
    const [isShow, setIsShow] = useState(false)
    const [hasChild, setHasChild] = useState()
    const [isS, setIsS] = useState(false)
    var userId;
    var s = false;


    async function onSubmit(data) {
        console.log(data);
        console.log(JSON.stringify(ctx))
        console.log(new Date(ctx.birth))
        addUser();
    };

    async function addUser() {
        axios.post('https://localhost:44381/api/User', {
            IdentityNumber: ctx.identity,
            FirstName: ctx.firstName, LastName: ctx.lastName, DateOfBirth: new Date(ctx.birth).toISOString(), Kind: parseInt(ctx.gender) - 1, HMO: parseInt(ctx.HMO) - 1
        }).then(async response => {
            await axios.get('https://localhost:44381/api/User').then(async data => {
                let currentUser = data.data.find(users => users.identityNumber === ctx.identity);
                userId = currentUser.userId
            })
        }).then(async response => {
            ctx.childArr.forEach(element => {
                console.log("77777777777777", userId);
                axios.post('https://localhost:44381/api/Children', { IdentityNumber: element.id, Name: element.name, DateOfBirth: new Date(element.birth).toISOString(), IdParent: userId })
            });

        });
        navigate('/success')
    }

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    const fileExtention = 'xlsx';
    const exportToExcel = async () => {
        const ws = utils.json_to_sheet(JSON.stringify(ctx))
        const wb = { sheets: { data: 'ws' }, sheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'arrary' })
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, "fileName" + fileExtention);
    }
    return (

        <div>
            <div > <button class="btn btn-secondary" style={{ backgroundColor: "rgb(52, 109, 165)" }} onClick={() => { navigate(`/instructions`) }}>לדף ההנחיות</button></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h3>your details:</h3>
                    <div class="mb-3" style={{ width: "40%", margin: "0 auto" }}>
                        <label class="form-label">שם פרטי</label>
                        <input class="form-control" defaultValue={localStorage.getItem("firstName")} placeholder="שם פרטי" required type="text" value={ctx.firstName}{...register("ctx.firstName", { required: true })} onChange={(e) => { ctx.setFirstName(e.target.value); localStorage.setItem("firstName ", e.target.value) }} />
                    </div>
                    <div class="mb-3" style={{ width: "40%", margin: "0 auto" }}>
                        <label class="form-label">שם משפחה</label>
                        <input class='card form-control' defaultValue={localStorage.getItem("lastName")} placeholder="שם משפחה" required type="text" value={ctx.lastName} {...register("ctx.lastName", { required: true })} onChange={(e) => { ctx.setLastName(e.target.value); localStorage.setItem("lastName", e.target.value) }} />
                    </div>
                    <div class="mb-3" style={{ width: "40%", margin: "0 auto" }}>
                        <label class="form-label">תעודת זהות</label>
                        <input class="form-control" placeholder="מספר זהות" defaultValue={localStorage.getItem("identity")} required type="text" value={ctx.identity} minLength="9" pattern="[0-9]*" maxLength="9" {...register("ctx.identity", { required: true })} onChange={(e) => { ctx.setIdentity(e.target.value); localStorage.setItem("identity", e.target.value) }} /></div>

                    <div class="mb-3" style={{ width: "40%", margin: "0 auto" }}>
                        <label class="form-label">תאריך לידה</label>
                        <input class="form-control" value={ctx.birth} placeholder="תאריך לידה" max={new Date().toISOString().substr(0, 10)} defaultValue={localStorage.getItem("birth")} required type="date"  {...register("ctx.dateOfBirth", { required: true })} onChange={(e) => { ctx.setBirth(e.target.value); localStorage.setItem("birth", e.target.value) }} />
                    </div>
                    <div class="mb-3" style={{ width: "40%", margin: "0 auto" }}>
                        <label class="form-label">קופת חולים</label>
                        <select class="form-select" required defaultValue={localStorage.getItem("HMO")} {...register("ctx.HMO", { required: true })} value={ctx.HMO} onChange={(e) => { ctx.setHMO(e.target.value); localStorage.setItem("HMO", e.target.value) }} >
                            <option disabled selected value={0} >קופת חולים</option>
                            <option value={4}>מאוחדת</option>
                            <option value={2}>מכבי</option>
                            <option value={1}>כללית</option>
                            <option value={3}>לאומית</option>
                        </select>
                    </div>
                    <div class="mb-3" style={{ width: "40%", margin: "0 auto" }}>
                        <label class="form-label">מין</label>
                        <select class="form-select" required {...register("ctx.gender", { required: true })} value={ctx.gender} defaultValue={localStorage.getItem("gender")} onChange={(e) => { ctx.setGender(e.target.value); localStorage.setItem("gender", e.target.value) }}>
                            <option disabled selected value={0} > מין</option>
                            <option value={1}>זכר</option>
                            <option value={2}>נקבה</option>
                        </select>
                    </div>
                    <div>
                        <h4>your children details:</h4> </div>
                    <div class="input-group-text" style={{ width: "40%", margin: "0 auto", backgroundColor: "white", color: "white" }}>
                        <label style={{ color: "rgb(52, 109, 165)" }}>you have children?</label>
                        <input class="form-check-input mt-0" aria-label="Checkbox for following text input"
                            type="checkbox"
                            onChange={(e) => { hasChild ? setHasChild(false) : setHasChild(true); s = true }}
                        /></div>
                    {hasChild && <div >
                        <label>enter your children details:</label>
                        <br />

                        {ctx.childArr.length &&

                            ctx.childArr.map((x, index) =>


                                <div key={index}>
                                    {
                                        <FormChild key={index} index={index} x={x} isNew={true} />}
                                </div>)
                        }


                        <button class="btn btn-secondary btn-sm" onClick={() => { ctx.childArr.push({ name: '', birth: '', id: '' }); setIsShow(isShow ? false : true); console.log(ctx.childArr) }}>להכנסת ילד נוסף</button>
                    </div>}
                </div>

                <div class="mb-3 submit" >
                    <input type="submit" style={{ backgroundColor: "rgb(52, 109, 165)", right: " 30px" }} class="btn btn-primary btn-lg" />
                </div>
            </form >
        </div >
    );
}

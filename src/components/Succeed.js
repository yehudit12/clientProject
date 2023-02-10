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
// import { ExcelExport } from '@progress/kendo-react-excel-export';
// // import ExcelExport from 'export-xlsx';
// // import * as React from "react";
// import react, { useContext, useRef } from 'react'
// import * as ReactDOM from "react-dom";
// import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
// import { userContext } from './UserContext';
// export default function Excel() {
//   const _export = useRef(null)
//   const ctt=useContext(userContext);
//   const excelExport = () => {
//     if (_export.current !== null) {
//       _export.current.save();
//     }
//  //var pp=JSON.parse(p);
//   };
//   return (
//     <ExcelExport data={JSON.parse('['+JSON.stringify(ctt)+']')} ref={_export}>
//         {console.log(JSON.parse('['+JSON.stringify(ctt)+']'))}
//       <Grid
//         data={JSON.parse(('['+JSON.stringify(ctt)+']'))}
//         style={{
//           height: "420px",
//         }}
//       >
//         <GridToolbar>
//           <button
//             title="Export Excel"
//             className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
//             onClick={excelExport}
//           >
//             Export to Excel </button>
//         </GridToolbar>
//         <GridColumn field="firstName" title="name" width="50px" />
//         <GridColumn field="lastName" title="lastName" width="350px" />
//         <GridColumn field="identity" title="identity" />
//         <GridColumn field="birth" title="date of birth" />
//         <GridColumn field="HMO" title="HMO" />
//         <GridColumn field="gender" title="gender" />
//       </Grid>
//     </ExcelExport>
//   );

// };

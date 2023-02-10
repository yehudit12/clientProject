import { ExcelExport } from '@progress/kendo-react-excel-export';
import react, { useContext, useRef } from 'react'
import * as ReactDOM from "react-dom";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { userContext } from './UserContext';
export default function Excel() {
  const _export = useRef(null)
  const ctt=useContext(userContext);
  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };
  return (
    <ExcelExport data={JSON.parse('['+JSON.stringify(ctt)+']')} ref={_export}>
        {console.log(JSON.parse('['+JSON.stringify(ctt)+']'))}
      <Grid
        data={JSON.parse(('['+JSON.stringify(ctt)+']'))}
        style={{
          height: "420px",
        }}
      >
        <GridToolbar>
           <button
     
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={excelExport}
            class="btn btn-secondary" style={{ backgroundColor: "rgb(52, 109, 165)" }}>
            Export to Excel </button>
        </GridToolbar>
        <GridColumn field="firstName" title="name" width="50px" />
        <GridColumn field="lastName" title="lastName" width="350px" />
        <GridColumn field="identity" title="identity" />
        <GridColumn field="birth" title="date of birth" />
        <GridColumn field="HMO" title="HMO" />
        <GridColumn field="gender" title="gender" />
        <GridColumn field="childArr" title="children" />
      </Grid>
    </ExcelExport>
  );
};

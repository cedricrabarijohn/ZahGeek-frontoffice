import { Route, Routes } from "react-router-dom";
import CustomizedTable from "../../../components/customized-components/customized-table/CustomizedTable";
import "./requests.css";

const Requests = () => {
  return (
    <div style={{width: '50%'}}>
        <h1 style={{marginBottom: 40}}>Demandes en cours</h1>
        <CustomizedTable />
    </div>
  );
};
export default Requests;

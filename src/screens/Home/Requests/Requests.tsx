import CustomizedTable from "../../../components/customized-components/customized-table/CustomizedTable";
import "./requests.css";
import { QRCodeSVG } from "qrcode.react";

const Requests = () => {
  return (
    <div className="requests-wrapper">
      <div className="requests-title">
        <h1>Liste de vos demandes</h1>
        <div style={{color: 'gray'}}>
        Ici seront listés les demandes que vous avez fait.
      </div>
      </div>
      <CustomizedTable />
    </div>
  );
};
export default Requests;

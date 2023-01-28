import "./not-found.css";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";

const NotFound = () => {
  const makePDF = async () => {
    const qrCodeCanvas = document.querySelector("canvas");
    if (!qrCodeCanvas) return;
    const qrCodeDataUri = qrCodeCanvas.toDataURL("image/jpg", 0);
    return new Promise(async (resolve) => {
      const doc = new jsPDF();
      doc.addImage(qrCodeDataUri, "PNG", 20, 40, 50, 50);
      doc.text("99minutos - TAG: 00033300", 20, 30);
      resolve(doc.save("el pdf"));
    });
  };
  return (
    <div className="not-found">
      <>404 Not found</>
      {/* <h1>Hello CodeSandbox</h1> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
      {/* <QRCodeCanvas id="" value="https://reactjs.org/" />, */}
      {/* <button onClick={() => makePDF()}>imprimir</button> */}
    </div>
  );
};
export default NotFound;

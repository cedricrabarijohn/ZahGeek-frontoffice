import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import { pdf } from "@react-pdf/renderer";
import MyDocument from "../../../screens/Home/MyDocument/MyDocument";
import { saveAs } from "file-saver";

function createData(
  name: string,
  calories: number,
  fat: number,
  protein: string
) {
  return {
    name,
    calories,
    fat,
    protein,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const handle_download_file = () => {
    pdf(<MyDocument />)
      .toBlob()
      .then((blob) => {
        saveAs(blob, "Document");
      });
  };
  return (
    <React.Fragment>
      <TableRow
        style={{
          backgroundColor: "#202020",
          border: "4px solid #202020",
        }}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ color: "white" }} component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell style={{ color: "white" }} align="right">
          {row.calories}
        </TableCell>
        <TableCell style={{ color: "white" }} align="right">
          {row.fat}
        </TableCell>
        <TableCell style={{ color: "white" }} align="right">
          {row.protein}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse
            style={{ color: "white" }}
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <div
              style={{
                textAlign: "center",
                color: "grey",
                paddingBottom: 20,
              }}
            >
              Date de demande : 27 janvier 2023
            </div>
            <div style={{ color: "grey", textAlign: "center" }}>
              <Button
                onClick={() => {
                  handle_download_file();
                }}
              >
                Telecharger le fichier
              </Button>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Certificat de residence", 2, 600, "En cours de traitement"),
  createData("Acte de naissance", 1, 500, "En cours de traitement"),
  createData("Bulletin de naissance", 4, 1200, "En cours de traitement"),
  createData("Impots non payes", 1, 200, "En cours de traitement"),
  createData("Impots non payes", 1, 200, "En cours de traitement"),
];

export default function CustomizedTable() {
  const [headers, set_headers]: [Array<string>, any] = React.useState([
    "Dossier",
    "Priorite",
    "Prix(Ar)",
    "Etat",
  ]);

  React.useEffect(() => {
    // set_headers()
  }, []);

  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "#202020",
        border: "0px",
        maxWidth: "90vw",
      }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {headers &&
              headers.map((header, key) => (
                <TableCell style={{ color: "grey" }} align={key === 0 ? "left" : "right"}>
                  {header}
                </TableCell>
              ))}
            {/* <TableCell style={{ color: "grey" }}>Dossier</TableCell>
            <TableCell style={{ color: "grey" }} align="right">
              Priorite
            </TableCell>
            <TableCell style={{ color: "grey" }} align="right">
              Prix (Ar)
            </TableCell>
            <TableCell style={{ color: "grey" }} align="right">
              Etat
            </TableCell> */}
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <Row key={key} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

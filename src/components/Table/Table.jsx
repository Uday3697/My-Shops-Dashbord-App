import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css"
import { makeStyles } from "@mui/material";


function createData(name,trackingId,date,status,details) {
  return { name, trackingId, date, status ,details};
}

const rows = [
  createData("Lasania Chicken Fri", 18988424, "2 March 2022", "Approved"),
  createData("ig Baza Bang", 1445525, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 254525, "2 March 2022", "Approved"),
  createData("Cupcake", 2124504, "2 March 2022", "Deliverd"),
];


export default function BasicTable() {
  const makeStyles=(status)=>{
    if(status==='Approved'){
      return {
        background:"#79f0f0448",
        color:'#22910787'
      }
    }
    else if(status==='Pending'){
      return {
        background:"#ffadad8f",
        color:'red',
      }
    }
    else{
      return {
        background: '#59bfff',
        color:" red",
      }
    }
  };
  return (
    <div className="Table">
      <h3>Recent Order</h3>

      <TableContainer component={Paper}
      style={{boxShadow:"0px 13px 20px 0px #80808029 "}}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking Id</TableCell>
              <TableCell align="left">date</TableCell>
              <TableCell align="left">status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status-list" styles={makeStyles(row.status)}>{row.status} </span>
                </TableCell>
                <TableCell align="left" className="Details">{row.details}</TableCell>
    
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

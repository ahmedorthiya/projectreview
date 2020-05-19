import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default props=>{
  const classes = useStyles();

  return(
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor:props.color ? props.color : undefined}}>
          <TableRow>
            <TableCell>#</TableCell>
            {
              props.headings.map((heading,index)=>(
                <TableCell key={index} >{heading}</TableCell>

              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row,index) => (
            <TableRow  key={index+12}>
              <TableCell  >{index+1}</TableCell>
              {
                Object.keys(row).map((item,index)=>(
                  <TableCell key={index+2} >{row[item]}</TableCell>
                ))
              }



             </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );

}

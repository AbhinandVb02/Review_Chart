import React, { useContext, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { newcontext } from '../App';
import { Button } from '@mui/material';


function TableData() {

  const [FiltredData] = useContext(newcontext)



  return (
    <div className='tablemain'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell align="center"><b>Price</b></TableCell>
              <TableCell align="right"><b>Rating</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FiltredData.map((item) => {
              return (
                <TableRow >
                  <TableCell component="th" scope="row">{item.title}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
                  <TableCell align="right">{item.rating}</TableCell>
                </TableRow>
              )
            })}

          </TableBody>
        </Table>
      </TableContainer>

      <div style={{textAlign:'center',marginTop:'20px'}}>
      </div>

    </div>
  )
}

export default TableData
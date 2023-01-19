import { React, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Sidebar } from "../../components/sidebar/Sidebar";

const Home = () => {


const [delegate, setDelegate] = useState("اشرف");
const [supervisor, setSupervisor] = useState("قيس");

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'gray',
    color: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(name, calories, fat, carbs, protein, six, seven) {
  return { name, calories, fat, carbs, protein, six, seven };
}

const rows = [
  createData('بلدنا للتجاره', '	موجود', 'asdasd')
];



return (


  <Box sx={{ display: 'flex' }}>
    {/* <nav></nav> */}


    <Box
      component="main"
      sx={{ flexGrow: 1, p: 1, direction: 'rtl' }}
    >

      {/* <AppBar position="fixed" sx={{ bgcolor: "black", zIndex: (theme) => theme.zIndex.drawer + 1 }}>

          <Toolbar>
            <Typography variant="h6" >
              Clipped drawer
            </Typography>
          </Toolbar>

        </AppBar> */}

      <Toolbar />
      <Typography sx={{ lineHeight: 0.3, fontWeight: 'bold' }} >
        <p>التاريخ: {date}</p>
        <p>المندوب: {delegate}</p>
        <p>المشرف: {supervisor}</p>
      </Typography>

      <content>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead >
              <TableRow>
                <StyledTableCell align="right">اسم الزبون </StyledTableCell>
                <StyledTableCell align="right">الزيارة المندوب</StyledTableCell>
                <StyledTableCell align="right">معدل الهدف الشهري </StyledTableCell>
                <StyledTableCell align="right">ملاحظات المندوب</StyledTableCell>
                <StyledTableCell align="right">زيارة المشرف</StyledTableCell>
                <StyledTableCell align="right">ملاحظات المشرف</StyledTableCell>
                <StyledTableCell align="right">ملاحظات مدير المبيعات</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" align="right"><input type="text" value={row.name}/></StyledTableCell>
                  <StyledTableCell align="right"><input type="text" value={row.calories}/></StyledTableCell>
                  <StyledTableCell align="right"><input type="text" value={row.fat}/></StyledTableCell>
                  <StyledTableCell align="right"><input type="text" value={row.carbs}/></StyledTableCell>
                  <StyledTableCell align="right"><input type="text" value={row.protein}/></StyledTableCell>
                  <StyledTableCell align="right"><input type="text" value={row.six}/></StyledTableCell>
                  <StyledTableCell align="right"><input type="text" value={row.seven}/></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </content>
    </Box>
    <Sidebar />
  </Box>

);
};

export default Home;

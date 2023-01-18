import "./home.css";
import {React,useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography  from '@mui/material/Typography';

const Home = () => {
  
  const [delegate, setDelegate] = useState("اشرف");
  const [supervisor, setSupervisor] = useState("قيس");

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  
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
    return { name, calories, fat, carbs, protein, six, seven};
  }
  
  const rows = [
    createData('بلدنا للتجاره ', 'موجود'),
    
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3 ,561 , 561),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  


  return (
    
    <div className="home">

      {/* <nav></nav> */}

    <Typography sx={{ lineHeight: 0.3 }} variant="h15" component="h3">
    <p>التاريخ: {date}</p>
    <p>المندوب: {delegate}</p>
    <p>المشرف: {supervisor}</p>
    </Typography>;

    
    <body>
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
              <StyledTableCell component="th" scope="row" align="right">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.six}</StyledTableCell>
              <StyledTableCell align="right">{row.seven}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </body>
    </div>
  );
};

export default Home;

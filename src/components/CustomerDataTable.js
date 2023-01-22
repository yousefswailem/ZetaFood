import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTableCell-root': {
            left: 'inherit!important',
            right: '1.75rem !important',
            transformOrigin: 'right !important',
            direction: "rtl",
        },
    },
}))
const columns = [
    { id: 'تعديل', label: ' تعديل/حذف', minWidth: 100, align: 'right',},
    { id: 'المبيعات', label: 'اسم مسؤول المبيعات', minWidth: 100,align: 'right',},
    { id: 'الزبون', label: 'اسم الزبون', minWidth: 100,align: 'right',},
    { id: 'رقم', label: 'رقم', minWidth: 20,align: 'right', },
];
//Example on data to be removed and replaced with data from backend
const rows = [
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
    { رقم: 10, الزبون: 'بلدنا للتجارة العامة', المبيعات: "يوسف" },
];
const CustomerDataTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(100);
    const classes = useStyles();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', margin: "10px" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody dir="rtl">
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell style={{ align: "right" }} key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default CustomerDataTable
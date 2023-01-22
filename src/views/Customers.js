import { Paper, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import CustomerDataTable from '../components/CustomerDataTable'
import CustomerForm from '../components/CustomerForm'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(3),
        padding: theme.spacing(4),
        backgroundColor: '#326370',
        borderRadius: '10px',
    },
}))

const Customers = () => {
    const classes = useStyles();
    return (
        <>
            {/* To be added */}
            {/* <Navbar/> */}
            <Grid container>
                <Grid item xs={8}>
                    <CustomerDataTable />
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.pageContent}>
                        <CustomerForm />
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Customers
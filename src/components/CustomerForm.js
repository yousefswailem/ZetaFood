import { Grid, makeStyles, TextField, InputLabel, Select, FormControl, Button } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(2),
            direction: "rtl"
        },
        '& .MuiTextField-root': {
            backgroundColor: 'white',
        },
        '& .MuiInputBase-root': {
            backgroundColor: 'white',
        },
        '& .MuiFormLabel-root': {
            left: 'inherit!important',
            right: '1.75rem !important',
            transformOrigin: 'right !important',
        },
        '& .MuiSvgIcon-root': {
            position: 'left'
        }
    },
}))

const CustomerForm = () => {
    const [values, setValues] = useState("");
    const classes = useStyles();
    return (
        <form className={classes.root} >

            <Grid container>
                <Grid item dir="rtl">
                    <p style={{ color: 'white' }}>إضافة زبون</p>
                    <hr />
                    <TextField
                        varient="outlined"
                        label="اسم المستخدم"
                        id="outlined-basic"
                        required
                    />
                    <FormControl variant="outlined" dir="rtl" className={classes.root}>
                        <InputLabel htmlFor="dataManager" dir="rtl">اختيار مسؤول البيانات</InputLabel>
                        <Select
                            dir="rtl"
                            native
                            label="dataManager"
                            inputProps={{
                                name: 'مسؤول',
                                id: 'dataManager',
                            }}
                        >
                            {/* Example data to be removed */}
                            <option aria-label="None" value="" />
                            <option value={"أحمد"} dir="rtl">أحمد</option>
                            <option value={"محمد"} dir="rtl">محمد</option>
                            <option value={"حسان"} dir="rtl">حسان</option>
                        </Select>

                    </FormControl>
                    <Button variant="contained" href="/" color="secondary">
                        اضافة
                    </Button>
                </Grid >
            </Grid>
        </form>
    )
}

export default CustomerForm
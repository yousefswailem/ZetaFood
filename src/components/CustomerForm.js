import { Grid, makeStyles, TextField, InputLabel, Select, FormControl, Button, FormLabel } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(2),
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
            position: 'left',
            left: '1.75rem !important',
            right: 'inherit!important',
            transformOrigin: 'right !important',
        }
    },
}))

const CustomerForm = () => {
    const [values, setValues] = useState("");
    const classes = useStyles();
    return (
        <form className={classes.root} >

            <Grid container>
                <Grid item>
                    <FormLabel style={{ color: 'white'}}>إضافة زبون</FormLabel>
                    <hr />
                    <InputLabel style={{ color: 'white', float:'right', marginRight: '30px'}}>اسم المستخدم</InputLabel>
                    <TextField
                        varient="outlined"
                        label="اسم المستخدم"
                        id="outlined-basic"
                        required
                    />
                    <FormControl variant="outlined" >
                        <InputLabel htmlFor="dataManager">اختيار مسؤول البيانات</InputLabel>
                        <Select
                            required
                            native
                            label="dataManager"
                            inputProps={{
                                name: 'مسؤول',
                                id: 'dataManager',
                            }}
                        >
                            {/* Example data to be removed */}
                            <option aria-label="None" value="" />
                            <option value={"أحمد"}>أحمد</option>
                            <option value={"محمد"}>محمد</option>
                            <option value={"حسان"}>حسان</option>
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
import { Grid, makeStyles, TextField, InputLabel, Select, FormControl, Button } from '@material-ui/core'
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
                <h5 style={{ color: 'white'}}>إضافة زبون</h5>
                <hr/>
                    <TextField
                        varient="outlined"
                        label="اسم المستخدم"
                    // value={values}
                    >
                    </TextField>
                    <FormControl variant="outlined" className={classes.root}>
                        <InputLabel htmlFor="dataManager">اختيار مسؤول البيانات</InputLabel>
                        <Select
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
                    <Button variant="contained" color="secondary">
                            اضافة
                        </Button>
                </Grid >
            </Grid>
        </form>
    )
}

export default CustomerForm
import { useState, useEffect } from 'react'
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import { TextField, Chip, DialogTitle, DialogActions, DialogContent, DialogContentText, FormControlLabel, Checkbox, IconButton, Tooltip } from "@material-ui/core";
import { Autocomplete,ToggleButton,ToggleButtonGroup,Alert } from '@material-ui/lab';
import { CreateIcon } from "../HomePage/HomePageElements";

interface IErrors<TValue> {
    [id: string]: TValue;
}

function CreateModal(props: any) {
    let lastId = props.usersLength;

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [dob, setDOB] = useState<any>()
    const [emailError, setEmailError] = useState<Boolean>(false);
    const [createFailed, setCreateFailed] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    var [errors, setErrors] = useState<IErrors<any>>({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
    });

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setErrors({});
        setFirstName("");
        setLastName("");
        setEmail("");
        setDOB("");
        setOpen(false);
    }

    const handleValidation = () => {
        let formIsValid = true;
        errors = {};
        setEmailError(false);

        //Last Name
        if (lastName === "") {
            formIsValid = false;
            errors["lastName"] = true;
        }

        //First Name
        if (firstName === "") {
            formIsValid = false;
            errors["firstName"] = true;
        }
        //Email
        if (email === "") {
            formIsValid = false;
            errors["email"] = true;
        }
        if (typeof email !== "undefined") {
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = true;
                setEmailError(true);
            }
        }

        //dob: check if date is before current day

        setErrors(errors);
        if (formIsValid) {
            handleCreate();
        }
        return formIsValid;
    }

    const showErrors = () => {
        if (emailError) {
            return(<Alert variant="filled" severity="error">Email is not valid</Alert>);
        }
        else if (!emailError && createFailed)
        {
            return(<Alert variant="filled" severity="error">{createFailed}</Alert>);
        }     
        else
        {
            return "";
        }
    }

    const handleCreate = () => {
        
    };
    
    return (
        <div>
            <Tooltip title="Create User">
                <IconButton onClick={handleOpenDialog}><CreateIcon color="secondary"/></IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleCloseDialog} fullWidth={true} maxWidth={"sm"}>
                <DialogTitle id="form-dialog-title">Add User</DialogTitle>
                <DialogContent>
                <DialogContentText>Start adding user.</DialogContentText>
                {showErrors()}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateModal

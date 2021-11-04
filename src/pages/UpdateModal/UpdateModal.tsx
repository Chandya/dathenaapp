import { useState, useEffect } from 'react'
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import { TextField, Chip, DialogTitle, DialogActions, DialogContent, DialogContentText, FormControlLabel, Checkbox, IconButton, Tooltip } from "@material-ui/core";
import { Autocomplete,ToggleButton,ToggleButtonGroup,Alert } from '@material-ui/lab';
import { UpdateIcon } from "../HomePage/HomePageElements";

const UpdateModal = (props: any) => {
    const id = props.id;
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleUpdateButton = (id: number) => {
        setOpen(true);
    }

    return (
        <div>
            <Tooltip title="Update">
                <IconButton aria-label="update" color='secondary' onClick={() => handleUpdateButton(id)}>
                    <UpdateIcon />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"sm"}>
                <DialogTitle id="form-dialog-title">Update User</DialogTitle>
                <DialogContent>
                <DialogContentText>Start updating user {id}.</DialogContentText>
                </DialogContent>
            </Dialog>         
        </div>
    )
}

export default UpdateModal

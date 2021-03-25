import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function FormDialog({
  open,
  setOpen,
  data,
  setData,
  type,
  selectedDb,
}) {
  const [tfValue, setTfValue] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setTfValue(e.target.value);
  };

  const handleSubmit = () => {
    let db_obj = {
      db_name: tfValue,
      tables: [],
    };

    var _data = [...data];

    if (type === "db") {
      _data.push(db_obj);
    } else {
      _data.map((db, i) => {
        if (db.db_name === selectedDb) {
          db["tables"].push(tfValue);
        }
      });
    }
    setData(_data);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <DialogContentText style={{ fontSize: "16px", fontWeight: "bold" }}>
            Enter a name for the new database
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

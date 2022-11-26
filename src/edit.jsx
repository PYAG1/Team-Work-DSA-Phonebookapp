import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { FaTrash } from "react-icons/fa";

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button aria-describedby={id} variant="contained" onClick={handleClick}>
      <FaTrash className=" text-lg"/>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
    
      >
        <Typography sx={{ p: 2 }}>
          Are you sure?
          <div className=" flex justify-between pt-2">
            <button className=" text-green-500" onClick={props.setup}>Yes</button>
            <button onClick={handleClose} className=" text-red-600">No</button>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}

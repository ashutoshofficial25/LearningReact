import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Box } from "@mui/system";
import React, { Children, useState } from "react";
import CloseIconButton from "src/components/CloseIconButton";

const CustomDialog = ({
  title,
  fullWidth,
  maxWidth,
  onClose,
  minHeight,
  children,
}) => {
  const [open, setOpen] = useState(true);

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle onClose={onClose}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>{title}</Box>
          <CloseIconButton handleClick={onClose} />
        </Box>
      </DialogTitle>

      <DialogContent dividers style={{ minHeight: `${minHeight}` }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;

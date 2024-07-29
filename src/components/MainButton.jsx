import { Button } from '@mui/material'
import React from 'react'

function MainButton({label, color}) {
  return (
    <Button
      sx={{
        bgcolor: color,
        px: {xs: 1, sm: 2},
        py: {xs: .8, sm: 1.5},
        fontSize: {xs: 11, sm: 13},
        color: "#FFF",
        transition: ".3s",  
        fontWeight: 700,
        ":hover": {
          bgcolor: color,
          boxShadow: "15px 10px 20px rgba(0,0,0, 10%)",
        },
      }}
    >
      {label}
    </Button>
  );
}

export default MainButton
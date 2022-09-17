import React from 'react'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/material/styles'



export default function MUITextFields() {



  return (
    <div>
      
      <TextField
        variant='filled'
        color='success'
        label='Text Field'
      />
      <TextField
        variant='filled'
        color='success'
        type='email'
        label='Email Field'
        placeholder='amitpisal1212@yahoo.com'
      />
      <TextField
        variant='outlined'
        color='secondary'
        type='date'
        label='Date'
        sx={{ width: 180 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        variant='standard'
        color='warning'
        type='time'
        label='Time'
        
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}

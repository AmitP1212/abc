import React from 'react'


import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'


export default function MUICheckBox() {
    
  return (
    <div>
      <FormControlLabel 
        control={
            <Checkbox
            defaultChecked={true}
            color='primary'
        />
        }
        label='Default Checked Checkbox'
      />

      <FormControlLabel 
        control={
            <Checkbox
        defaultChecked={false}
        icon={<SaveIcon/>}
        checkedIcon={<SaveIcon/>}
        color='secondary'
      />
        } 
        label='Save Icon Checkbox'
      />
      
<FormControlLabel 
        control={
            <Checkbox
        defaultChecked={true} 
        disabled
        color='error'
      />
        } 
        label='Disabled and Checked Checkbox'
      />

      <FormControlLabel 
        control={
            <Checkbox
                defaultChecked={true}
                icon={<DeleteIcon/>}
                checkedIcon={<DeleteIcon/>}
                inputProps={{
                    'aria-label': 'warning checkbox'
                }}
      />
        } 
        label='Delete Icon Checkbox'
      />
      
    </div>
  )
}

import React from 'react'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'


export default function MaterialUIIcon() {
  return (
    <div>
        <ButtonGroup variant='contained' >
            <Button startIcon={<SaveIcon/>} 
             color='secondary' >
                Save Icon
            </Button>
            <Button startIcon={<DeleteIcon/>} 
             color='info' >
                Discard Icon
            </Button>
            <Button startIcon={<SaveIcon/>} endIcon={<SaveIcon/>}
             color='success' >
                Both Side Icon
            </Button>
        </ButtonGroup>
    </div>
  )
}

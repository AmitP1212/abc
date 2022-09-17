import React from 'react'

import Button from '@mui/material/Button'

export default function MaterialUIButtons() {
  return (
    <div>
      <Button variant='contained' color='primary' >
        Primary Contained
      </Button>
      
      <Button variant='contained' color='secondary' >
        Secondary Contained  
      </Button>

      <Button 
      href='#' 
      variant='outlined' 
      color='success' >
        Success Outlined <br/> Click Me For href
      </Button>

      <Button variant='text' color='error' >
        Error Text Button
      </Button>

      <Button onClick={()=>{alert("Button Clicked Varient Contained and Color Warning.")}} variant='contained' color='warning' >
        Warning Contained <br/>Click Me
      </Button>

      <Button disabled variant='contained' color='secondary' >
        Disabled Button
      </Button>

      <Button size='small' variant='outlined'>
          Small Size
      </Button>

      <Button size='medium' variant='outlined'>
          Medium Size
      </Button>
      
      <Button size='large' variant='outlined'>
          Large Size
      </Button>

      <Button 
      style={{
        fontSize:5
      }} 
      size='large' variant='outlined'>
          Using Style - Font Size 5
      </Button>

      <Button 
      style={{
        fontSize:15
      }} 
      size='large' variant='outlined'>
          Using Style - Font Size 15
      </Button>

      <Button 
      style={{
        fontSize:25
      }} 
      size='large' variant='outlined'>
          Using Style - Font Size 25
      </Button>
    </div>
  )
}

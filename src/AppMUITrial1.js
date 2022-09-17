
import './App.css';

import MaterialUIButtons from './components/MaterialUIButtons';
import MaterialUIIcon from './components/MaterialUIIcon';
import MaterialUIPickers from './components/MaterialUIPickers';
import MUICheckBox from './components/MUICheckBox';
import MUITextFields from './components/MUITextFields';
import NavBar from './components/NavBar';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'



function App() {
  return (
 
      <div className="App"> 
      <Container maxWidth='xs'><hr/>
      <AppBar color='secondary'>
        <Toolbar>
          <IconButton>
            <Menu>

            </Menu>
          </IconButton>
          <Typography variant='h6' >
              MUI Theme
          </Typography>
          <Button color='warning' >
            Login
          </Button>
        </Toolbar>
      </AppBar>
        <h1>Welcome To Material-UI</h1>
      </Container>
      <Container maxWidth='sm'><hr/>
        <h1>Hi</h1><hr/>
        <NavBar/>
      </Container>
      <Container maxWidth='md'><hr/>
      
        <MaterialUIButtons/><hr/>
        <MaterialUIIcon/>
      </Container>
      <Container maxWidth='lg'><hr/>
        <MUICheckBox/><hr/>
        <MUITextFields/>
      </Container>
      <Container maxWidth='xl'><hr/>
        <MaterialUIPickers/><hr/>

        <Grid container spacing={4} padding={1} justifyContent='center' >
            <Grid item xs={3} sm={6} >
              <Paper style={{ height:80, width:100, backgroundColor:'lightgray'}} />
            </Grid>
            <Grid item xs={3} sm={6} >
              <Paper  style={{ height:80, width:100, backgroundColor:'lightgray'}} />
            </Grid>
            <Grid item xs={3} sm={6} >
              <Paper  style={{ height:80, width:100, backgroundColor:'lightgray'}} />
            </Grid>
          </Grid>
          <Grid container spacing={4} padding={1} justifyContent='center' >
            <Grid item xs >
              <Paper  style={{ height:80, width:100, backgroundColor:'lightgray'}} />
            </Grid>
            <Grid item xs >
              <Paper  style={{ height:80, width:100, backgroundColor:'lightgray'}} />
            </Grid>
            <Grid item xs >
              <Paper  style={{ height:80, width:100, backgroundColor:'lightgray'}} />
            </Grid>
          </Grid>
        
      </Container>
      </div>
  
  );
}


export default App;

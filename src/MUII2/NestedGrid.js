import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import { CssBaseline, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, Stack } from '@mui/material';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import Feed from './Feed';
import Navbar from './Navbar';
// import BgImage from '../components/BgImage';
import HomeBody from '../components/HomepageBody';
import HomepageFooter from './HomepageFooter';
import GpTrial from '../components/GpTrial';
import HomepageHero from './HomepageHero';



export default function NestedGrid() {
  return (
    <div>

      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent='space-between'>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <HomeBody />
        <HomepageFooter/>
      </Box>

    </div>
  );
}

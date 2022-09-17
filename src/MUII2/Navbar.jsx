import styled from "@emotion/styled";
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from "@mui/material";
import React from "react";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box } from "@mui/system";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({theme}) => ({
    backgroundColor:'white',
    padding:"0 10px",
    borderRadius: '1em',
    width:'20%'
}))

const Icons = styled(Box)(({theme}) => ({
   display:'flex',
   gap:'20px', alignItems:'center'    
}))

const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{}}>
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:'none', sm:'block'}}}>
                    Social Complaint Portal
                </Typography>
                <SupportAgentIcon sx={{display:{xs:'block', sm:'none'}}}/>
                <Search><InputBase placeholder="search..." /></Search>
                <Icons>
                    <Badge  >
                        <NotificationsActiveIcon/>
                    </Badge>
                    <Badge>
                        <Avatar src="" />
                    </Badge>
                </Icons>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;

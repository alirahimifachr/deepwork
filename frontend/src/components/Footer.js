import * as React from 'react';
import { Toolbar, Button, Box, AppBar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InfoIcon from '@mui/icons-material/Info';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Footer = () => {

    return (
        <Box>
            <AppBar position="static"  >
                <Toolbar sx={{ backgroundColor: 'black', justifyContent: 'space-between' }}>
                    <Button sx={{ color: 'white', }}><EmailIcon /></Button>
                    <Button sx={{ color: 'white' }}><GitHubIcon color='white' /></Button>
                    <Button sx={{ color: 'white', }}><OndemandVideoIcon /></Button>
                    <Button sx={{ color: 'white', }}><InfoIcon /></Button>
                    <Button sx={{ color: 'white', }}><TipsAndUpdatesIcon /></Button>
                    <Button sx={{ color: 'white', }}><FavoriteBorderIcon /></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
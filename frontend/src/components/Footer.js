import * as React from 'react';
import { Toolbar, Button, Box, AppBar, Typography } from '@mui/material';
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
                    <Box>
                        <Button sx={{ color: 'white' }}><EmailIcon /></Button>
                        <Typography sx={{ p: 1 }}>Email</Typography>
                    </Box>
                    {/* <Button sx={{ color: 'white' }}><GitHubIcon color='white' /></Button> */}
                    <Box>
                        <Button sx={{ color: 'white' }}><OndemandVideoIcon /></Button>
                        <Typography sx={{ p: 1 }}>Tutorial</Typography>
                    </Box>
                    <Box>
                        <Button sx={{ color: 'white' }}><InfoIcon /></Button>
                        <Typography sx={{ p: 1 }}>About</Typography>
                    </Box>
                    <Box>
                        <Button sx={{ color: 'white' }}><TipsAndUpdatesIcon /></Button>
                        <Typography sx={{ p: 1 }}>Infos</Typography>
                    </Box>
                    <Box>
                        <Button sx={{ color: 'white' }}><FavoriteBorderIcon /></Button>
                        <Typography sx={{ p: 1 }}>Donate</Typography>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
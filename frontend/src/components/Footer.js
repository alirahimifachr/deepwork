import * as React from 'react';
import { Toolbar, Button, Box, AppBar, Typography, Modal } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InfoIcon from '@mui/icons-material/Info';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Footer = () => {
    const [openE, setOpenE] = React.useState(false);
    const handleOpenE = () => setOpenE(true);
    const handleCloseE = () => setOpenE(false);

    const [openT, setOpenT] = React.useState(false);
    const handleOpenT = () => setOpenT(true);
    const handleCloseT = () => setOpenT(false);

    const [openA, setOpenA] = React.useState(false);
    const handleOpenA = () => setOpenA(true);
    const handleCloseA = () => setOpenA(false);

    const [openI, setOpenI] = React.useState(false);
    const handleOpenI = () => setOpenI(true);
    const handleCloseI = () => setOpenI(false);

    const [openD, setOpenD] = React.useState(false);
    const handleOpenD = () => setOpenD(true);
    const handleCloseD = () => setOpenD(false);

    return (
        <Box>
            <AppBar position="static"  >
                <Toolbar sx={{ backgroundColor: 'black', justifyContent: 'space-between' }}>
                    <Box>
                        <Button onClick={handleOpenE} sx={{ color: 'white' }}><EmailIcon /></Button>
                        <Typography sx={{ p: 1 }}>E-mail</Typography>
                        <Modal
                            open={openE}
                            onClose={handleCloseE}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Contact:
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    alirahimifachr@gmail.com
                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
                    {/* <Button sx={{ color: 'white' }}><GitHubIcon color='white' /></Button> */}
                    <Box>
                        <Button onClick={handleOpenT} sx={{ color: 'white' }}><OndemandVideoIcon /></Button>
                        <Typography sx={{ p: 1 }}>Tutorial</Typography>
                        <Modal
                            open={openT}
                            onClose={handleCloseT}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Tutorial:
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
                    <Box>
                        <Button onClick={handleOpenA} sx={{ color: 'white' }}><InfoIcon /></Button>
                        <Typography sx={{ p: 1 }}>About</Typography>
                        <Modal
                            open={openA}
                            onClose={handleCloseA}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    About:
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                </Typography>
                            </Box>
                        </Modal>

                    </Box>
                    <Box>
                        <Button onClick={handleOpenI} sx={{ color: 'white' }}><TipsAndUpdatesIcon /></Button>
                        <Typography sx={{ p: 1 }}>Infos</Typography>
                        <Modal
                            open={openI}
                            onClose={handleCloseI}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Infos:
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
                    <Box>
                        <Button onClick={handleOpenD} sx={{ color: 'white' }}><FavoriteBorderIcon /></Button>
                        <Typography sx={{ p: 1 }}>Donate</Typography>
                        <Modal
                            open={openD}
                            onClose={handleCloseD}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Donate:
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                </Typography>
                            </Box>
                        </Modal>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
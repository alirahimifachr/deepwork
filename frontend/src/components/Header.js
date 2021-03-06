import React from 'react';
import { Toolbar, Typography, Button, Box, AppBar } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import BarChartIcon from '@mui/icons-material/BarChart';


export default function Header() {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);
    const [day, setDay] = React.useState(0);

    React.useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!timerOn) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    const handleRestart = () => {
        setTime(0);
        var t = (Math.floor((time / 60000) % 60));
        setDay(day + t);
    }

    return (
        <AppBar position="static"  >
            <Toolbar sx={{ backgroundColor: 'black', justifyContent: 'space-between', p: 0, }}>
                <Typography variant="h6" component="div" sx={{ p: 1, }}>
                    DeepWork
                </Typography>
                <Box sx={{ display: 'flex', position: 'sticky' }}>
                    <Box sx={{ pl: 5 }}>
                        {!timerOn && time === 0 && (
                            <Button sx={{ color: 'white', }} onClick={() => setTimerOn(true)}><PlayArrowIcon /></Button>
                        )}
                        {timerOn && <Button sx={{ color: 'white', }} onClick={() => setTimerOn(false)}><PauseIcon /></Button>}
                        {!timerOn && time > 0 && (
                            <Button sx={{ color: 'white', }} onClick={handleRestart}><RestartAltIcon /></Button>
                        )}
                        {!timerOn && time > 0 && (
                            <Button sx={{ color: 'white', }} onClick={() => setTimerOn(true)}><PlayArrowIcon /></Button>
                        )}
                    </Box>
                    <Box sx={{ pl: 5 }}>
                        <Button sx={{ color: 'white', }}>
                            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                        </Button>
                    </Box>
                    <Box sx={{ pl: 5 }}>
                        <Button sx={{ color: 'white', textTransform: 'none' }}>{'Today: ' + day + '  Minutes'}</Button>
                    </Box>
                    <Box sx={{ pl: 5 }}>
                        <Button sx={{ color: 'white' }}><BarChartIcon /></Button>
                    </Box>
                </Box>
                <Box sx={{}}>
                    <Button sx={{ color: 'white', textTransform: 'none' }}>Account</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

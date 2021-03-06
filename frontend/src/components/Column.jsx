import React, { useEffect, useState } from "react";
import { Button, Box, Typography, Modal, ListItemText, TextField, FormControl, MenuItem, Select } from '@mui/material';
import { InputLabel } from '@mui/material'
import { blueGrey, grey, teal, } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Board from "./Board";
import Card from "./Card";
import { display } from "@mui/system";


const Column = () => {
    const axios = require('axios');
    const [proj, setProj] = useState([]);
    const [sect, setSect] = useState([]);
    const [tas, setTas] = useState([]);
    const [projectText, setProjectText] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const getData = () => {
        axios.get('http://127.0.0.1:3001/api/project/?format=json').then(function (response) {
            setProj(response.data);
        }).catch(function (error) {
            console.log(error, 'project,getData ');
        });

        axios.get('http://127.0.0.1:3001/api/section/?format=json').then(function (response) {
            setSect(response.data);
        }).catch(function (error) {
            console.log(error, 'section,getData ');
        });

        axios.get('http://127.0.0.1:3001/api/arr/?format=json').then(function (response) {
            setTas(response.data);
        }).catch(function (error) {
            console.log(error, 'arr,getData ');
        });
    };

    const addProject = (obj) => {
        axios.post('http://127.0.0.1:3001/api/project/', {
            project: obj,
        }).catch(error => {
            console.log(error, obj);
        }).then(function () {
            setProjectText('');
            getData();
        });
    }

    useEffect(() => {
        getData();
        console.log('useEffect getData()');
    }, []);

    return (
        <Box sx={{ height: "86vh", display: "flex", border: 4, borderColor: grey[700] }}>
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', flexGrow: 1, p: 1, m: 0.2, color: "white", backgroundColor: blueGrey[900], maxWidth: '25%' }}>
                <Typography variant="h5">Projects</Typography>
                <Box sx={{ height: '100%', overflow: "auto" }}>
                    <Board id='projects'>
                        {
                            Object.keys(proj).map((p) => {
                                return (
                                    <Box key={Object.values(proj[p])} sx={{ backgroundColor: blueGrey[800], p: 0.2, pl: 2, m: 0.3, border: 1, borderColor: "black" }}>
                                        <Typography variant='h6'>{Object.values(proj[p].project)}</Typography>
                                        {
                                            Object.keys(sect).map((s) => {
                                                return (
                                                    <Box key={Object.values(sect[s])} sx={{ m: 1, }} >
                                                        <Typography variant='body1'>{(sect[s].parent === proj[p].id) ? Object.values(sect[s].section) : null}</Typography>

                                                        {
                                                            Object.keys(tas).map((t) => {
                                                                return (
                                                                    <Box sx={{ m: 1 }} key={Object.values(tas[t])}>
                                                                        <Card draggable='true'
                                                                            id={p.toString() + s.toString() + t.toString()} >
                                                                            <ListItemText primary={((sect[s].parent === proj[p].id)) && (tas[t].parent === sect[s].id) ? Object.values(tas[t].task) : null} secondary={((sect[s].parent === proj[p].id)) && (tas[t].parent === sect[s].id) ? (proj[p].project + ' > ' + sect[s].section) : null} />
                                                                        </Card>
                                                                    </Box>
                                                                )
                                                            })}
                                                    </Box>)
                                            })}
                                    </Box>)
                            })
                        }
                    </Board>
                    <Button onClick={handleOpen} sx={{ color: 'white', textTransform: 'none' }} >
                        <AddIcon /> Add Data
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 600,
                        }}>
                            <Box sx={{
                                border: 5, borderColor: 'black', backgroundColor: 'white', color: 'black', height: 400, p: 3,
                            }}>
                                <Box>
                                    <TextField value={projectText} onChange={(e) => setProjectText(e.target.value)} label="Add Project" color='primary' size="small" type='text' sx={{ backgroundColor: 'white', width: '23vh' }} >
                                    </TextField>
                                    <Button size='large' color="primary" onClick={() => addProject(projectText)}>
                                        <AddIcon /></Button>
                                </Box>
                                <Box sx={{}}>
                                    <FormControl sx={{ width: '23vh', mt: 1 }} size="small" color='secondary'>
                                        <InputLabel id="pro">Sections</InputLabel>
                                        <Select labelId="pro" label='Sections'>
                                            {
                                                Object.keys(proj).map((p) => {
                                                    return (
                                                        <Box keys={Object.keys(proj[p])}>
                                                            <MenuItem >{Object.values(proj[p].project)}</MenuItem>
                                                        </Box>
                                                    )
                                                })
                                            }
                                        </Select>
                                        <TextField value={null} onChange={(e) => null} label="Add Section" color='secondary' size="small" type='text' sx={{ backgroundColor: 'white', width: '23vh' }} >
                                        </TextField>
                                        <Button size='large' color="secondary" onClick={() => null}>
                                            <AddIcon /></Button>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                    </Modal>

                </Box>
            </Box >
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', flexGrow: 1, p: 1, m: 0.2, color: "white", backgroundColor: '#5f0937', maxWidth: '25%' }}>
                <Typography variant="h5">Tasks</Typography>
                <Board id='Tasks'>

                </Board>
            </Box>
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', flexGrow: 1, p: 1, m: 0.2, color: "white", backgroundColor: teal[900], maxWidth: '25%' }}>
                <Typography variant="h5">Doing</Typography>
                <Board id='Doing'>

                </Board>
            </Box>
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', flexGrow: 1, p: 1, m: 0.2, color: "white", backgroundColor: blueGrey[700], overflow: "auto", maxWidth: '25%' }}>
                <Typography variant="h5">Done</Typography>
                <Board id='Done'>

                </Board>
            </Box>
        </Box >);
};

export default Column;

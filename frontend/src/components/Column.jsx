import React, { useEffect, useState } from "react";
import { Button, Box, Typography, Collapse } from '@mui/material';
import { blueGrey, deepOrange, grey, pink, teal, } from "@mui/material/colors";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Board from "./Board";
import Card from "./Card";


const Column = () => {
    const axios = require('axios');
    const [proj, setProj] = useState([]);
    const [sect, setSect] = useState([]);
    const [tas, setTas] = useState([]);


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

    useEffect(() => {
        getData();
        console.log('useEffect getData()');
    }, []);

    return (
        <Box sx={{ height: "86vh", display: "flex", border: 4, borderColor: grey[700] }}>
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', flexGrow: 1, p: 1, m: 0.2, color: "white", backgroundColor: blueGrey[900], maxWidth: '30%' }}>
                <Typography variant="h5">Projects</Typography>
                <Box sx={{ height: '100%', overflow: "auto" }}>
                    <Board id='projects'>
                        {
                            Object.keys(proj).map((p) => {
                                return (
                                    <Box key={Object.values(proj[p])} sx={{ backgroundColor: blueGrey[800], p: 0.2, pl: 2, m: 0.3, border: 1, borderColor: "black", }}>
                                        <Typography variant='h6'>{Object.values(proj[p].project)}</Typography>
                                        {
                                            Object.keys(sect).map((s) => {
                                                return (
                                                    <Box key={Object.values(sect[s])} sx={{ pb: 1 }} >
                                                        <Typography variant='body1'>{(sect[s].parent === proj[p].id) ? Object.values(sect[s].section) : console.log()}</Typography>

                                                        {
                                                            Object.keys(tas).map((t) => {
                                                                return (
                                                                    <Box key={Object.values(tas[t])}>
                                                                        <Card draggable='true'
                                                                            id={p.toString() + s.toString() + t.toString()} >
                                                                            <Typography variant='body2'>{((sect[s].parent === proj[p].id)) && (tas[t].parent === sect[s].id) ? Object.values(tas[t].task) : console.log()}</Typography>
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
                    <Button sx={{ color: 'white', textTransform: 'none' }} >
                        <AddIcon /> Add Data
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', flexGrow: 1, p: 1, m: 0.2, color: "white", backgroundColor: '#5f0937' }}>
                <Typography variant="h5">Tasks</Typography>
                <Board id='Tasks'>

                </Board>
            </Box>
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', flexGrow: 1, p: 1, m: 0.2, color: "white", backgroundColor: teal[900] }}>
                <Typography variant="h5">Doing</Typography>
                <Board id='Doing'>

                </Board>
            </Box>
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', flexGrow: 1, p: 1, m: 0.2, color: "white", backgroundColor: blueGrey[700], overflow: "auto" }}>
                <Typography variant="h5">Done</Typography>
                <Board id='Done'>

                </Board>
            </Box>
        </Box>);
};

export default Column;

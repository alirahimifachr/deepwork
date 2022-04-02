import React, { useState, useEffect } from "react";
import { List, Box, Typography, ListItemText, ListItemButton, Collapse } from '@mui/material';
import { TextField, Button } from '@mui/material';
import { blueGrey, deepOrange, grey, pink, teal } from "@mui/material/colors";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Board from "./Board";
import Card from "./Card";


const Column = () => {
    const axios = require('axios');

    const [datas, setDatas] = useState(new Object());
    const [open, setOpen] = useState(false);
    const [iTask, setiTask] = useState([]);
    const [iProject, setiProject] = useState('');

    const getData = () => {
        axios.get('http://127.0.0.1:3001/api/backend/').then(function (response) {
            console.log(response);
            // setDatas(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const addProject = (obj) => {
        const x = Object.keys(datas).length;
        console.log(x);
        const axios = require('axios');
        axios.post('http://127.0.0.1:3001/api/backend/', {
            id: x,
            project: obj,
            task: []
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        }).then(function () {
            getData();
            setiProject('');
        });

    };

    const deleteProject = () => {

    }

    const putTask = (i, t) => {

    }

    const deleteTask = () => {

    }

    const handleClickPr = () => {
        setOpen(!open);
    }


    return (
        <Box sx={{
            height: "90vh", display: "flex", border: 4, borderColor: grey[700], overflow: "auto"
        }}>
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', overflow: "auto", p: 1, m: 0.2, backgroundColor: pink[900], color: "white", flexGrow: 0.5 }}>
                <Typography variant="h6">Projects</Typography>
                <Board id='projects'>
                    {
                        Object.keys(datas).map((i) => {
                            return (
                                <Box key={Object.values(datas[i].project)}>
                                    <ListItemButton onClick={handleClickPr}>
                                        <ListItemText primary={Object.values(datas[i].project)} />
                                        {(open ? <ExpandLess /> : <ExpandMore />)}
                                    </ListItemButton>
                                    <Collapse in={open} timeout='auto' >
                                        <Box sx={{ backgroundColor: pink[800], p: 0.2, pl: 2, m: 0.3, border: 1, borderColor: "black", }}>
                                            {Object.values(datas[i].task).map((j) => {
                                                return (
                                                    <Card id={i.toString() + '  ' + j.toString()}
                                                        draggable='true' key={Object.values(datas[i].project) + '  ' + j.toString()}>
                                                        <ListItemText primary={j} secondary={Object.values(datas[i].project)} />
                                                    </Card>
                                                )
                                            })}
                                        </Box>
                                        <Box>
                                            <TextField label="Add Task" color='warning' size="small" type='text' sx={{ m: 1 }}
                                                value={iTask} onChange={(e) => setiTask(e.target.value)}>
                                            </TextField>
                                            <Button sx={{ m: 1 }} size='large' color="warning" onClick={() => putTask(i, iTask)}> <AddIcon /></Button>
                                        </Box>
                                    </Collapse>
                                </Box>
                            )
                        })
                    }
                </Board>
                <Box>
                    <TextField value={iProject} onChange={(e) => setiProject(e.target.value)} label="Add Project" color='warning' size="small" type='text' >
                    </TextField>
                    <Button size='large' color="warning" onClick={() => addProject(iProject)}>
                        <AddIcon /></Button>
                </Box>
            </Box>

            <Box sx={{ display: "inline", border: 2, flexGrow: 1, p: 1, m: 0.2, backgroundColor: deepOrange[300] }}>
                <Typography variant="h6">Tasks</Typography>
                <Board id='Tasks'>
                </Board>
            </Box>

            <Box sx={{ display: "inline", border: 2, flexGrow: 1, p: 1, m: 0.2, backgroundColor: teal[300] }}>
                <Typography variant="h6">Doing</Typography>
                <Board id='Doing' >
                </Board>
            </Box>

            <Box sx={{ display: "inline", border: 2, borderColor: 'black', flexGrow: 1, p: 1, m: 0.2, backgroundColor: blueGrey[700], color: "white" }}>
                <Typography variant="h6">Done</Typography>
                <Board id='Done'>
                    <button onClick={getData}>data</button>
                </Board>
            </Box>
        </Box>
    )
};

export default Column;

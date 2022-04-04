import React, { useState, useEffect } from "react";
import { Box, Typography, ListItemText, ListItemButton, Collapse } from '@mui/material';
import { TextField, Button } from '@mui/material';
import { blueGrey, deepOrange, grey, pink, teal } from "@mui/material/colors";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Board from "./Board";
import Card from "./Card";


const Column = () => {
    const axios = require('axios');

    const [datas, setDatas] = useState([]);
    const [dataTasks, setDataTasks] = useState([]);
    const [iProject, setiProject] = useState('');
    const [openTextField, setOpenTextField] = useState(false);
    const [iTask, setiTask] = useState('');
    const [open, setOpen] = useState(false);

    const getData = () => {
        axios.get('http://127.0.0.1:3001/api/backend/?format=json').then(function (response) {
            setDatas(response.data);
        }).catch(function (error) {
            console.log(error);
        });

        axios.get('http://127.0.0.1:3001/api/arr/?format=json').then(function (response) {
            setDataTasks(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const addProject = (obj) => {
        const x = Object.keys(datas).length + 1;
        axios.post('http://127.0.0.1:3001/api/backend/', {
            project: obj,
        }).catch(error => {
            console.log(error, obj);
        }).then(function () {
            getData();
            setiProject('');
        });
    };

    const addTask = (i, pa, ta) => {
        axios.post(`http://127.0.0.1:3001/api/arr/`, {
            id: i,
            task: ta,
            completed: false,
            parent: pa
        }).catch(error => {
            console.log(error, i, pa, ta);
        }).then(function () {
            getData();
            setiTask('');
        });
    };


    const deleteProject = (id) => {
        axios.delete(`http://localhost:3001/api/backend/${id}/`)
            .then(resp => {
                getData();
            }).catch(error => {
                console.log(error);
            });
    };


    const deleteTask = (id) => {
        axios.delete(`http://localhost:3001/api/arr/${id}/`)
            .then(resp => {
                getData();
            }).catch(error => {
                console.log(error);
            });
    };


    return (
        <Box sx={{ height: "90vh", display: "flex", border: 4, borderColor: grey[700], overflow: "auto" }}>
            <Box sx={{ display: "inline", border: 2, borderColor: 'black', overflow: "auto", p: 1, m: 0.2, backgroundColor: pink[900], color: "white", flexGrow: 0.5 }}>
                <Typography variant="h6">Projects</Typography>
                <Board id='projects'>
                    {
                        Object.keys(datas).map((i) => {
                            return (
                                <Box key={Object.values(datas[i])}>
                                    <ListItemButton onClick={() => setOpen(!open)}>
                                        <ListItemText primary={Object.values(datas[i].project)} />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout='auto' >
                                        <Box sx={{ backgroundColor: pink[800], p: 0.2, pl: 2, m: 0.3, border: 1, borderColor: "black", }}>
                                            {Object.keys(dataTasks).map((j) => {
                                                return (
                                                    ((datas[i].id === dataTasks[j].parent) ? (
                                                        <Box key={i.toString() + 'card' + j.toString() + 'i'}>
                                                            <Card id={i.toString() + ' ' + j.toString()}
                                                                draggable='true' key={Object.values(datas[i].project) + '' + j.toString()}>
                                                                <Box sx={{ display: 'flex' }}>
                                                                    <ListItemText primary={dataTasks[j].task} secondary={Object.values(datas[i].project)} />
                                                                    <Button size='small' sx={{ color: 'white', ml: 10 }} onClick={() => deleteTask(dataTasks[j].id)}><DeleteIcon /></Button>
                                                                </Box>
                                                            </Card>

                                                        </Box>) : console.log())
                                                )
                                            })}
                                        </Box>
                                        <Box >
                                            <Button sx={{ mr: 9 }} color="warning" onClick={() => setOpenTextField(!openTextField)}>Add Task</Button>
                                            <Button size='small' sx={{ color: 'white' }} onClick={() => deleteProject(datas[i].id)}><DeleteIcon size='small' /> {datas[i].project}</Button>
                                            {openTextField ? <Box>
                                                <TextField label="Add Task" color='warning' size="small" type='text' sx={{ m: 1 }}
                                                    value={iTask} onChange={(e) => setiTask(e.target.value)}>
                                                </TextField>
                                                <Button sx={{ m: 1 }} size='large' color="warning" onClick={() => addTask(Math.floor(Math.random() * 999999), datas[i].id, iTask)}> <AddIcon /></Button>
                                            </Box> : false}
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
            </Box >

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
        </Box >
    )
};

export default Column;

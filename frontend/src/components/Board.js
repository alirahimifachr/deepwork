import React from "react";
import { Box } from '@mui/material';


function Board(props) {
    const drop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    return (
        <Box id={props.id} height='91%' onDrop={drop} onDragOver={dragOver} >
            {props.children}
        </Box>
    );
}

export default Board;

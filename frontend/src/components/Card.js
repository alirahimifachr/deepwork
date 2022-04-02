import React from "react";
import { Box } from '@mui/material';


function Card(props) {
    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    }

    const dragOver = (e) => {
        e.stopPropagation();
    }

    return (
        <Box id={props.id} draggable={props.draggable}
            onDragStart={dragStart} onDragOver={dragOver}>
            {props.children}
        </Box>
    );
}

export default Card;
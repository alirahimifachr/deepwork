import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Column from "./Column";
import Header from "./Header";
import Footer from "./Footer";


export default function Kanban() {

    return (
        <Box sx={{ height: '100%' }}>
            <Header />
            <Column />
            <Footer />
        </Box>
    );
}

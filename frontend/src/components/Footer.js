import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box sx={{ bgcolor: "gray", height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ color: "blue" , fontFamily: "cursive"}}>© 2023 Bloggy </Box>
            </Box>
        </>
    )
}

export default Footer
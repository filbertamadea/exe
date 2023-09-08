import React from "react";
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Links from "./navbarData.jsx";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <AppBar position="static" sx={{mb : "13px"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{display: {xs: "none", md: "flex"}, mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: "none", md: "flex"},
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Hi Filbert
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                            {
                                <>
                                    {
                                        Links?.map((el, index) => (
                                            <Button
                                                key={index}
                                                sx={{my: 2, color: "white", display: "block"}}
                                                href={el.link}
                                            >
                                                {el.label}
                                            </Button>
                                        ))
                                    }
                                </>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;

import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem, Box, MenuList } from "@mui/material";
// import { FiMenu, FiUser } from "react-icons/fi";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { VerifiedUser } from "@mui/icons-material";

export default function AppHeader({ sidebarOpen, setSidebarOpen }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const handleLogout = () => {
        Cookies.remove("token");
        window.location.reload();
    };

    const menuOpen = Boolean(anchorEl);

    return (
        <AppBar
            position="sticky"
            color="primary"
            elevation={1}
            sx={{
                bgcolor: "primary",
                borderBottom: "1px solid",
                borderColor: "success.dark",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    sx={{ display: { lg: "none" } }}
                    aria-label="Toggle sidebar"
                >
                    <MenuList size={22} />
                </IconButton>

                <Typography
                    variant="h6"
                    component={Link}
                    to="/seller_dashboard"
                    sx={{
                        textDecoration: "none",
                        color: "inherit",
                        fontWeight: 600,
                    }}
                >
                    Dashboard
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Typography variant="body1" sx={{ display: { xs: "none", sm: "block" }, fontWeight: 500 }}>
                        Shoukat
                    </Typography>

                    <IconButton
                        onClick={handleMenuOpen}
                        sx={{
                            bgcolor: "grey.200",
                            color: "grey.800",
                            "&:hover": { bgcolor: "grey.300" },
                        }}
                    >
                        <Avatar
                            sx={{
                                bgcolor: "transparent",
                                width: 36,
                                height: 36,
                                color: "inherit",
                            }}
                        >
                            <VerifiedUser size={20} />
                        </Avatar>
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                            Profile
                        </MenuItem>
                        <MenuItem component={Link} to="/orders" onClick={handleMenuClose}>
                            Orders
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleLogout();
                                handleMenuClose();
                            }}
                        >
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

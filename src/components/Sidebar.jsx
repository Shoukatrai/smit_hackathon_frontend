import React from "react";
import { Drawer, Box, Typography, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { CropSquareSharp } from "@mui/icons-material";

const drawerWidth = 260;

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const location = useLocation();

    const menuItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Reports", path: "/reports" },
        { name: "Family Members", path: "/members" },
    ];

    const drawerContent = (
        <Box sx={{ width: drawerWidth }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 64,
                    px: 2,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Typography variant="h6" fontWeight="bold">
                    HealthMate
                </Typography>
                <IconButton
                    onClick={() => setSidebarOpen(false)}
                    sx={{ display: { lg: "none" } }}
                >
                    <CropSquareSharp size={20} />
                </IconButton>
            </Box>

            <List sx={{ p: 2 }}>
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <ListItemButton
                            key={item.name}
                            component={Link}
                            to={item.path}
                            onClick={() => setSidebarOpen(false)}
                            sx={{
                                borderRadius: 2,
                                mb: 1,
                                color: isActive ? "white" : "text.primary",
                                bgcolor: isActive ? "primary.main" : "transparent",
                                "&:hover": {
                                    bgcolor: isActive ? "primary.dark" : "primary.light",
                                    color: "white",
                                },
                            }}
                        >
                            <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 500 }} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <>
            <Drawer
                variant="temporary"
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", lg: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "none", lg: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        position: "relative",
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </>
    );
}

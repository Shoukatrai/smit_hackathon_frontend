import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "grey.100" }}>
      <CssBaseline />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <AppHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            p: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

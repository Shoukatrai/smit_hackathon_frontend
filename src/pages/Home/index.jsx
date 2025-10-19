import React from "react";
import { Box, Typography, Button, Stack, Card, CardContent } from "@mui/material";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%", fontFamily: "Arial, sans-serif" }}>

        <HeroSection />

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "#1976d2" }}>
            Why Choose HealthMate?
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="center"
            sx={{ mt: 6, px: 2 }}
          >
            <Card
              sx={{
                flex: 1,
                minWidth: 250,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-10px)", boxShadow: 6 },
                background: "#e3f2fd",
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Easy Analysis
                </Typography>
                <Typography variant="body1">
                  Upload your medical reports and get instant AI-powered insights in simple words.
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                flex: 1,
                minWidth: 250,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-10px)", boxShadow: 6 },
                background: "#fff3e0",
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Multilingual Support
                </Typography>
                <Typography variant="body1">
                  HealthMate explains reports in English and Roman Urdu for easy understanding.
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                flex: 1,
                minWidth: 250,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-10px)", boxShadow: 6 },
                background: "#e8f5e9",
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Secure & Reliable
                </Typography>
                <Typography variant="body1">
                  All your medical reports are securely stored and processed privately.
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>

        <Box textAlign="center" sx={{ mt: 10 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4, color: "#388e3c" }}>
            Ready to take control of your health?
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#1976d2",
              px: 5,
              py: 1.5,
              fontWeight: "bold",
              "&:hover": { bgcolor: "#115293", transform: "scale(1.05)" },
              transition: "all 0.3s",
            }}
          >
            Get Started
          </Button>
        </Box>

        <Box
          textAlign="center"
          sx={{
            mt: 12,
            py: 4,
            background: "linear-gradient(135deg, #e3f2fd, #fff)",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} HealthMate. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;

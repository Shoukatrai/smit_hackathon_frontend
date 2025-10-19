import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import heroImage from "../assets/hero image.png";

const HeroSection = () => {
    const theme = useTheme();

    return (
        <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
            sx={{
                px: { xs: 2, md: 5 },
                py: { xs: 4, md: 5 },
                minHeight: "90vh",
                background: `linear-gradient(135deg, ${theme.palette.primary.light}15, #fff)`,
            }}
        >
            {/* TEXT  */}
            <Box
                sx={{
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: "550px",
                }}
            >
                <Typography
                    variant="h3"
                    fontWeight={700}
                    color="primary"
                    gutterBottom
                >
                    HealthMate – Sehat ka Smart Dost
                </Typography>

                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                >
                    AI-powered health buddy that explains your medical reports in simple words.
                </Typography>

                <Button variant="contained" size="large">
                    Get Started
                </Button>
            </Box>

            {/* IMAGE  */}
            <Box
                component="img"
                src={heroImage}
                alt="HealthMate app hero"
                sx={{
                    maxWidth: { xs: "100%", md: "500px" },
                    borderRadius: 3,
                    boxShadow: 3,
                }}
            />
        </Stack>
    );
};

export default HeroSection;

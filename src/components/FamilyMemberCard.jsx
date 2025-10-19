import React from 'react';
import { Card, CardContent, Typography, Stack, Chip, Divider } from '@mui/material';

const FamilyMemberCard = ({ member }) => {
    return (
        <Card sx={{ minWidth: 300, maxWidth: 350, m: 1 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {member?.family || "My Reports"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FamilyMemberCard;

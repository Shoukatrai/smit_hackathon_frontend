import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paper, Typography, Stack, Chip, Divider, Button } from '@mui/material';
import AppLayout from '../components/dashLayout';

const SingleReport = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { report } = location.state || {};

    if (!report) {
        return (
            <Paper sx={{ p: 4, mt: 4, textAlign: 'center' }}>
                <Typography variant="h6">No report selected.</Typography>
                <Button onClick={() => navigate(-1)}>Go Back</Button>
            </Paper>
        );
    }

    const {
        reportName,
        reportDate,
        aiSummary,
        romanUrduSummary,
        abnormalValues = [],
        doctorQuestions = [],
        foodSuggestions,
        homeRemedies,
    } = report;

    return (
        <AppLayout>
            <Paper sx={{ maxWidth: 700, mx: 'auto', mt: 1, p: 1 }}>
                <Typography variant="h5">{reportName}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Date: {new Date(reportDate).toLocaleDateString()}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1">Summary (English):</Typography>
                <Typography variant="body1" gutterBottom>{aiSummary}</Typography>

                <Typography variant="subtitle1">Summary (Roman Urdu):</Typography>
                <Typography variant="body1" gutterBottom>{romanUrduSummary}</Typography>

                <Divider sx={{ my: 2 }} />

                {abnormalValues.length > 0 && (
                    <>
                        <Typography variant="subtitle1" color="error">Abnormal Values:</Typography>
                        <Stack spacing={1} mt={1} mb={2}>
                            {abnormalValues.map((item, idx) => (
                                <Chip
                                    key={idx}
                                    label={`${item.parameter}: ${item.value} (${item.remark})`}
                                    color="error"
                                    size="small"
                                />
                            ))}
                        </Stack>
                    </>
                )}

                {doctorQuestions.length > 0 && (
                    <>
                        <Typography variant="subtitle1">Questions for Doctor:</Typography>
                        <Stack spacing={1} mt={1} mb={2}>
                            {doctorQuestions.map((q, idx) => (
                                <Typography key={idx} variant="body2">• {q}</Typography>
                            ))}
                        </Stack>
                    </>
                )}

                {foodSuggestions && (
                    <>
                        <Typography variant="subtitle1" color="primary">Food Suggestions:</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" mt={0.5} mb={2}>
                            {foodSuggestions.split(',').map((food, idx) => (
                                <Chip key={idx} label={food.trim()} color="success" size="small" />
                            ))}
                        </Stack>
                    </>
                )}

                {homeRemedies && (
                    <>
                        <Typography variant="subtitle1">Home Remedies:</Typography>
                        <Typography variant="body2">{homeRemedies}</Typography>
                    </>
                )}
            </Paper>
        </AppLayout>
    );
};

export default SingleReport;

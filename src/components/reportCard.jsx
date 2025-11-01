import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
  Box,
} from '@mui/material';
import { Description, WarningAmber } from '@mui/icons-material';

const ReportCard = ({ report, onView }) => {
  const {
    reportName,
    reportDate,
    aiSummary,
    abnormalParameters = [],
    abnormalValues = [],
    abnormalRemarks = [],
  } = report;

  return (
    <Card
      sx={{
        minWidth: 320,
        maxWidth: 380,
        m: 2,
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(245,250,255,0.85))',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
          <Description color="primary" />
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ textTransform: 'capitalize' }}
          >
            {reportName}
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, fontStyle: 'italic' }}
        >
          {new Date(reportDate).toLocaleDateString()}
        </Typography>

        <Divider sx={{ my: 1 }} />

        {aiSummary && (
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: 'text.primary',
              lineHeight: 1.5,
              maxHeight: 80,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {aiSummary.length > 160
              ? `${aiSummary.slice(0, 160)}...`
              : aiSummary}
          </Typography>
        )}

        {abnormalParameters.length > 0 && (
          <Box mt={2}>
            <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
              <WarningAmber color="error" fontSize="small" />
              <Typography
                variant="subtitle2"
                color="error"
                fontWeight={600}
              >
                Abnormal Values
              </Typography>
            </Stack>

            <Stack
              direction="row"
              flexWrap="wrap"
              spacing={1}
              useFlexGap
              mt={1}
            >
              {abnormalParameters.map((param, idx) => (
                <Chip
                  key={idx}
                  label={`${param}: ${abnormalValues[idx]} (${abnormalRemarks[idx]})`}
                  color="error"
                  variant="outlined"
                  size="small"
                  sx={{
                    fontSize: '0.75rem',
                    borderRadius: '8px',
                    bgcolor: 'rgba(255,0,0,0.05)',
                  }}
                />
              ))}
            </Stack>
          </Box>
        )}
      </CardContent>

      <Divider />

      <CardActions sx={{ justifyContent: 'flex-end', px: 3, pb: 2 }}>
        <Button
          onClick={() => onView(report)}
          variant="contained"
          size="small"
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            px: 2.5,
            py: 0.5,
            fontWeight: 500,
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReportCard;

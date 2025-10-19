import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
} from '@mui/material';

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
    <Card sx={{ minWidth: 300, maxWidth: 400, m: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {reportName}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {new Date(reportDate).toLocaleDateString()}
        </Typography>

        {aiSummary && (
          <Typography variant="body1" gutterBottom>
            {aiSummary}
          </Typography>
        )}

        {abnormalParameters.length > 0 && (
          <Stack spacing={1} mt={2}>
            <Typography variant="subtitle2">Abnormal Values:</Typography>
            {abnormalParameters.map((param, idx) => (
              <Chip
                key={idx}
                label={`${param}: ${abnormalValues[idx]} (${abnormalRemarks[idx]})`}
                color="error"
                variant="outlined"
                size="small"
              />
            ))}
          </Stack>
        )}
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => onView(report)}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReportCard;

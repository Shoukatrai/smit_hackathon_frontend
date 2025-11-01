import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  Stack,
  Chip,
  Divider,
  Button,
  Box,
  Fade,
} from "@mui/material";
import AppLayout from "../components/dashLayout";
import {
  LocalHospital,
  QuestionAnswer,
  Restaurant,
  Healing,
  WarningAmber,
  ArrowBack,
  Description,
  Download,
} from "@mui/icons-material";

const SingleReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { report } = location.state || {};

  // Handle missing report
  if (!report) {
    return (
      <AppLayout>
        <Paper
          sx={{
            p: 6,
            mt: 10,
            textAlign: "center",
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255,255,255,0.4)",
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          <Typography variant="h6" gutterBottom>
            No report selected.
          </Typography>
          <Button
            startIcon={<ArrowBack />}
            variant="contained"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </Paper>
      </AppLayout>
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
    reportUrl,
  } = report;

  return (
    <AppLayout>
      <Fade in timeout={600}>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            sx={{ mt: 4, mb: 2, mx: 2 }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              color="primary"
              sx={{ mb: { xs: 1, sm: 0 } }}
            >
              Report Details from AI
            </Typography>

            {reportUrl && (
              <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<Download />}
                component="a"
                href={reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Report
              </Button>
            )}
          </Box>

          <Paper
            sx={{
              maxWidth: 800,
              mx: "auto",
              p: 4,
              borderRadius: 5,
              boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(240,248,255,0.95))",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Header Info */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              flexWrap="wrap"
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Description color="primary" />
                <Typography variant="h5" fontWeight={600}>
                  {reportName || "Untitled Report"}
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {reportDate
                  ? new Date(reportDate).toLocaleDateString()
                  : "No Date"}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* English Summary */}
            {aiSummary && (
              <Stack spacing={1.5} mb={3}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Summary (English)
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {aiSummary}
                </Typography>
              </Stack>
            )}

            {/* Roman Urdu Summary */}
            {romanUrduSummary && (
              <Stack spacing={1.5} mb={3}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Summary (Roman Urdu)
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {romanUrduSummary}
                </Typography>
              </Stack>
            )}

            {/* Abnormal Values */}
            {abnormalValues.length > 0 && (
              <>
                <Divider sx={{ my: 2 }} />
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <WarningAmber color="error" />
                  <Typography
                    variant="subtitle1"
                    color="error"
                    fontWeight={600}
                  >
                    Abnormal Values
                  </Typography>
                </Stack>
                <Stack spacing={1.5} flexWrap="wrap" direction="row" mb={2}>
                  {abnormalValues.map((item, idx) => (
                    <Chip
                      key={idx}
                      label={`${item.parameter}: ${item.value} (${item.remark})`}
                      color="error"
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Stack>
              </>
            )}

            {/* Questions for Doctor */}
            {doctorQuestions.length > 0 && (
              <>
                <Divider sx={{ my: 2 }} />
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <QuestionAnswer color="primary" />
                  <Typography variant="subtitle1" fontWeight={600}>
                    Questions for Doctor
                  </Typography>
                </Stack>
                <Stack spacing={0.8} mb={2}>
                  {doctorQuestions.map((q, idx) => (
                    <Typography key={idx} variant="body2">
                      • {q}
                    </Typography>
                  ))}
                </Stack>
              </>
            )}

            {/* Food Suggestions */}
            {foodSuggestions && (
              <>
                <Divider sx={{ my: 2 }} />
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <Restaurant color="success" />
                  <Typography
                    variant="subtitle1"
                    color="success.main"
                    fontWeight={600}
                  >
                    Food Suggestions
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  {foodSuggestions.split(",").map((food, idx) => (
                    <Chip
                      key={idx}
                      label={food.trim()}
                      color="success"
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </>
            )}

            {/* Home Remedies */}
            {homeRemedies && (
              <>
                <Divider sx={{ my: 2 }} />
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <Healing color="secondary" />
                  <Typography variant="subtitle1" fontWeight={600}>
                    Home Remedies
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.primary">
                  {homeRemedies}
                </Typography>
              </>
            )}

            <Divider sx={{ my: 3 }} />

            <Button
              startIcon={<ArrowBack />}
              variant="outlined"
              onClick={() => navigate(-1)}
            >
              Back to Reports
            </Button>
          </Paper>
        </Box>
      </Fade>
    </AppLayout>
  );
};

export default SingleReport;

import * as React from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography, CircularProgress, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL, toastAlert } from '../utils';
import { apiEndPoints } from '../constant/apiEndPoints';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90vw', sm: 400, md: 500 },
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 8,
    p: { xs: 2, sm: 4 },
    border: 'none',
    outline: 'none',
};

export const AddReportModal = ({ open, setOpen, isRefresh, setIsRefresh }) => {
    const [loading, setLoading] = React.useState(false);
    const [reportFile, setReportFile] = React.useState(null);
    const handleClose = () => setOpen(false);

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            reportName: "",
            family:""
        }
    });

    const handleFileChange = (e) => {
        setReportFile(e.target.files[0]);
    };

    const onSubmit = async (formDataObj) => {
        try {
            console.log("formDataObj" , formDataObj)
            if (!reportFile) {
                alert("Please select a file.");
                return;
            }

            setLoading(true);

            const formData = new FormData();
            formData.append("file", reportFile);
            formData.append("reportName", formDataObj.reportName);
            const apiUrl = `${BASE_URL}${apiEndPoints.uploadReport}`
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${Cookies.get("token")}`
                }
            });
            console.log("response", response)

            setLoading(false);

            if (response.data.status) {
                toastAlert({
                    type: "success",
                    message: response.data.message || "Report Addedd Successfully"
                })
                reset();
                setReportFile(null);
                handleClose();
                setIsRefresh(!isRefresh);
            } else {
                toastAlert({
                    type: "error",
                    message: "Report Adding Error"
                })
            }

        } catch (err) {
            setLoading(false);
            toastAlert({
                type: "error",
                message: err.message || "Report Adding Error"
            })
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{ backdrop: { timeout: 500 } }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Stack
                        gap={1.5}
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Typography variant="h4" align="center" fontWeight={700} color="primary">
                            Add Medical Report
                        </Typography>

                        <Controller
                            control={control}
                            name="reportName"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Report Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="family"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Family Member"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            )}
                        />

                        <Button variant="outlined" component="label">
                            Upload Report (PDF/Image)
                            <input
                                type="file"
                                accept="application/pdf,image/*"
                                hidden
                                onChange={handleFileChange}
                            />
                        </Button>

                        {reportFile && (
                            <Typography variant="body2" color="text.secondary">
                                Selected file: {reportFile.name}
                            </Typography>
                        )}

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ mt: 2, color: 'white' }}
                        >
                            {loading ? <CircularProgress color="inherit" size={20} /> : "Upload Report"}
                        </Button>
                    </Stack>
                </Box>
            </Fade>
        </Modal>
    );
};

import React, { useEffect, useState } from 'react';
import AppLayout from '../components/dashLayout'
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { AddReportModal } from '../components/reportModal';
import ReportCard from '../components/reportCard';
import axios from 'axios';
import { BASE_URL } from '../utils';
import { apiEndPoints } from '../constant/apiEndPoints';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
const Report = () => {
    const [open, setOpen] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [reports, setReports] = useState([]);

    const getReports = async () => {
        try {
            const api = `${BASE_URL}${apiEndPoints.getReport}`;
            const response = await axios.get(api, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`, // or Cookies.get("token")
                },
            });
            console.log("response", response)
            if (response.data) {
                setReports(response.data);
            }
        } catch (error) {
            console.error("Error fetching reports:", error.message);
        }
    };
    const navigate = useNavigate()
    const onView = (report)=>{
        navigate(`/single_report`, {state:{
            report : report
        }})
    }

    useEffect(() => {
        getReports();
    }, [isRefresh]);
    return (
        <>
            <AppLayout>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {reports.map((report) => (
                        <ReportCard key={report._id} report={report} onView={()=>onView(report)} />
                    ))}
                </div>

                <AddReportModal
                    open={open}
                    setOpen={setOpen}
                    isRefresh={isRefresh}
                    setIsRefresh={setIsRefresh}
                />

                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        position: 'fixed',
                        bottom: 32,
                        right: 32,
                        borderRadius: '50%',
                        minWidth: 56,
                        minHeight: 56,
                        boxShadow: 3,
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => setOpen(true)} 
                >
                    <Add fontSize="large" />
                </Button>
            </AppLayout>
        </>
    )
}

export default Report
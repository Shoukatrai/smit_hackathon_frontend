import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import FamilyMemberCard from '../../components/FamilyMemberCard';
import AppLayout from '../../components/dashLayout';
import { BASE_URL } from '../../utils';
import { apiEndPoints } from '../../constant/apiEndPoints';
import axios from 'axios';
import Cookies from "js-cookie"


const FamilyPage = () => {
  const [reports , setReports] = useState([])
    const getReports = async () => {
          try {
              const api = `${BASE_URL}${apiEndPoints.getReport}`;
              const response = await axios.get(api, {
                  headers: {
                      Authorization: `Bearer ${Cookies.get('token')}`, 
                  },
              });
              if (response.data) {
                  setReports(response.data.data);
              }
          } catch (error) {
              console.error("Error fetching reports:", error.message);
          }
      };
      useEffect(()=>{
        getReports()
      })
  return (
    <AppLayout>
      <Grid container spacing={2}>
        {reports.map((member) => (
          <Grid item key={member._id}>
            <FamilyMemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
};

export default FamilyPage;

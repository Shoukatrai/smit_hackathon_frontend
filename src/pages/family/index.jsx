import React, { useState, useEffect } from "react";
import AppLayout from "../../components/dashLayout";
import FamilyCard from "../../components/FamilyCard";
import { Button, Stack } from "@mui/material";
import { AddFamilyMember } from "../../components/FamilyMemberModal";
import { Add } from "@mui/icons-material";
import axios from "axios";
import { BASE_URL } from "../../utils";
import { apiEndPoints } from "../../constant/apiEndPoints";
import Cookies from "js-cookie";

const FamilyMembers = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);

  const fetchMembers = async () => {
    try {
      const url = `${BASE_URL}${apiEndPoints.getFamilyMember}`;
      const members = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      setData(members.data.data);
      console.log("members", members);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [isRefresh]);
  return (
    <>
      <AppLayout>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          {data.map((member) => {
            return <FamilyCard member={member} key={member?._id} />;
          })}
        </Stack>
        {open && (
          <AddFamilyMember
            setOpen={setOpen}
            open={open}
            isRefresh={isRefresh}
            setIsRefresh={setIsRefresh}
          />
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            borderRadius: "50%",
            minWidth: 56,
            minHeight: 56,
            boxShadow: 3,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setOpen(true)}
        >
          <Add fontSize="large" />
        </Button>
      </AppLayout>
    </>
  );
};

export default FamilyMembers;

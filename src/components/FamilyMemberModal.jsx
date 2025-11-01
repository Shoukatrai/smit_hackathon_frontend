import * as React from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  CircularProgress,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL, toastAlert } from "../utils";
import { apiEndPoints } from "../constant/apiEndPoints";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90vw", sm: 400, md: 500 },
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 8,
  p: { xs: 2, sm: 4 },
  border: "none",
  outline: "none",
};

export const AddFamilyMember = ({ open, setOpen, isRefresh, setIsRefresh }) => {
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => setOpen(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      relation: "",
      age: "",
      gender: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      console.log(data);
      setLoading(true);
      const apiUrl = `${BASE_URL}${apiEndPoints.addFamilyMember}`;
      const response = await axios.post(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      console.log("response", response);

      setLoading(false);

      if (response.data.status) {
        toastAlert({
          type: "success",
          message: response.data.message || "Family Member Addedd Successfully",
        });
        reset();
        handleClose();
        setIsRefresh(!isRefresh);
      } else {
        toastAlert({
          type: "error",
          message: "Family Member Adding Error",
        });
      }
    } catch (err) {
      setLoading(false);
      toastAlert({
        type: "error",
        message: err.message || "Report Adding Error",
      });
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
          <Stack gap={1.5} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Typography
              variant="h4"
              align="center"
              fontWeight={700}
              color="primary"
            >
              Add Family Member
            </Typography>

            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Gender"
                  variant="outlined"
                  fullWidth
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="age"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Age"
                  variant="outlined"
                  fullWidth
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="relation"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Relation"
                  variant="outlined"
                  fullWidth
                  required
                  select
                >
                  <MenuItem value={"mother"}>Mother</MenuItem>
                  <MenuItem value={"father"}>Father</MenuItem>
                  <MenuItem value={"brother"}>Brother</MenuItem>
                  <MenuItem value={"sister"}>Sister</MenuItem>
                  <MenuItem value={"grand_father"}>Grandfather</MenuItem>
                  <MenuItem value={"grand_mother"}>Grandmother</MenuItem>
                </TextField>
              )}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2, color: "white" }}
            >
              {loading ? <CircularProgress color="inherit" size={20} /> : "Add"}
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

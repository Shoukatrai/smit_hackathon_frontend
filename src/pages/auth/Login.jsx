import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Button,
    Stack,
    TextField,
    Typography,
    Paper,
    Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    const [Loading, setLoading] = useState(false)
    const {
        control,
        handleSubmit,
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data) => {
         try {
                    console.log('Login data:', data);
                   toastAlert({
                        type : "success",
                        message: "success"
                    }) 
                } catch (error) {
                    toastAlert({
                        type : "error",
                        message: "error"
                    })
                }
    };

    return (
        <Paper
            elevation={3}
            sx={{
                width: 360,
                mx: 'auto',
                mt: 10,
                p: 4,
                borderRadius: 2,
                textAlign: 'center',
            }}
        >
            <Typography variant="h5" mb={3}>
                Login
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={2}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email"
                                type="email"
                                fullWidth
                            />
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Password"
                                type="password"
                                fullWidth
                            />
                        )}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={Loading}
                    >
                        {Loading ? 'Logging in...' : 'Login'}
                    </Button>
                    <Box>
                        <Typography>Dont have an account!</Typography><Link style={{
                            color: "red",
                        }} to={"/signup"}>Signup</Link>
                    </Box>
                </Stack>
            </form>
        </Paper>
    );
};

export default Login;

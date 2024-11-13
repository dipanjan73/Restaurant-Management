import React, { useContext, useState } from 'react';
import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import './auth.css';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Authenticate } from './AuthContext';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false); // Track if we are showing Register form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Auth function
  const { setAuth } = useContext(Authenticate);

  // Toggle between Login and Register form
  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  // Form validation for Login
  const handleLogin = (e) => {
    // Example of basic email and password validation
    const isValidEmail = e.Email && e.Email.includes("@");
    const isValidPassword = e.Psw && e.Psw.length >= 4;

    if (isValidEmail && isValidPassword) {
      setAuth(true);
      toast.success("Login Successful!");
      navigate("/"); // Navigate to the homepage
    } else {
      toast.error("Invalid credentials");
    }
  };

  // Form validation for Register
  const handleRegister = (e) => {
    // Example of basic registration validation (should be improved)
    const isValidEmail = e.Email && e.Email.includes("@");
    const isValidPassword = e.Psw && e.Psw.length >= 4;
    const isPasswordMatch = e.Psw === e.ConfirmPassword;

    if (isValidEmail && isValidPassword && isPasswordMatch) {
      // Perform registration (e.g., send data to server)
      toast.success("Registration Successful!");
      setAuth(true);
      navigate("/"); // Navigate to the homepage
    } else {
      if (!isPasswordMatch) {
        toast.error("Passwords do not match");
      } else {
        toast.error("Please check your input");
      }
    }
  };

  return (
    <Container className='Auth'>
      <Typography className='first-title' variant='h6'>
        {isRegistering ? 'Register' : 'Sign In'}
      </Typography>
      <Typography className='second-title' variant='h4'>
        Discover Our Flavorful Symphony!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: 550 }}>
        <form onSubmit={handleSubmit(isRegistering ? handleRegister : handleLogin)}>
          <Card className='card' variant='outlined'>
            <TextField
              {...register("Email", { required: "Enter Email" })}
              error={errors.Email ? true : false}
              variant='standard'
              label="Enter Email"
              type='email'
              fullWidth
            />
            <TextField
              {...register("Psw", { required: "Enter Password" })}
              error={errors.Psw ? true : false}
              variant='standard'
              label="Enter Password"
              type='password'
              fullWidth
            />
            {isRegistering && (
              <TextField
                {...register("ConfirmPassword", { required: "Confirm your Password" })}
                error={errors.ConfirmPassword ? true : false}
                variant='standard'
                label="Confirm Password"
                type='password'
                fullWidth
              />
            )}
            <Box sx={{ width: "100%", display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
              <Link to='/'>
                <Button variant='text'>Cancel</Button>
              </Link>
              <Button variant='contained' type='submit' endIcon={<ArrowForward />}>
                {isRegistering ? 'Register' : 'Login'}
              </Button>
            </Box>
          </Card>
        </form>
      </Box>

      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Typography variant='body2'>
          {isRegistering
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <Button onClick={toggleForm} variant='text'>
            {isRegistering ? 'Login' : 'Register'}
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default AuthPage;

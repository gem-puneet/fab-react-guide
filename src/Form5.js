import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const Form5 = ({ nextStep, prevStep, updateFormData, formData, flag }) => {
  const [email, setEmail] = useState(formData.email);
  const [number, setNumber] = useState(formData.number);
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   setEmail(formData.email);
  //   setNumber(formData.number);
  // }, [formData.email, formData.number]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(email)) {
      errors.email = 'Email is not valid';
      valid = false;
    }

    if (!number) {
      errors.number = 'Number is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleNext = () => {
    if (validate() || flag) {
      updateFormData({ email, number });
      nextStep();
    }
  };
  const handlePrev = () => {
    updateFormData({ email, number });
    prevStep();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Form 2
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Number"
        fullWidth
        margin="normal"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        error={!!errors.number}
        helperText={errors.number}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handlePrev}
        style={{ marginRight: '10px' }}
      >
        Previous
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </Container>
  );
};

export default Form5;

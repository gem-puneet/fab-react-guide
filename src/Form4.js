import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const Form4 = ({ nextStep, updateFormData, formData, flag }) => {
  const [firstName, setFirstName] = useState(formData.firstName);
  const [lastName, setLastName] = useState(formData.lastName);
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   setFirstName(formData.firstName);
  //   setLastName(formData.lastName);
  // }, [formData.firstName, formData.lastName]);

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!firstName) {
      errors.firstName = 'First name is required';
      valid = false;
    }

    if (!lastName) {
      errors.lastName = 'Last name is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleNext = () => {
    if (validate() || flag) {
      updateFormData({ firstName, lastName });
      nextStep();
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Form 1
      </Typography>
      <TextField
        label="First Name"
        fullWidth
        margin="normal"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <TextField
        label="Last Name"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </Container>
  );
};

export default Form4;

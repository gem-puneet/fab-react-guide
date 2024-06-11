import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const Form6 = ({ prevStep, updateFormData, formData, flag }) => {
  const [password, setPassword] = useState(formData.password);
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   setPassword(formData.password);
  // }, [formData.password]);
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (submitClicked) {
      console.log('Form Data:', { ...formData, password });
      setSubmitClicked(false);
    }
  }, [submitClicked, formData, password]);

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };
  const handlePrev = () => {
    updateFormData({ password });
    prevStep();
  };

  const handleSubmit = () => {
    if (validate() || flag) {
      updateFormData({ password });
      setSubmitClicked(true);

      console.log('Form Data:', formData);
      alert('Form submitted successfully');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Form 3
      </Typography>
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!errors.password}
        helperText={errors.password}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handlePrev}
        style={{ marginRight: '10px' }}
      >
        Previous
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default Form6;

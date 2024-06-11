import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

export default function Form1({ updateFormValidation }) {
  const [values, setValues] = useState({
    requiredField1: '',
    password1: '',
    number1: '',
    search1: '',
    helperText1: '',
  });

  const [errors, setErrors] = useState({
    requiredField1: false,
    password1: false,
    number1: false,
    search1: false,
    helperText1: false,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
    setErrors({ ...errors, [id]: value === '' });
    updateFormValidation(
      Object.values({ ...values, [id]: value }).every((v) => v !== '')
    );
  };

  useEffect(() => {
    const isValid = Object.values(values).every((value) => value !== '');
    updateFormValidation(isValid);
  }, [values, updateFormValidation]);

  /*
  useEffect(() => {
    const tour = driver({
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: '✕',
      animate: false,
      steps: [
        {
          element: '#requiredField1',
          popover: {
            title: 'Required Field 1',
            description: 'This is the first field. Please enter the required information.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#password1',
          popover: {
            title: 'Password 1',
            description: 'This is the password field. Please enter your password.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#number1',
          popover: {
            title: 'Number 1',
            description: 'This is the number field. Please enter a number.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#search1',
          popover: {
            title: 'Search 1',
            description: 'This is the search field. Please enter a search term.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#helperText1',
          popover: {
            title: 'Helper Text 1',
            description: 'This is the helper text field. Please enter some text.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        }
      ]
    });

    tour.drive();
  }, []);
*/
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="requiredField1"
          label="CEO Name"
          value={values.requiredField1}
          onChange={handleChange}
          error={errors.requiredField1}
          helperText={errors.requiredField1 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="password1"
          label="Number of Employee"
          type="text"
          autoComplete="current-password"
          value={values.password1}
          onChange={handleChange}
          error={errors.password1}
          helperText={errors.password1 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="number1"
          label="Production"
          type="text"
          value={values.number1}
          onChange={handleChange}
          error={errors.number1}
          helperText={errors.number1 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="search1"
          label="Finance"
          type="text"
          value={values.search1}
          onChange={handleChange}
          error={errors.search1}
          helperText={errors.search1 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="helperText1"
          label="Sales"
          value={values.helperText1}
          onChange={handleChange}
          error={errors.helperText1}
          helperText={
            errors.helperText1
              ? 'This field is required'
              : 'Some important text'
          }
        />
      </div>
    </Box>
  );
}

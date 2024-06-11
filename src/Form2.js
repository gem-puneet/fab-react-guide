import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

export default function Form2({ updateFormValidation }) {
  const [values, setValues] = React.useState({
    requiredField2: '',
    password2: '',
    number2: '',
    search2: '',
    helperText2: '',
  });

  const [errors, setErrors] = React.useState({
    requiredField2: false,
    password2: false,
    number2: false,
    search2: false,
    helperText2: false,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
    setErrors({ ...errors, [id]: value === '' });
    updateFormValidation(
      Object.values({ ...values, [id]: value }).every((v) => v !== '')
    );
  };

  /*useEffect(() => {
    const tour = driver({
      showProgress: true,
      nextBtnText: '—›',
      prevBtnText: '‹—',
      doneBtnText: '✕',
      animate: false,
      steps: [
        {
          element: '#requiredField2',
          popover: {
            title: 'Required Field 2',
            description: 'This is the first field. Please enter the required information.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#password2',
          popover: {
            title: 'Password 2',
            description: 'This is the password field. Please enter your password.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#number2',
          popover: {
            title: 'Number 2',
            description: 'This is the number field. Please enter a number.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#search2',
          popover: {
            title: 'Search 2',
            description: 'This is the search field. Please enter a search term.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#helperText2',
          popover: {
            title: 'Helper Text 2',
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
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="requiredField2"
          label="Aadhar Card"
          value={values.requiredField2}
          onChange={handleChange}
          error={errors.requiredField2}
          helperText={errors.requiredField2 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="password2"
          label="Pan Card"
          type="password"
          autoComplete="current-password"
          value={values.password2}
          onChange={handleChange}
          error={errors.password2}
          helperText={errors.password2 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="number2"
          label="Company ID"
          type="number"
          value={values.number2}
          onChange={handleChange}
          error={errors.number2}
          helperText={errors.number2 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="search2"
          label="Driving Licence"
          type="text"
          value={values.search2}
          onChange={handleChange}
          error={errors.search2}
          helperText={errors.search2 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="helperText2"
          label="Green Card Number"
          value={values.helperText2}
          onChange={handleChange}
          error={errors.helperText2}
          helperText={
            errors.helperText2
              ? 'This field is required'
              : 'Some important text'
          }
        />
      </div>
    </Box>
  );
}

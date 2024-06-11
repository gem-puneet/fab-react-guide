import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

export default function Form3({ updateFormValidation, handleSubmit }) {
  const [values, setValues] = React.useState({
    requiredField3: '',
    password3: '',
    number3: '',
    search3: '',
    helperText3: '',
  });

  const [errors, setErrors] = React.useState({
    requiredField3: false,
    password3: false,
    number3: false,
    search3: false,
    helperText3: false,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
    setErrors({ ...errors, [id]: value === '' });
    updateFormValidation(
      Object.values({ ...values, [id]: value }).every((v) => v !== '')
    );
  };

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
          element: '#requiredField3',
          popover: {
            title: 'Required Field 3',
            description: 'This is the first field. Please enter the required information.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#password3',
          popover: {
            title: 'Password 3',
            description: 'This is the password field. Please enter your password.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#number3',
          popover: {
            title: 'Number 3',
            description: 'This is the number field. Please enter a number.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#search3',
          popover: {
            title: 'Search 3',
            description: 'This is the search field. Please enter a search term.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#helperText3',
          popover: {
            title: 'Helper Text 3',
            description: 'This is the helper text field. Please enter some text.',
            side: 'top',
            align: 'center',
            popoverClass: 'driverjs-theme'
          }
        },
        {
          element: '#submitBtn3',
          popover: {
            title: 'Submit Button 3',
            description: 'Click here to submit the form.',
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
          id="requiredField3"
          label="Company Name"
          value={values.requiredField3}
          onChange={handleChange}
          error={errors.requiredField3}
          helperText={errors.requiredField3 ? 'This field is required' : ''}
  
        />
        <TextField
          required
          id="password3"
          label="Company Address"
          type="password"
          autoComplete="current-password"
          value={values.password3}
          onChange={handleChange}
          error={errors.password3}
          helperText={errors.password3 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="number3"
          label="Company Email"
          type="number"
          value={values.number3}
          onChange={handleChange}
          error={errors.number3}
          helperText={errors.number3 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="search3"
          label="Website"
          type="search"
          value={values.search3}
          onChange={handleChange}
          error={errors.search3}
          helperText={errors.search3 ? 'This field is required' : ''}
        />
        <TextField
          required
          id="helperText3"
          label="Company Domain"
          value={values.helperText3}
          onChange={handleChange}
          error={errors.helperText3}
          helperText={
            errors.helperText3
              ? 'This field is required'
              : 'Some important text'
          }
        />
        <Button
          id="submitBtn3"
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}

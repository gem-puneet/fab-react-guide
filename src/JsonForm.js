import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const formSteps = [
  {
    step: 1,
    fields: [
      { label: 'First Name', name: 'firstName', type: 'text', required: true },
      { label: 'Last Name', name: 'lastName', type: 'text', required: true },
      { label: 'Email', name: 'email', type: 'email', required: true },
      { label: 'Phone Number', name: 'phoneNumber', type: 'text', required: true },
      { label: 'Residential Address', name: 'residentialaddress', type: 'text', required: true },
      { label: 'Permanent Address', name: 'permanentaddress', type: 'text', required: true },

    ],
  },
  {
    step: 2,
    fields: [
      { label: 'Father Name', name: 'fname', type: 'text', required: true },
      { label: 'Mother Name', name: 'mname', type: 'text', required: true },
      { label: 'Collage Name', name: 'cname', type: 'text', required: true },
      { label: 'Qualification', name: 'qualification', type: 'text', required: true },
      { label: 'Password', name: 'password', type: 'password', required: true },
      { label: 'Confirm Password', name: 'confirmPassword', type: 'password', required: true },

    ],
  },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formError, setFormError] = useState({});
  const [formValues, setFormValues] = useState({});

  const flag = true;  // flag used to bypass the validation 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleValidation = () => {
    let formErrors = {};
    let isValid = true;

    formSteps[activeStep].fields.forEach((item) => {
      if (item.required && !formValues[item.name]) {
        formErrors[item.name] = `${item.name} is required!!!`;
        isValid = false;
      }

      if (item.name === 'email' && formValues[item.name]) {
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailPattern.test(formValues[item.name])) {
          formErrors[item.name] = 'Invalid email';
          isValid = false;
        }
      }

      if (item.name === 'confirmPassword' && formValues[item.name]) {
        if (formValues['password'] !== formValues[item.name]) {
          formErrors[item.name] = 'Confirm password does not match';
          isValid = false;
        }
      }
    });

    setFormError(formErrors);
    return isValid;
  };

  const handleNext = () => {
    if (flag) {
      setActiveStep((prevStep) => prevStep + 1);
    }
   
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  useEffect(()=>{
    startGuide()
  },[])

  function startGuide() {
      const driverObj = driver({
        showProgress: true,
        nextBtnText: '—›',
        prevBtnText: '‹—',
        doneBtnText: '✕',
        animate: false,
        disableActiveInteraction: true,
        steps : [
          {
            element: '#firstName',
            popover: {
              title: 'First Name',
              description: 'Please enter your first name.',
            },

          },
          {
            element: '#lastName',
            popover: {
              title: 'Last Name',
              description: 'Please enter your last name.',
            },
          },

          {
            element: '#email',
            popover: {
              title: 'Email',
              description: 'Please enter your email address.',
            },
          },
          {
            element: '#phoneNumber',
            popover: {
              title: 'Phone Number',
              description: 'Please enter your phone number.',
            },
          },
          {
            element: '#residentialaddress',
            popover: {
              title: 'Residential Address',
              description: 'Please enter your residential address.',
            },
          },
          {
            element: '#permanentaddress',
            popover: {
              title: 'Permanent Address',
              description: 'Please  enter your permanent address.',
            },

          },
          {
            element: '#fname',
            popover: {
              title: 'Father Name',
              description: 'Please enter your Father Name.',
            },
          },
          {
            element: '#mname',
            popover: {
              title: 'Mother Name',
              description: 'Please enter your Mother Name.',
            },
            
          },
          {
            element: '#cname',
            popover: {
              title: 'Collage Name',
              description: 'Please enter your collage Name.',
            },
          },
          {
            element: '#qualification',
            popover: {
              title: 'Qualification',
              description: 'Please enter your Qualification.',
            },
            
          },
          {
            element: '#password',
            popover: {
              title: 'Password',
              description: 'Please enter your password.',
            },
          },
          {
            element: '#confirmPassword',
            popover: {
              title: 'Confirm Password',
              description: 'Please enter your confirm password .',
            },
            
          }
        ],
        onNextClick: (element) => {
          const currentStepFields = formSteps[activeStep].fields;
          const isLastElement = currentStepFields[currentStepFields.length - 1].name === element.id;
          if (isLastElement) {
            handleNext();
          }
          setTimeout(()=>{
                   driverObj.moveNext();
          },0)
        },
        onPrevClick:(element)=>{
          const currentStepFields = formSteps[activeStep+1].fields;
          const isFirstElement = currentStepFields[0].name === element.id;
          if (isFirstElement) {
            handleBack();
          }
          setTimeout(()=>{
                   driverObj.movePrevious();
          },0)
        }
      });

      driverObj.drive();
  
    
  }
  return (
    <Container maxWidth="sm">
      {/* <Button onClick={startTour} variant="contained" color="primary">
        Start Tour
      </Button> */}
      <form onSubmit={handleSubmit}>
        {formSteps[activeStep].fields.map((field, index) => (
          <TextField
            key={index}
            id={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            required={field.required}
            fullWidth
            margin="normal"
            value={formValues[field.name] || ''}
            onChange={handleChange}
            error={!!formError[field.name]}
            helperText={formError[field.name]}
          />
        ))}
        <Box mt={2}>
          {activeStep > 0 && (
            <Button id={`back-button-step${activeStep}`} onClick={handleBack} variant="contained" color="secondary">
              Back
            </Button>
          )}
          {activeStep < formSteps.length - 1 ? (
            <Button id={`next-button-step${activeStep}`} onClick={handleNext} variant="contained" color="primary" style={{ marginLeft: 8 }}>
              Next
            </Button>
          ) : (
            <Button id="submit-button" type="submit" variant="contained" color="primary" style={{ marginLeft: 8 }}>
              Submit
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default MultiStepForm;

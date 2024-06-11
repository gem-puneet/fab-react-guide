import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import './App.css'; // Import the CSS file
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const steps = [
  {
    label: 'Organisation Structure',
    description: 'Fill out the details in Organisation Structure.',
  },
  {
    label: 'Upload Your Documents',
    description: 'Please Upload your related documents',
  },
  {
    label: 'Your Business Details',
    description: 'Fill out your business details',
  },
];

export default function FormGuided() {
  const [activeStep, setActiveStep] = useState(0);
  const [form1Valid, setForm1Valid] = useState(false);
  const [form2Valid, setForm2Valid] = useState(false);
  const [form3Valid, setForm3Valid] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true); // Track if the user is on the tour

  const handleNext = () => {
    if (validateCurrentForm()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleSubmit = () => {
    if (form3Valid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setForm1Valid(false);
    setForm2Valid(false);
    setForm3Valid(false);
  };

  const validateCurrentForm = () => {
    if (isFirstTimeUser) return true; // Skip validation during the tour
    switch (activeStep) {
      case 0:
        return form1Valid;
      case 1:
        return form2Valid;
      case 2:
        return form3Valid;
      default:
        return false;
    }
  };

  const updateFormValidation = (formIndex, isValid) => {
    switch (formIndex) {
      case 0:
        setForm1Valid(isValid);
        break;
      case 1:
        setForm2Valid(isValid);
        break;
      case 2:
        setForm3Valid(isValid);
        break;
      default:
        break;
    }
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <div id="form1">
            <Form1
              updateFormValidation={(isValid) =>
                updateFormValidation(0, isValid)
              }
            />
          </div>
        );
      case 1:
        return (
          <div id="form2">
            <Form2
              updateFormValidation={(isValid) =>
                updateFormValidation(1, isValid)
              }
            />
          </div>
        );
      case 2:
        return (
          <div id="form3">
            <Form3
              updateFormValidation={(isValid) =>
                updateFormValidation(2, isValid)
              }
              handleSubmit={handleSubmit}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const TourType = "only-forms"
  //const TourType = 'forms-with-fields';

  useEffect(() => {
    xyz();
  }, []);

  function xyz() {
    if (TourType == 'only-forms') {
      const driverObj = driver({
        showProgress: true,
        nextBtnText: 'Next 🠊',
        prevBtnText: '🠈 Prev',
        doneBtnText: 'Done ✔',
        animate: false,
        disableActiveInteraction : true,
        smoothScroll : true,
        overlayColor : "#082C3D",
        overlayOpacity : 0.6,
        steps: [
          {
            element: '#form1',
            popover: {
              title: 'Organisation Structure',
              description: 'Fill out the details in Organisation Structure.',
              side: 'top',
              align: 'center',
              popoverClass: 'driverjs-themes'
            },
          },
          {
            element: '#form2',
            popover: {
              title: 'Upload Your Documents',
              description: 'Please Upload your related documents',
              side: 'top',
              align: 'center',
              popoverClass: 'driverjs-themes'
            },
          },
          {
            element: '#form3',
            popover: {
              title: 'Your Business Details',
              description: 'Fill out your business details',
              side: 'top',
              align: 'center',
              popoverClass: 'driverjs-themes'
            },
          },
        ],
        onNextClick: () => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1); // Manually advance the form step
          setTimeout(() => {
            driverObj.moveNext();
          }, 0);
          if (driverObj.isLastStep()) {
            driverObj.destroy();
          }
        },
        onPrevClick: (element) => {
          setActiveStep((prevActiveStep) => prevActiveStep - 1); // Manually go back to the previous form step
          setTimeout(() => {
            driverObj.movePrevious();
          }, 0);
          if (element.id == 'form3') {
            const divElement = document.getElementById('2');
            divElement.classList.remove('highlighted');
          } else if (element.id == 'form2') {
            const divElement = document.getElementById('1');
            divElement.classList.remove('highlighted');
          }
        },
        onDestroyed: (element) => {
          driverObj.destroy();
          setActiveStep(0); // Redirect to Form 1
          if (element.id == 'form1') {
            const divElement = document.getElementById('0');
            divElement.classList.remove('highlighted');
          } else if (element.id == 'form2') {
            const divElement = document.getElementById('1');
            divElement.classList.remove('highlighted');
          } else if (element.id == 'form3') {
            const divElement = document.getElementById('2');
            divElement.classList.remove('highlighted');
          }
        },
        onHighlighted: (element) => {
          console.log(element.id);
          if (element.id == 'form1') {
            const divElement = document.getElementById('0');
            divElement.classList.add('highlighted');
          } else if (element.id == 'form2') {
            const divElement = document.getElementById('1');
            divElement.classList.add('highlighted');
          } else if (element.id == 'form3') {
            const divElement = document.getElementById('2');
            divElement.classList.add('highlighted');
          }
        },
        //driverObj.refresh();
      });

      driverObj.drive();
    }
    if (TourType == 'forms-with-fields') {
      const getForm1Steps = () => [
        {
          element: '#requiredField1',
          popover: {
            title: 'Required Field 1',
            description:
              'This is the first field. Please enter the required information.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#password1',
          popover: {
            title: 'Password 1',
            description:
              'This is the password field. Please enter your password.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#number1',
          popover: {
            title: 'Number 1',
            description: 'This is the number field. Please enter a number.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#search1',
          popover: {
            title: 'Search 1',
            description:
              'This is the search field. Please enter a search term.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#helperText1',
          popover: {
            title: 'Helper Text 1',
            description:
              'This is the helper text field. Please enter some text.',
            side: 'top',
            align: 'center',
            onNextClick: () => {
              setActiveStep((prevActiveStep) => prevActiveStep + 1); // Manually advance the form step
              setTimeout(() => {
                driverObj.moveNext();
              }, 0);
            },
          },
        },
      ];
      const getForm2Steps = () => [
        {
          element: '#requiredField2',
          popover: {
            title: 'Required Field 2',
            description:
              'This is the first field. Please enter the required information.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#password2',
          popover: {
            title: 'Password 2',
            description:
              'This is the password field. Please enter your password.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#number2',
          popover: {
            title: 'Number 2',
            description: 'This is the number field. Please enter a number.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#search2',
          popover: {
            title: 'Search 2',
            description:
              'This is the search field. Please enter a search term.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#helperText2',
          popover: {
            title: 'Helper Text 2',
            description:
              'This is the helper text field. Please enter some text.',
            side: 'top',
            align: 'center',
            onNextClick: () => {
              setActiveStep((prevActiveStep) => prevActiveStep + 1); // Manually advance the form step
              setTimeout(() => {
                driverObj.moveNext();
              }, 0);
            },
          },
        },
      ];
      const getForm3Steps = () => [
        {
          element: '#requiredField3',
          popover: {
            title: 'Required Field 3',
            description:
              'This is the first field. Please enter the required information.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#password3',
          popover: {
            title: 'Password 3',
            description:
              'This is the password field. Please enter your password.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#number3',
          popover: {
            title: 'Number 3',
            description: 'This is the number field. Please enter a number.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#search3',
          popover: {
            title: 'Search 3',
            description:
              'This is the search field. Please enter a search term.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#helperText3',
          popover: {
            title: 'Helper Text 3',
            description:
              'This is the helper text field. Please enter some text.',
            side: 'top',
            align: 'center',
          },
        },
        {
          element: '#submitBtn3',
          popover: {
            title: 'Submit Button 3',
            description: 'Click here to submit the form.',
            side: 'top',
            align: 'center',
          },
        },
      ];
      const driverObj = driver({
        showProgress: true,
        nextBtnText: '—›',
        prevBtnText: '‹—',
        doneBtnText: '✕',
        animate: false,
        disableActiveInteraction: true,
        smoothScroll: true,
        popoverOffset: 10,
        steps: [
          {
            element: '#form1',
            popover: {
              title: 'Form 1',
              description: 'This is form 1.',
              side: 'top',
              align: 'center',
            },
          },
          ...getForm1Steps(),
          {
            element: '#form2',
            popover: {
              title: 'Form 2',
              description: 'This is form 2.',
              side: 'top',
              align: 'center',
              onPrevClick: () => {
                setActiveStep((prevActiveStep) => prevActiveStep - 1); // Manually go back to the previous form step
                setTimeout(() => {
                  driverObj.movePrevious();
                }, 0);
              },
            },
          },
          ...getForm2Steps(),
          {
            element: '#form3',
            popover: {
              title: 'Form 3',
              description: 'This is form 3.',
              side: 'top',
              align: 'center',
              onPrevClick: () => {
                setActiveStep((prevActiveStep) => prevActiveStep - 1); // Manually go back to the previous form step
                setTimeout(() => {
                  driverObj.movePrevious();
                }, 0);
              },
            },
          },
          ...getForm3Steps(),
        ],
        onDestroyed: () => {
          driverObj.destroy();
          setActiveStep(0); // Redirect to Form 1
        },
      });

      driverObj.drive();
    }
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid
          item
          xs={12}
          sm={4}
          className="stepper-container"
          sx={{ paddingLeft: '40px' }}
        >
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label} id={index}>
                <StepLabel>{step.label}</StepLabel>
                <Typography variant="body2" color="textSecondary">
                  {step.description}
                </Typography>{' '}
                {/* Display description below label */}
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box sx={{ mb: 2 }}>
            <form
              id={`form-step-${activeStep}`}
              onSubmit={(e) => e.preventDefault()}
            >
              {renderForm()}
              {activeStep < steps.length - 1 && (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 2 }}
                  // Disable the button during the tour
                >
                  Next
                </Button>
              )}
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>All steps completed - you're finished</Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                </Paper>
              )}
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

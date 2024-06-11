import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const TestForm = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const flag = false;
  const [currentStep, setCurrentStep] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    password: '',
  });
  
  useEffect(() => {
    console.log('called');
    const step = parseInt(query.get('step')) || 1;
    setCurrentStep(step);
  }, [location.search, query]);

  useEffect(() => {
    if (
      currentStep === 2 &&
      (!formData.firstName || !formData.lastName) &&
      !flag
    ) {
      navigate('/multistep?step=1');
    } else if (
      currentStep === 3 &&
      (!formData.email || !formData.number) &&
      !flag
    ) {
      navigate('/multistep?step=2');
    } else {
      console.log(currentStep);
    }
  }, [currentStep, formData, navigate]);

  const nextStep = () => {
    navigate(`/multistep?step=${currentStep + 1}`);
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    navigate(`/multistep?step=${currentStep - 1}`);
    setCurrentStep(currentStep - 1);
  };

  const updateFormData = (newData) => {
    const updatedFormData = { ...formData, ...newData };
    setFormData(updatedFormData);
    sessionStorage.setItem('formData', JSON.stringify(updatedFormData));

    return updatedFormData;
  };

  return (
    <div>
      {currentStep === 1 && (
        <Form4
          nextStep={nextStep}
          updateFormData={updateFormData}
          formData={formData}
          flag={flag}
        />
      )}
      {currentStep === 2 && (
        <Form5
          nextStep={nextStep}
          prevStep={prevStep}
          updateFormData={updateFormData}
          formData={formData}
          flag={flag}
        />
      )}
      {currentStep === 3 && (
        <Form6
          prevStep={prevStep}
          updateFormData={updateFormData}
          formData={formData}
          flag={flag}
        />
      )}
    </div>
  );
};

export default TestForm;

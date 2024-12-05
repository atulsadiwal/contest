import React, { useState } from 'react';
import Register from './Register';
import OTPVerification from './OTPVerification';
import { API_NODE_URL } from '../../config';
import RegisterDetails from './RegisterDetails';

const RegistrationForm = () => {

  const [step, setStep] = useState(1);
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [sid, setSid] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    sid: '',
    dob: '',
    city: '',
    collegeName: '',
    highestQualification: ''
  });

  const handleRegisterSubmit = async (data) => {
    try {
      const response = await fetch(`${API_NODE_URL}register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result?.data?.sid) {
        setFormData({ ...formData, ...data, sid: result?.data?.sid });
        setSid(result?.data?.sid);
        setShowOTPVerification(true);
        setStep(1)
      } else {
        throw new Error('SID not received');
      }
    } catch (error) {
      console.error('Error in step 1:', error);
      alert('An error occured. Plese try again.');
    }
  };

  const handleOTPVerification = () => {
    setShowOTPVerification(false);
    setStep(2);
  };

  const handleOTPCancle = () => {
    setShowOTPVerification(false);
  };

  const handleRegisterDetailsSubmit = async (data) => {
    try {
      const finalData = { ...formData, ...data };
      const response = await fetch(`${API_NODE_URL}register/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });
      const result = await response.json();

      if (result?.status) {
        // createOrder();
        alert("Registration Sucessfull")
      } else {
        console.error('Registration failed!');
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Error in registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-mainSvg bg-cover flex items-center justify-center px-2 ">
        <div className='bg-gray-300 p-1 rounded-lg w-full max-w-md'>
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Registration</h1>
            {step === 1 && (
              <Register onSubmit={handleRegisterSubmit} />
            )}
            {step === 2 && (
              <RegisterDetails onSubmit={handleRegisterDetailsSubmit} />
            )}
            {showOTPVerification && (
              <OTPVerification mobile={FormData.mobile} onVerify={handleOTPVerification} onCancel={handleOTPCancle} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;

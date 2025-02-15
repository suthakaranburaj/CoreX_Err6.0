import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
}from '../components/ui/input-otp';
import { Input } from '../components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Mail, Phone, MapPin, Building, Key, User } from 'lucide-react';

const RegistrationForm = () => {
 
  const [otp, setOtp] = useState('');

  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
   
  });

  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVerifyClick = () => {
    // Here you would typically implement OTP sending logic
    setShowOtpInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const isEmailValid = formData.email.includes('@') && formData.email.includes('.');

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[var(--primary-color)]">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[var(--primary-color)]" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="flex-1 border-gray-300 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                  required
                />
                </div>
                
                <div className="flex items-center space-x-2">
      <InputOTP maxLength={6} className="flex-1">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

                <Button
                  type="button"
                  onClick={handleVerifyClick}
                  disabled={!isEmailValid}
                  className="bg-gray-800 hover:bg-gray-900 text-white"
                >
                  Verify
                </Button>
              </div>
            </div>

            

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[var(--primary-color)]" />
                <Input
                  type="tel"
                  name="password"
                  placeholder="Password"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="flex-1 border-gray-300 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white mt-6"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
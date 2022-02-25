import React from 'react';
import OtpInput from 'react-otp-input';
import { CustomOtpProps } from './customOtpModel';

const CustomOtp = ({
  numInputs,
  onChange,
  value,
  placeholder,
  separator,
  isDisabled,
  shouldAutoFocus,
  hasErrored,
  isInputNum,
  isInputSecure,
  data_testid,
}: CustomOtpProps) => {
  return (
    <>
      <OtpInput
        numInputs={numInputs}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        separator={separator}
        isDisabled={isDisabled}
        shouldAutoFocus={shouldAutoFocus}
        hasErrored={hasErrored}
        isInputNum={isInputNum}
        isInputSecure={isInputSecure}
        data-testid={data_testid}
      />
    </>
  );
};

export default CustomOtp;

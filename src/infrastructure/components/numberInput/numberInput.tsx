import React, { useState } from 'react';
import { Regex } from '../../../application/constants/constantsRegex';
import { Input, Button } from '../index';
import { NumberInputType } from './numberModel';

const NumberInput: React.FC<NumberInputType> = ({ onChange }: any) => {

  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
    onChange?.(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onChange?.(count - 1);
  };

  const handleChange = (e: any) => {
    if (Regex.onlyNumbers.test(e.nativeEvent.data)) {
      setCount(e.nativeEvent.data);
      onChange(e.nativeEvent.data);
    }
  };

  return (
    <>
      <Button label='+' onClick={handleIncrement} />
      <Input type='input' value={count} onChange={(e) => handleChange(e)} />
      <Button label='-' onClick={handleDecrement} />
    </>
  );
};

export default NumberInput;
import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Check for numbers and special characters using regular expressions
   

    
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter Password"
      />
    </div>
  );
};

export default PasswordInput;
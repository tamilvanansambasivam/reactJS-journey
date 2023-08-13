import React, { useState } from 'react';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className='search-box'
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
      />
      
      <p>Typed value: {inputValue}</p>
    </div>
  );
};

export default InputBox;

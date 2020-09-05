import React from "react";

const InputGroup = ({
  type,
  className,
  placeholder,
  value,
  name,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default InputGroup;

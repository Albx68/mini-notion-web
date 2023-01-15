import { ChangeEvent, MutableRefObject, RefObject } from "react";
import "./customInputstyles.css";

type inputProps = {
  className: string;
  name: string;
  placeholder: string;
  value: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  refValue: RefObject<HTMLInputElement>;
};

export const CustomInput: React.FC<inputProps> = ({
  className,
  name,
  placeholder,
  value,
  handleInputChange,
  refValue,
}) => {
  return (
    <input
      className={`input ${className}`}
      type="text"
      title={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      ref={refValue}
    ></input>
  );
};

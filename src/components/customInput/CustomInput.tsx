import { ChangeEvent, KeyboardEvent, RefObject } from "react";
import "./customInputstyles.css";

type inputProps = {
  className: string;
  name: string;
  placeholder: string;
  value: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  refValue: RefObject<HTMLInputElement>;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const CustomInput: React.FC<inputProps> = ({
  className,
  name,
  placeholder,
  value,
  handleInputChange,
  refValue,
  onKeyDown,
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
      onKeyDown={onKeyDown}
    ></input>
  );
};

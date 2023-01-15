import "./textStyleDD.css";
import { dropDownData, dropDownDataType } from "../../App";

const TextStyleDropDown: React.FC<{
  handleInputType: (label: string) => void;
  inputType: string;
}> = ({ handleInputType, inputType }) => {
  return (
    <ul className="dropdown">
      {dropDownData.map(({ label, heading, description }: dropDownDataType) => {
        return (
          <li
            key={label}
            className={`option ${inputType === label ? "active" : null}`}
            onClick={() => handleInputType(label)}
          >
            <div className="option_label_box">{label}</div>
            <div className="option_text">
              <div className="option_text_heading">{heading}</div>
              <div className="option_text_para">{description}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TextStyleDropDown;

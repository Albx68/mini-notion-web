import { useEffect, useRef, useState } from "react";
import { CustomInput } from "./components/customInput/CustomInput";
import TextStyleDropDown from "./components/textStyleDropDown.tsx/TextStyleDropDown";
import useCycle from "./hooks/useCycle";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const {
    cycle: inputCycle,
    up: handlePressUp,
    down: handlePressDown,
  } = useCycle(dropDownArr);
  const [inputType, setInputType] = useState("default");
  const inputRef = useRef<HTMLInputElement>(null);

  const commandsDropDownOn = input === "/";

  const placeholder =
    inputType === "default"
      ? "Type '/' for commands"
      : dropDownMap[inputType as keyof typeof dropDownMap];

  const className =
    inputType === "default"
      ? "defaultinput"
      : dropDownClassMap[inputType as keyof typeof dropDownMap];

  const handleInputType = (label: string) => {
    setInput("");
    setInputType(label);
    inputRef.current?.focus();
  };

  const handleKeyDown = (code: string) => {
    if (commandsDropDownOn) {
      switch (code) {
        case "ArrowDown":
          handlePressDown();
          break;
        case "ArrowUp":
          handlePressUp();
          break;
        case "Enter":
          setInput("");
          break;
        default:
      }
    }
  };

  useEffect(() => {
    if (input === "") {
      setInputType("default");
    } else {
      setInputType(inputCycle);
    }
  }, [inputCycle]);

  return (
    <div className="App">
      <center>
        <p>Mini Notion</p>
      </center>
      <CustomInput
        className={className}
        name="input"
        value={input}
        placeholder={placeholder}
        handleInputChange={(event) => setInput(event.target.value)}
        refValue={inputRef}
        onKeyDown={({ code }) => {
          handleKeyDown(code);
        }}
      />
      {commandsDropDownOn && (
        <TextStyleDropDown
          handleInputType={handleInputType}
          inputType={inputType}
        />
      )}
    </div>
  );
}

export default App;

export const dropDownMap = {
  H1: "Heading 1",
  H2: "Heading 2",
  Italic: "Text Italic",
  Text: "Regular Text",
};

export const dropDownClassMap = {
  H1: "heading1",
  H2: "heading2",
  Italic: "text_Italic",
  Text: "regular_Text",
};

export type dropDownDataType = typeof dropDownData[0];

export const dropDownData = [
  {
    label: "H1",
    heading: "Heading 1",
    description: "Big Section Heading",
  },
  {
    label: "H2",
    heading: "Heading 2",
    description: "Medium Section Heading",
  },
  {
    label: "Italic",
    heading: "Text Italic",
    description: "Italic text",
  },
  {
    label: "Text",
    heading: "Regular Text",
    description: "Regular text for paragraph",
  },
];

export const dropDownArr = dropDownData.map((el) => el.label);

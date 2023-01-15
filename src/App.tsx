import { useEffect, useRef, useState } from "react";
import { CustomInput } from "./components/customInput/CustomInput";
import useCycle from "./hooks/useCycle";
import "./App.css";
import CommandsDropDown from "./components/commandsDropDown/CommandsDropDown";
import { dropDownArr, dropDownMap, dropDownClassMap } from "./data";

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
        <CommandsDropDown
          handleInputType={handleInputType}
          inputType={inputType}
        />
      )}
    </div>
  );
}

export default App;

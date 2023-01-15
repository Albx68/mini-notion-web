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

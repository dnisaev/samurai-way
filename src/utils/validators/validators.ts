export const required = (value: any) => {
  if (value) return undefined;

  return "Invalid: field is required";
};

export const maxLengthCreator = (length: number) => (value: any) => {
  if (value.length > length) return `Invalid: should be less then ${length} chars`;

  return undefined;
};

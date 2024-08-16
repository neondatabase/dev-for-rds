export const convertStringParamToNull = (params, string) => {
  const value = params.get(string);
  return value === 'null' || value === '' ? null : value;
};

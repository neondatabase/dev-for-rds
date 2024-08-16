export const convertStringParamToBoolean = (params, string) => {
  return JSON.parse(params.get(string).toLowerCase());
};

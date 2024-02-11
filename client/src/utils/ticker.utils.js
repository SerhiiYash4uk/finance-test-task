export const dateFormatter = (date) => {
  const unixTimeZero = Date.parse(date);
  const dateUTC = new Date(unixTimeZero);
  const dateStringUTC = dateUTC.toUTCString();
  return dateStringUTC;
};

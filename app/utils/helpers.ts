export const isAlphanumeric = (character: string) => {
  var regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(character);
};

export const isAlphanumeric = (character: string) => {
  var regex = /^[a-zA-Z0-9]+$/;
  return regex.test(character);
};

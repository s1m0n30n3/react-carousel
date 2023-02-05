export const classNames = (classes) => {
  const array = classes.map((singleClass) => {
    if (typeof singleClass !== "string" || singleClass.length === 0) {
      return null;
    }
    return singleClass;
  });
  const arrayToString = array.toString();
  return arrayToString.split(",").join(" ").trim();
};

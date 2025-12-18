export const removeFromArray = (arr: any, value: any) => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

export const checkArrayOfEmptyStrings = (arr: string[]) => {
  let flag = true;

  arr.forEach((i) => {
    if (i !== "") {
      flag = false;
    }
  });
  return flag;
};

export const checkErrorArr = (arr: boolean[]) => {
  let flag = true;
};

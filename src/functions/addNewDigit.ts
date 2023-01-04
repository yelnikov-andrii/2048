
export const generateDigit = () => {
  return Math.round(Math.random() * 16);
};

export function addNewDigit(arr: any) {
  let value = 2;
  let randomForValue = Math.random();
  if (randomForValue >= 0.9) {
    value = 4;
  }
  const blankDigits = arr.filter((box: any) => box.value === 0);
  let digit: number;
  do {
    digit = generateDigit();
      // eslint-disable-next-line no-loop-func
      if (blankDigits.some((el: any) => el.id === digit + 1)) {
        break;
    }
  } while (true);
  arr[digit].value = value;
  return arr;
}
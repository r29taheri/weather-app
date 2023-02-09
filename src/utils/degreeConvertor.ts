const cToF = (celsius: number) => (celsius * 9) / 5 + 32;

export const degreeConvertor = (isCelsius: boolean, degree: number) => {
  if (isCelsius) return degree;

  return cToF(degree);
};

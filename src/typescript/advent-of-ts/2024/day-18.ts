// cheat??? ===> <T>(colors: Color[], defaultColor: Color)

// @satohshi solution
export const createStreetLight = <T>(
  colors: T[],
  defaultColor: NoInfer<T>,
) => {
  console.log(colors);
  return defaultColor;
}

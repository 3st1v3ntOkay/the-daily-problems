import { annualData } from "./data/day-3.data";

interface TData {
  housingIndex: number;
  minimumWage: number;
}

export const survivalRatio = (input: number): number => {
  const data: TData = annualData[input];

  if (!data) {
    throw new Error("Data not found");
  }

  return data.housingIndex / data.minimumWage;
}

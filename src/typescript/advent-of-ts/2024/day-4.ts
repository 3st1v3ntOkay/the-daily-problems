import { quarterlyData } from "./data/day-4.data";

type TInput = number | string;

interface TData {
  housingIndex: number;
  minimumWage: number;
}

export const survivalRatio = (input: TInput): number => {
  const quarter: string =
    typeof input === "string" ? input : `${input} Q1`;

  const data: TData = quarterlyData[quarter];

  if (!data) {
    throw new Error("Data not found");
  }

  return data.housingIndex / data.minimumWage;
}

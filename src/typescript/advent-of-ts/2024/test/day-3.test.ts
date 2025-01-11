import { survivalRatio } from "../day-3";

const reportForSanta = {
  2009: survivalRatio(2009),
  2010: survivalRatio(2010),
  2011: survivalRatio(2011),
  2012: survivalRatio(2012),
  2013: survivalRatio(2013),
  2014: survivalRatio(2014),
  2015: survivalRatio(2015),
  2016: survivalRatio(2016),
  2017: survivalRatio(2017),
  2018: survivalRatio(2018),
  2019: survivalRatio(2019),
  2020: survivalRatio(2020),
  2021: survivalRatio(2021),
  2022: survivalRatio(2022),
  2023: survivalRatio(2023),
}

// @ts-expect-error
survivalRatio("1");

// @ts-expect-error
survivalRatio(true);

// @ts-expect-error
survivalRatio([1]);

// @ts-expect-error
survivalRatio({ 1: 1 });

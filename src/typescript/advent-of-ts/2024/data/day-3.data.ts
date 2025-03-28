type AnnualData = {
  [key: string]: {
    /** inflation corrected housing price index */
    housingIndex: number;

    /** inflation corrected North Pole minimum wage */
    minimumWage: number;
  };
}

export const annualData: AnnualData = {
  2009: {
    housingIndex: 159.50891,
    minimumWage: 92.85234
  },
  2010: {
    housingIndex: 143.02079,
    minimumWage: 100.50286
  },
  2011: {
    housingIndex: 134.38007,
    minimumWage: 98.68833
  },
  2012: {
    housingIndex: 128.14281,
    minimumWage: 96.31795
  },
  2013: {
    housingIndex: 129.07457,
    minimumWage: 94.94066
  },
  2014: {
    housingIndex: 133.94671,
    minimumWage: 93.72707
  },
  2015: {
    housingIndex: 143.30408,
    minimumWage: 93.59833
  },
  2016: {
    housingIndex: 150.21623,
    minimumWage: 92.9189
  },
  2017: {
    housingIndex: 154.90384,
    minimumWage: 91.06557
  },
  2018: {
    housingIndex: 161.67095,
    minimumWage: 89.39745
  },
  2019: {
    housingIndex: 167.71417,
    minimumWage: 88.11883
  },
  2020: {
    housingIndex: 173.5093,
    minimumWage: 86.81302
  },
  2021: {
    housingIndex: 182.89259,
    minimumWage: 85.10033
  },
  2022: {
    housingIndex: 199.43678,
    minimumWage: 79.80175
  },
  2023: {
    housingIndex: 205.8372,
    minimumWage: 75.95666
  },
  2024: {
    housingIndex: 214.9681,
    minimumWage: 73.98181
  },
}

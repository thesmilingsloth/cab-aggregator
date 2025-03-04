export enum DATE_FORMATS {
  /**
   * format -> 8th Jun 2022, 1:13:23 PM
   */
  FORMAT_1 = "Do MMM YY, h:mm:ss A",
  /**
   * format -> 8th Jun
   */
  FORMAT_2 = "DD MMM",
  /**
   * format -> 8th Jun 2022
   */
  FORMAT_3 = "Do MMM YYYY",
  /**
   * format -> 8 Jun 22
   */
  FORMAT_4 = "DD MMM YY",
  /**
   * format -> 8th, Jun 2022
   */
  FORMAT_5 = "Do, MMM YYYY",
  /**
   * format -> 03 2022, week of the year
   */
  FORMAT_6 = "WW-YYYY",
  /**
   * format -> 2018-02-09
   */
  FORMAT_7 = "YYYY-MM-DD",
  /**
   * format -> 09 02 2018
   */
  FORMAT_8 = "DD MM YYYY",
  /**
   * format -> 10 Nov 2022
   */
  FORMAT_9 = "DD MMM YYYY",
  /**
   * format -> 2018-02-Th
   */
  FORMAT_10 = "yyyy-MM-dd",
  /**
   * format -> 26-04-2018 23:43
   */
  FORMAT_11 = "DD-MM-YYYY HH:mm",
  /**
   * format -> January 3rd 2022, 8:43:56 am
   */
  FORMAT_12 = "MMMM Do YYYY, h:mm:ss a",
  /**
   * format -> 10/11/22, 12:13 pm
   */
  FORMAT_13 = "DD/MM/YY[,] h:mm a",
  /**
   * format -> 10/11/2022
   */
  FORMAT_14 = "DD/MM/YYYY",
  /**
   * format -> 10/11/22
   */
  FORMAT_15 = "DD/MM/YY",
  /**
   * format -> 10-Nov-2022 12:20:55 PM
   */
  FORMAT_16 = "DD-MMM-YYYY h:mm:ss A",
  /**
   * format -> 9:23:38 PM
   */
  FORMAT_17 = "h:mm:ss A",
  /**
   * format -> 11:23:38 PM
   */
  FORMAT_18 = "hh:mm:ss A",
  /**
   * format -> 11:23:38 pm
   */
  FORMAT_19 = "h:mm:ss a",
  /**
   * format -> 12h:26m:21s
   */
  FORMAT_20 = "HH[h]:mm[m]:ss[s]",
  /**
   * format -> 12:29:41
   */
  FORMAT_21 = "HH:mm:ss",
  /**
   * format -> 12.29
   */
  FORMAT_22 = "HH.mm",
  /**
   * format -> 12:29 AM
   */
  FORMAT_23 = "HH:mm A",
  /**
   * format -> Nov 2022
   */
  FORMAT_24 = "MMM YYYY",
  /**
   * format -> 10 Nov 22
   */
  FORMAT_25 = "D MMM YY",
  /**
   *  format -> 2022-11-Th
   */
  FORMAT_26 = "YYYY-MM-dd",
  /**
   * format -> 8:02 PM
   */
  FORMAT_27 = "LT",
  /**
   * format -> 08/16/2018
   */
  FORMAT_28 = "L",
  /**
   * format -> 23:43
   */
  FORMAT_29 = "mm:ss",
  /**
   * format -> Nov 10 2022
   */
  FORMAT_30 = "MMM DD YYYY",
  /**
   * format -> 2022-11-10T13:06:30
   */
  FORMAT_31 = "YYYY-MM-DDTHH:mm:ss",
  /**
   *  format -> 02:03 PM z, 10-11-22
   */
  FORMAT_32 = "hh:mm A z, DD-MM-YY",
  /**
   * format -> November
   */
  FORMAT_33 = "MMMM",
  /**
   *  format -> 19th Dec 2022, 06:18
   */
  FORMAT_34 = `Do MMM YYYY, HH:mm`,
  /**
   * format -> Feb 12 2023 12:55:11 pm
   */
  FORMAT_35 = "MMM DD YYYY h:mm:ss a",
}

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SECOND;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;
const MS_IN_WEEK = 7 * MS_IN_DAY;
const MS_IN_MONTH = 31 * MS_IN_DAY;
const MS_IN_YEAR = 12 * MS_IN_MONTH;

/** Time in Milliseconds */
export const TIME_MS = {
  SECOND: MS_IN_SECOND,
  MINUTE: MS_IN_MINUTE,
  HOUR: MS_IN_HOUR,
  DAY: MS_IN_DAY,
  WEEK: MS_IN_WEEK,
  MONTH: MS_IN_MONTH,
  YEAR: MS_IN_YEAR,
} as const;

const S_IN_NON_LEAP_YEAR = 31536000;

/** Time in Seconds */
export const TIME_S = {
  NON_LEAP_YEAR: S_IN_NON_LEAP_YEAR,
} as const;

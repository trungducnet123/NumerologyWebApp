import moment from "moment";
import { sumAdjacent } from "./sumAdjacent";

export const getWalksOfLife = (
   birthDay: string = new Date().toISOString()
): number => {
   const date =
      birthDay === "11" || birthDay === "22"
         ? [birthDay]
         : moment(birthDay).format("DD").split(""); // Array string
   const month =
      birthDay === "11" ? [birthDay] : moment(birthDay).format("MM").split(""); // Array string
   const year = moment(birthDay)
      .format("YYYY")
      .split("")
      .reduce((a, c) => a + Number(c), 0)
      .toString()
      .split(""); // Array string

   const sumDate = sumAdjacent(date[0], date?.[1] ?? 0);
   const sumMonth = sumAdjacent(month[0], month?.[1] ?? 0);
   const sumYear = sumAdjacent(year[0], year?.[1] ?? 0);
   const sumAll = sumAdjacent(sumDate + sumMonth, sumYear, "walksOfLife");

   return sumAll;
};

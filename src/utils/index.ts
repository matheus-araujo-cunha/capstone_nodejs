import { DateTime } from "luxon";

const getDiffBetweenDays = (initialDate: string, finishDate: string) => {
  const response = DateTime.fromISO(initialDate)
    .diff(DateTime.fromISO(finishDate), "days")
    .toObject();

  return Math.floor(response.days as number);
};

const formatDate = (date: string) => {
  console.log("DATA AQ", date);
  let dateSplit = date.split("/");

  const dateFormated = [dateSplit[1], dateSplit[0], dateSplit[2]].join("/");

  return dateFormated;
};

export { getDiffBetweenDays, formatDate };

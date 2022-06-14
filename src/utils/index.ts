import luxon from "luxon";

const DateTime = luxon.DateTime;

const getDiffBetweenDays = (initialDate: string, finishDate: string) => {
  const response = DateTime.fromISO(initialDate)
    .diff(DateTime.fromISO(finishDate), "days")
    .toObject();

  return Math.floor(response.days as number);
};

export { getDiffBetweenDays };

import moment from "moment";

const getDiffBetweenDays = (initialDate: Date, finishDate: Date) => {
  const diff = moment(initialDate, "DD/MM/YYYY").diff(
    moment(finishDate, "DD/MM/YYYY")
  );

  const days = moment.duration(diff).asDays();

  return days;
};

export { getDiffBetweenDays };

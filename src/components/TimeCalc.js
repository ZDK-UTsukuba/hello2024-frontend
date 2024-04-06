const TimeCalc = (date) => {
  const start = date;
  const end = Date.now();
  const elapsedtime = end - start;
  const days = 1000 * 60 * 60 * 24;

  const elapseddate = Math.trunc(elapsedtime / days);

  return elapseddate;
};

export default TimeCalc;

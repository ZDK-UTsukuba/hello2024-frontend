const DateFilter = (date) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const hour = date.substring(11, 13);
  const min = date.substring(14, 16);
  const sec = date.substring(17, 19);

  const dateObject = new Date(year, month - 1, day, hour, min, sec);

  const datereturn = dateObject;
  return datereturn;
};

export default DateFilter;

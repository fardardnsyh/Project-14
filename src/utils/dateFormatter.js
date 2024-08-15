export const formatToShortDate = (inputDate) => {
  let date = new Date(inputDate);
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formatter.format(date);
};

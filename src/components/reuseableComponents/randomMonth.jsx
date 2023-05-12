const randomNum = Math.floor(Math.random() * 5) + 1;
let nextMonthDate = new Date(
  new Date().setMonth(new Date().getMonth() + randomNum)
);

// Get month and year string in "June 2021" format
let monthYearString = nextMonthDate.toLocaleString("default", {
  month: "long",
  year: "numeric",
});

export default monthYearString
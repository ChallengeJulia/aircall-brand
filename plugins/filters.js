import Vue from "vue";

Vue.filter("uppercase", (value) => {
  return value.toUpperCase();
});

const dateOptions = {
  year: `numeric`,
  month: `2-digit`,
  day: `2-digit`,
  hour12: true,
};

Vue.filter("date", (value) => {
  if (typeof value !== `string` && typeof value !== `number`) return `–`;
  const date = new Date(value);
  // Number.isNan is more strict than global.isNan
  // => we absolutely need a .getTime()
  if (Number.isNaN(date.getTime())) return `–`;
  const dateFormatter = new Intl.DateTimeFormat(`en-US`, dateOptions).format;
  return dateFormatter(date);
});

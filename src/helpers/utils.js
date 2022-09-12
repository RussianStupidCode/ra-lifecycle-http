const isValidTimeZone = (timezone) => {
  const regex = /^(\+|-)\d{4}$/;
  return regex.test(timezone);
};

const getClockValue = (value) => {
  return {
    h: value.hour() * 30,
    m: value.minutes() * 6,
    s: value.seconds() * 6,
  };
};

export { isValidTimeZone, getClockValue };

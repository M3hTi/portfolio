export function isWinter() {
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const now = new Date();
  const month = months[now.getMonth()];
  if (month === "December" || month === "January" || month === "February")
    return true;

  return false;
}

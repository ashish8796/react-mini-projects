/* eslint-disable default-case */
export function JoinedDate(date) {
  let monthInString = "";
  const [year, month, day] = date.split("-");

  switch (month) {
    case "01":
      monthInString = "January";
      break;
    case "02":
      monthInString = "February";
      break;
    case "03":
      monthInString = "March";
      break;
    case "04":
      monthInString = "April";
      break;
    case "05":
      monthInString = "May";
      break;
    case "06":
      monthInString = "June";
      break;
    case "07":
      monthInString = "July";
      break;
    case "08":
      monthInString = "August";
      break;
    case "09":
      monthInString = "September";
      break;
    case "10":
      monthInString = "October";
      break;
    case "11":
      monthInString = "November";
      break;
    case "12":
      monthInString = "December";
  }

  return `${day} ${monthInString}, ${year}`;
}
import { fetchLoggedItemsById } from "../../../utils/api";

function singleFollowerLineChart(user) {
  // const user = 2

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const today_formatted = yyyy + "-" + mm + "-" + dd;

  Date.prototype.subtractDays = function (d) {
    this.setTime(this.getTime() - d * 24 * 60 * 60 * 1000);
    return this;
  };

  let start = new Date();
  start.setDate(today.getDate() - 6);
  const formattedStart = start.toISOString().split("T")[0];
  // const dd_30 = String(start.getDate()).padStart(2, "0");
  // const mm_30 = String(start.getMonth() + 1).padStart(2, "0");
  // const yyyy_30 = today.getFullYear();
  // start = yyyy_30 + "-" + mm_30 + "-" + dd_30;

  return fetchLoggedItemsById(user_id, start, today_formatted).then((loggedItems) => {
    const loggedItemCount = {};
    const sortedLoggedItems = loggedItems.sort((item1, item2) => {
      const date1 = new Date(item1.date);
      const date2 = new Date(item2.date);
      return date1 - date2;
    });

    sortedLoggedItems.forEach((loggedItem) => {
      const date = loggedItem.date.split("T")[0];
      if (!loggedItemCount[date]) {
        loggedItemCount[date] = 1;
      } else {
        loggedItemCount[date]++;
      }
    });
    const loggedItemArray = [];

    for (key in loggedItemCount) {
      loggedItemArray.push({ date: key, count: loggedItemCount[key] });
    }
    return loggedItemArray;
  });
}

// const data = {
//   labels: ["M", "T", "W", "T", "F", "S", "S"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 10, 10],
//       color: (opacity = 1) => `rgba(300, 300, 100, ${opacity})`,
//       strokeWidth: 2,
//     },
//     {
//       data: [10, 35, 38, 60, 72, 39, 0],
//       color: (opacity = 1) => `rgba(234, 130, 244, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
//   legend: ["You", user.first_name],
// };
// return data;

// const followersLineChart = {
//   labels: ["M", "T", "W", "T", "F", "S", "S"],
//   datasets: [
//     {
//       data: [50, 85, 47, 110, 150, 22, 18],
//       color: (opacity = 1) => `rgba(300, 300, 100, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// };

// const postcodeLineChart = {
//   labels: ["M", "T", "W", "T", "F", "S", "S"],
//   datasets: [
//     {
//       data: [70, 90, 80, 120, 140, 60, 50],
//       color: (opacity = 1) => `rgba(57, 188, 217, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// };

// const areaLineChart = {
//   labels: ["M", "T", "W", "T", "F", "S", "S"],
//   datasets: [
//     {
//       data: [150, 180, 160, 210, 250, 120, 100],
//       color: (opacity = 1) => `rgba(77, 192, 122, ${opacity})`,
//       strokeWidth: 2,
//     },
//   ],
// };

module.exports = { singleFollowerLineChart, postcodeLineChart, followersLineChart, areaLineChart };

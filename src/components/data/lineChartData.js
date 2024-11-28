const { fetchLoggedItemsById } = require("../../../utils/api");
const { getPreviousDate } = require("../../../utils/date");

function singleFollowerLineChart(user_id, user_name) {
  const dateLabels = [];

  for (let i = 6; i > -1; i--) {
    dateLabels.push(getPreviousDate(i));
  }

  return Promise.all([
    fetchLoggedItemsById(2, getPreviousDate(6), getPreviousDate(0)),
    fetchLoggedItemsById(user_id, getPreviousDate(6), getPreviousDate(0)),
  ]).then((loggedItems) => {
    const loggedItemXpArr = loggedItems.map((userLoggedItems) => {
      const xpByDay = {};
      dateLabels.forEach((date) => {
        xpByDay[date] = 0;
      });

      userLoggedItems.forEach((loggedItem) => {
        const formattedDate = loggedItem.date.split("T")[0];
        xpByDay[formattedDate] += loggedItem.xp;
      });
      return (loggedItemData = dateLabels.map((date) => xpByDay[date]));
    });
    const dateLabelsFormatted = dateLabels.map((dateLabel)=>{
      const date_array = dateLabel.split("-")
      return date_array[2] + "-" + date_array[1]
    })
    return {
      labels: dateLabelsFormatted,
      datasets: [
        {
          data: loggedItemXpArr[0],
          color: (opacity = 1) => `rgba(300, 300, 100, ${opacity})`,
          strokeWidth: 3,
        },
        {
          data: loggedItemXpArr[1],
          color: (opacity = 1) => `rgba(57, 188, 217, ${opacity})`,
          strokeWidth: 3,
        },
      ],
      legend: ["You", user_name],
    };
  });
}

const followersLineChart = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      data: [50, 85, 47, 110, 150, 22, 18],
      color: (opacity = 1) => `rgba(300, 300, 100, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const postcodeLineChart = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      data: [70, 90, 80, 120, 140, 60, 50],
      color: (opacity = 1) => `rgba(57, 188, 217, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const areaLineChart = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      data: [150, 180, 160, 210, 250, 120, 100],
      color: (opacity = 1) => `rgba(77, 192, 122, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

module.exports = {
  singleFollowerLineChart,
  postcodeLineChart,
  followersLineChart,
  areaLineChart,
};

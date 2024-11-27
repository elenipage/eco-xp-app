const { fetchLoggedItemsById } = require("../../../utils/api")
const { getPreviousDate } = require("../../../utils/date")

function singleFollowerLineChart() {
  const dateLabels = []

  for(let i = 0; i<7;i++){
    dateLabels.push(getPreviousDate(i))
  }

  
  return fetchLoggedItemsById(2, getPreviousDate(6), getPreviousDate(0))
  .then((loggedItems) => {
    
    const xpByDay ={}
    dateLabels.forEach(date => {
      xpByDay[date] = 0
    });
    
    loggedItems.forEach(loggedItem => {
      const formattedDate = loggedItem.date.split("T")[0]
      xpByDay[formattedDate] += loggedItem.xp
    });
    const loggedItemData = dateLabels.map((date) => xpByDay[date]);

    return {
      
      labels: dateLabels,
      datasets: [
        {
          data: loggedItemData,
          color: (opacity = 1) => `rgba(300, 300, 100, ${opacity})`,
          strokeWidth: 3,
        },
      ],
      legend: ["You"],
    }
  })

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
}

const postcodeLineChart = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      data: [70, 90, 80, 120, 140, 60, 50],
      color: (opacity = 1) => `rgba(57, 188, 217, ${opacity})`,
      strokeWidth: 2,
    },
  ],
}

const areaLineChart = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      data: [150, 180, 160, 210, 250, 120, 100],
      color: (opacity = 1) => `rgba(77, 192, 122, ${opacity})`,
      strokeWidth: 2,
    },
  ],
}

module.exports = {
  singleFollowerLineChart,
  postcodeLineChart,
  followersLineChart,
  areaLineChart,
}

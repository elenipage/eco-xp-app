
const singleFollowerLineChart = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 10],
        color: (opacity = 1) => `rgba(300, 300, 100, ${opacity})`,
        strokeWidth: 2 
      },
      {
        data: [10, 35, 38, 60, 72, 39, 0],
        color: (opacity = 1) => `rgba(234, 130, 244, ${opacity})`, 
        strokeWidth: 2 
      }
    ],
    legend: ["User", "Follower"] 
  };


  const followersLineChart = {
    
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            data: [50, 85, 47, 110, 150, 22, 18],
            color: (opacity = 1) => `rgba(300, 300, 100, ${opacity})`,
            strokeWidth: 2 
          },
        ],
      };

      const postcodeLineChart = {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            data: [70, 90, 80, 120, 140, 60, 50], 
            color: (opacity = 1) => `rgba(57, 188, 217, ${opacity})`, 
            strokeWidth: 2
          },
        ],
      };
      
      const areaLineChart = {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            data: [150, 180, 160, 210, 250, 120, 100], 
            color: (opacity = 1) => `rgba(77, 192, 122, ${opacity})`,
            strokeWidth: 2 
          },
        ],
      };
      
      module.exports = {postcodeLineChart, followersLineChart, areaLineChart}
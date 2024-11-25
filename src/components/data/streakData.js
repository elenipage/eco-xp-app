import { fetchLoggedItemsById } from "../../../utils/api";
import { useUser } from "../../context/user-context";

export function streakData() {
    const user = 2
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
  start.subtractDays(35);
  const dd_35 = String(start.getDate()).padStart(2, "0");
  const mm_35 = String(start.getMonth() + 1).padStart(2, "0");
  const yyyy_35 = today.getFullYear();
  start = yyyy_35 + "-" + mm_35 + "-" + dd_35;

  return fetchLoggedItemsById(user, start, today_formatted).then((response) => {
    const loggedItemCount = {}
    response.forEach((itemLogged) => {
        if(!loggedItemCount[itemLogged.date]) {
            loggedItemCount[itemLogged.date] = 1}
        else{
            loggedItemCount[itemLogged.date] ++
        }
    });
    const loggedItemArray = []

    for(key in loggedItemCount){
        loggedItemArray.push({date: key, count : loggedItemCount[key]})
    }
    console.log(loggedItemArray)
    return loggedItemArray
  });



}

// [
//     { date: "2024-11-02", count: 1 },
//     { date: "2024-11-03", count: 2 },
//     { date: "2024-11-11", count: 3 },
//     { date: "2024-11-05", count: 4 },
//     { date: "2024-11-06", count: 5 },
//     { date: "2024-11-30", count: 2 },
//     { date: "2024-11-19", count: 2 },
//     { date: "2024-11-18", count: 3 },
//     { date: "2024-11-22", count: 4 },
//     { date: "2024-11-31", count: 3 },
//     { date: "2024-11-01", count: 3 },
//     { date: "2024-11-02", count: 4 },
//     { date: "2024-11-05", count: 2 },
//     { date: "2024-11-30", count: 4 }
//   ];

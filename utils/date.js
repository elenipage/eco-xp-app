function getPreviousDate(days){
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, "0")
  const mm = String(today.getMonth() + 1).padStart(2, "0")
  const yyyy = today.getFullYear()
  const today_formatted = yyyy + "-" + mm + "-" + dd
  Date.prototype.subtractDays = function (d) {
    this.setTime(this.getTime() - d * 24 * 60 * 60 * 1000)
    return this
  }
  let start = new Date()
  start.subtractDays(days)
  const dd_35 = String(start.getDate()).padStart(2, "0")
  const mm_35 = String(start.getMonth() + 1).padStart(2, "0")
  const yyyy_35 = today.getFullYear()
  start = yyyy_35 + "-" + mm_35 + "-" + dd_35
  return start
}

module.exports = {getPreviousDate}
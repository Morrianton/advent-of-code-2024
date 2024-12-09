const { real_input, test_input } = require('./constants');
const { checkReportSafety } = require('./utils');

const reportList = real_input.trim().split('\n').map(line => line.trim().split(/\s/));

// for (let i = 0; i < 25; i++) {
//   console.log(reportList[i]);
// }

let safeReports = 0;

for (let i = 0; i < reportList.length; i++) {
  if (checkReportSafety(reportList[i])) {
    safeReports++;
  } else {
    for (let j = 0; j < reportList[i].length; j++) {
      const modifiedReport = reportList[i].slice(0, j).concat(reportList[i].slice(j + 1));

      if (checkReportSafety(modifiedReport)) {
        safeReports++;
        break;
      }
    }
  }
}

console.log(safeReports);

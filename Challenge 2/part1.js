const { real_input, test_input } = require('./constants');
const { checkReportSafety } = require('./utils');

const reportList = real_input.trim().split('\n').map(line => line.trim().split(/\s/));

let safeReports = 0;

for (let i = 0; i < reportList.length; i++) {
  if (checkReportSafety(reportList[i])) {
    safeReports++;
  }
}

console.log(safeReports);

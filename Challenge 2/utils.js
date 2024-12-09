  /**
   * Checks the difference between level measurements is within tolerances.
   * @description The difference between level measurements cannot be less than 1 or more than 3.
   * @param {number} first First level to be compared.
   * @param {number} second Second level to be compared.
   * @returns {boolean} Whether the level measurements are within tolerances.
   */
  function checkWithinTolerances(first, second) {
    const difference = second - first;
    return Math.abs(difference) > 0 && Math.abs(difference) < 4;
  }

  /**
   * Determines an increasing, decreasing, or constant trend between two measured levels.
   * @param {number} first  First level to be compared.
   * @param {number} second Second level to be compared.
   * @returns {string} Whether the trend is increasing, decreasing, or constant.
   */
  function determineTrend(first, second) {
    const difference = second - first;

    if (difference > 0) {
      return "increasing";
    } else if (difference < 0) {
      return "decreasing";
    } else {
      return "constant"
    }
  }

  /**
   * Checks whether a reports' levels are safe.
   * @param {Array<number>} report Array of reactor level measurements.
   * @returns {boolean} Whether the report's levels are safe.
   */
  function checkReportSafety(report) {
    let previousTrend = "";

    for (let i = 0; i < report.length - 1; i++) {
      if (!checkWithinTolerances(report[i], report[i + 1])) return false;

      const currentTrend = determineTrend(report[i], report[i + 1]);

      if (currentTrend === "constant") return false;

      if (!previousTrend) {
        previousTrend = currentTrend;
        continue;
      }

      if (previousTrend !== currentTrend) return false;

      previousTrend = currentTrend;
    }

    return true;
  }

module.exports = { checkReportSafety };

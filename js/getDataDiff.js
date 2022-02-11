import { DateTime } from "https://moment.github.io/luxon/es6/luxon.min.js";

const getDataDiff = (start, end) => {
  const v1 = DateTime.fromISO(start);
  const v2 = DateTime.fromISO(end);

  return v2.diff(v1, ["years", "months", "days"]).toObject();
};
export default getDataDiff;

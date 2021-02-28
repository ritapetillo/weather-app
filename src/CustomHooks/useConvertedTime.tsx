import moment from "moment";

const useConvertedTime = (date: number, timezone: string): string => {
  if (date && timezone) {
    const dateConverted = moment.unix(date);
    return dateConverted.tz(timezone).format("h:mm a z");
  } else {
    return "";
  }
};

export default useConvertedTime;

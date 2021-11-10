import './DaysCounter.css';
import DaysCircle from './DaysCircle';

const DaysCounter = (props) => {
  let ninetyDaysCheck = [0, false];
  if (props.dates) {
    // Adds a specified numbers of days to a date
    const addDays = (date, days = 1) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    };

    // Subtracts a specified number of days from a date
    const subtractDays = (date, days = 1) => {
      const result = new Date(date);
      result.setDate(result.getDate() - days);
      return result;
    };

    // Returns an array of dates determined by start and end dates
    const dateRange = (start, end, range = []) => {
      if (start > end) return range;
      const next = addDays(start, 1);
      return dateRange(next, end, [...range, start]);
    };

    // Takes two arrays of dates and returns the amount of days they share
    const arrCompare = (arr1, arr2) => {
      let days = 0;
      const arr1Len = arr1.length,
        arr2Len = arr2.length;

      for (let i = 0; i < arr1Len; i++) {
        for (let j = 0; j < arr2Len; j++) {
          if (arr1[i].getTime() === arr2[j].getTime()) {
            days++;
          }
        }
      }
      return days;
    };

    // Takes the planned stay date range, and starting from the first day
    // of the planned stay, checks 180 days back to determine how many
    // intersecting days there are between the planned stay and the
    // previous stays. Will return the total number of intersecting days.
    const ninetyDaysCalculator = (dates) => {
      if (!dates[0].start || !dates[0].end) {
        return;
      }

      const datesLen = dates.length;
      let days = [0, false];


      const latestStayRange = dateRange(dates[0].start, dates[0].end),
        latestStayRangeLen = latestStayRange.length;

      for (let i = 0; i < latestStayRangeLen; i++) {
        days[0] = 0;
        for (let j = 0; j < datesLen; j++) {
          const prevStay = dateRange(dates[j].start, dates[j].end);

          days[0] += arrCompare(
            dateRange(
              subtractDays(latestStayRange[i], 179),
              latestStayRange[i]
            ),
            prevStay
          );
          if (days[0] === 90) {
            days[1] = latestStayRange[i].toLocaleDateString();
          }
        }
      }
      return days;
    };

    ninetyDaysCheck = ninetyDaysCalculator(props.dates);
  }

  return (
    <div className="counter">
      <DaysCircle check={ninetyDaysCheck} onColorChange={props.onColorChange}/>
      <h5 id="info--text">
        Input your planned stay and any previous stays, then press
        'calculate'
      </h5>
    </div>
  );
};

export default DaysCounter;
